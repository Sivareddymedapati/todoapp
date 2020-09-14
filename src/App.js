import React from 'react';
import Form from './components/Form/Form'
import Table from './components/Table/Table'
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/Store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Form />
       
    </div>
    </Provider>
  );
}

export default App;
