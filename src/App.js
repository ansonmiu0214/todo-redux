import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Todos from './components/Todos'
import store from './store'
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
      <div className="Content" style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Todos />
      </div>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
