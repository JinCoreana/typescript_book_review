import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Error from './pages/Error';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Signin' element={<SignIn />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/book/:id' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes></BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
