import React from 'react';
class Product extends React.Component {
    render() {
        return (
            <div className=" col-md-4s card bg-dark text-white">
            <img src={this.props.link} className="card-img"/>
            <div className={this.props.tenSP}>
        <h5 className="card-title" alt={this.props.tenSP}>{this.props.tenSP}</h5>
        <p className="card-text">{this.props.contents}</p>
        <p className="card-text">{this.props.thoiGianMoiUpdate}</p>
        <button type="button" class="btn btn-info">Edit</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-secondary">delete</button>
        </div>
      </div>
        );
    }
}

export default Product;