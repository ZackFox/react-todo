import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const taskList = [
  { id: 1, text: 'go to store', complite: false },
  { id: 2, text: 'go to walk', complite: false },
];

render(<App tasks={taskList} />, document.getElementById('root'));
