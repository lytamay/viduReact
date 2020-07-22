import React from 'react';
import Header from './components/header/Head.js';
import ListProduct from './components/body/ListProduct.js';
class App extends React.Component {


  render() {
    return (
      <div>
        <Header></Header>
        <ListProduct></ListProduct>
      </div>
    );
  }
}

export default App;
