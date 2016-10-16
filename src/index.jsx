import React from 'react';
import { render } from 'react-dom';
import ToDoApp from './ToDoApp/ToDoApp.jsx';
import styles from '../global/style.css';

render(<ToDoApp/>, document.querySelector("#app"));
