import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Todos from './components/Todos'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Todos />
    </div>
    </Provider>
  );
}

export default App;
