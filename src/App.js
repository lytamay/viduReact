import React from 'react';
import Header from './components/header/Head.js';
import ListProduct from './components/body/ListProduct.js';
import Mounting from './lifecircle/Mounting.js';

class App extends React.Component {


  render() {
    return (
      <div>
        {/* <Header></Header> */}
        {/* <ListProduct></ListProduct> */}
        <Mounting/>
      </div>
    );
  }
}

export default App;
