import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { EditTodoPage } from './edit/EditTodoPage';
import { HomePage } from './home/HomePage';
import { NewTodoPage } from './new/NewTodoPage';
import { ErrorNotFoundPage } from './error/ErrorNotFoundPage'

function App() {
return(
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:search" element={<HomePage/>}/>
      <Route path="/new" element={<NewTodoPage/>}/>
      <Route path="/edit/:id" element={<EditTodoPage/>}/>
      <Route path="/*" element={<ErrorNotFoundPage/>}/>
    </Routes>
  </HashRouter>
);
}

export { App };
