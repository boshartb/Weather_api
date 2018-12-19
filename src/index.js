import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var post = {
  title: "Dinosaurs are awesome",
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

var authors = [
  'Stealthy Stegosaurus',
  'Tiny trex',
  'Iguanadon Ivory'
]

ReactDOM.render(
  <App post={ post } authors={ authors } />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
