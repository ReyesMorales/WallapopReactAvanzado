import advertsReducer, {
    setTags,
    setAdverts,
    setAdvertDetail,
    createAdvert,
    deleteAdvert,
  } from './advertsReducer';
  
  describe('advertsReducer', () => {
    it('should handle SET_TAGS action', () => {
      const initialState = {
        tags: [],
      };
  
      const tags = ['tag1', 'tag2', 'tag3'];
      const action = setTags(tags);
  
      const newState = advertsReducer(initialState, action);
  
      expect(newState.tags).toEqual(tags);
    });
  
    it('should handle SET_ADVERTS action', () => {
      const initialState = {
        adverts: [],
      };
  
      const adverts = [{ id: 1, name: 'Advert 1' }, { id: 2, name: 'Advert 2' }];
      const action = setAdverts(adverts);
  
      const newState = advertsReducer(initialState, action);
  
      expect(newState.adverts).toEqual(adverts);
    });
  
    it('should handle SET_ADVERT_DETAIL action', () => {
      const initialState = {
        advertDetail: null,
      };
  
      const advert = { id: 1, name: 'Advert 1' };
      const action = setAdvertDetail(advert);
  
      const newState = advertsReducer(initialState, action);
  
      expect(newState.advertDetail).toEqual(advert);
    });
  
    it('should handle CREATE_ADVERT action', () => {
      const initialState = {
        adverts: [],
      };
  
      const advert = { id: 1, name: 'Advert 1' };
      const action = createAdvert(advert);
  
      const newState = advertsReducer(initialState, action);
  
      expect(newState.adverts).toEqual([advert]);
    });
  
    it('should handle DELETE_ADVERT action', () => {
      const initialState = {
        adverts: [
          { id: 1, name: 'Advert 1' },
          { id: 2, name: 'Advert 2' },
        ],
      };
  
      const advertId = 1;
      const action = deleteAdvert(advertId);
  
      const newState = advertsReducer(initialState, action);
  
      expect(newState.adverts).toEqual([{ id: 2, name: 'Advert 2' }]);
    });
  
    it('should return the initial state for unknown action types', () => {
      const initialState = {
        tags: [],
        adverts: [],
        advertDetail: null,
      };
  
      const action = { type: 'UNKNOWN_ACTION' };
  
      const newState = advertsReducer(initialState, action);
  
      expect(newState).toEqual(initialState);
    });
  });
  
  export {}