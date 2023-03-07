import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar'
import Noteblocks from './savedNotes'
import "./CSS/navbar.css";
import "./CSS/home.css";
import Modalnote from './modalNote';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Navbar />
    <Noteblocks />
    <Modalnote />
  </div>
);
