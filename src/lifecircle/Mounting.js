import React from 'react';

class Mounting extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            trangThai: 'khoi tao'
        }
    }
    componentWillMount() {
        console.log('componentWillMount chay dau tien');
    }
    componentDidMount() {
        console.log("componentDidMount chay thu 3")
    } 
    render() {
        console.log("reder chay thu 2");
        return (
            <div>           
            </div>
        );
    }
}
export default Mounting;
