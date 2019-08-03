import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Todos from './components/Todos'
import store from './store'
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
      <div className="Content">
        <Header />
        <Todos />
      </div>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
