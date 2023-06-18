import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {

it('renders the Button component correctly', () => {
  const tree = renderer.create(<Button>Click me</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the primary variant of Button correctly', () => {
  const tree = renderer
    .create(<Button variant="primary">Click me</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
});
