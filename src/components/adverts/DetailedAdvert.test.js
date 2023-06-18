import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, MemoryRouter } from 'react-router-dom';
import DetailedAdvert from './DetailedAdvert';
import { getAdvertDetail, deleteAdvert as deleteAdvertService } from './service';
import { setAdvertDetail, deleteAdvert } from '../../store/reducers/advertsReducer';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('./service', () => ({
  getAdvertDetail: jest.fn(),
  deleteAdvert: jest.fn(),
}));

describe('DetailedAdvert', () => {
  const dispatchMock = jest.fn();
  const navigateMock = jest.fn();
  const setShowModalMock = jest.fn();
  const id = '1';
  const advert = {
    id: '1',
    name: 'Test Advert',
    sale: true,
    price: 100,
    tags: ['test', 'example'],
    photo: 'test-photo.jpg',
  };

  beforeEach(() => {
    useSelector.mockImplementation((selectorFn) => selectorFn({ adverts: { advertDetail: advert } }));
    useDispatch.mockReturnValue(dispatchMock);
    useParams.mockReturnValue({ id });
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    useParams.mockClear();
    getAdvertDetail.mockClear();
    deleteAdvertService.mockClear();
    dispatchMock.mockClear();
    navigateMock.mockClear();
    setShowModalMock.mockClear();
  });

  it('should fetch advert detail and render correctly', async () => {
    getAdvertDetail.mockResolvedValue(advert);

    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <DetailedAdvert />
      </MemoryRouter>
    );

    expect(getAdvertDetail).toHaveBeenCalledWith(id);
    await waitFor(() => {
      expect(getByText('Test Advert')).toBeInTheDocument();
      expect(getByText('100')).toBeInTheDocument();
      expect(getByText('test')).toBeInTheDocument();
      expect(getByText('example')).toBeInTheDocument();
      expect(getByAltText('Advert Photo')).toBeInTheDocument();
    });
  });

  it('should delete advert on confirmation', async () => {
    deleteAdvertService.mockResolvedValue();
    const { getByText } = render(
      <MemoryRouter>
        <DetailedAdvert />
      </MemoryRouter>
    );
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(setShowModalMock).toHaveBeenCalledWith(true);
      expect(deleteAdvertService).toHaveBeenCalledWith('1');
      expect(dispatchMock).toHaveBeenCalledWith(deleteAdvert('1'));
      expect(setShowModalMock).toHaveBeenCalledWith(false);
      expect(navigateMock).toHaveBeenCalledWith('/');
    });
  });
});
