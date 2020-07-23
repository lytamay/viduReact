import React from 'react';
import Product from './Product';

class ListProduct extends React.Component {
    render() {
        return (
            <div className="row">
               <div><Product link="https://20again.vn/media/catalog/product/cache/28/image/362x540/9df78eab33525d08d6e5fb8d27136e95/a/1/a120n-jaw0349-mxx5-01.jpg" tenSP="hang1" contents="La laoi hang dac biet" ></Product></div>
                <div><Product link="https://20again.vn/media/catalog/product/cache/28/image/362x540/9df78eab33525d08d6e5fb8d27136e95/a/1/a120n-jaw0349-mxx5-01.jpg" tenSP="hang2" contents="La laoi hang dac sajdsjsjdjs" ></Product></div>
                <div><Product link="https://20again.vn/media/catalog/product/cache/28/image/362x540/9df78eab33525d08d6e5fb8d27136e95/a/1/a120n-jaw0349-mxx5-01.jpg" tenSP="hang2" contents="La laoi hang dac sajdsjsjdjs" ></Product></div>            
            </div>
        );
    }
}


export default ListProduct;