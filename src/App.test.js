import React from 'react';
import ReactDOM from 'react-dom';
import Reactris from './Reactris';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reactris />, div);
  ReactDOM.unmountComponentAtNode(div);
});
