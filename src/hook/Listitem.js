import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

ListItem.propTypes = {
    
};

function ListItem(props) {
    const [books, setTodoList] = useState([]);
    const [bookName, setBookName]  = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [editIndex, setEditIndex] = useState(0);

    const handelChange =(e)=>{
        setBookName(e.target.value);
    }   

    const addItem =()=>{
        if(!bookName) {
            alert("ban phai nhap vao ten sach!")
            return
        }
        const newTodo = {
            id: books.length ,
            name : bookName
        }
     const newTodoList = [...books];
        newTodoList.push(newTodo);
        console.log(newTodoList)
        setTodoList(newTodoList);
         setBookName('')
    }

    const formEdit =(book) => {
        return (
            <div className ="form-edit"> 
                <input type = "text"  onChange ={()=>{}}/>
                <hr/>
                <button onClick = {()=>{}}>Yes</button>
                <button>No</button>
            </div>
        )
    }

    const deleteItem = (index)=>{
            const newTodoList = [...books];
            newTodoList.splice(index, 1);
            setTodoList(newTodoList);
    }
    const showItem =()=>{
        const show = books.map((book,index) =>{
        return (
        <div key={index}> 
            <span >{book.name }</span>
            <button type="button" className="btn btn-primary" onClick={()=>{clickEdit(book)}}>
                 EDIT
            </button>
            <button className="btn btn-warning" onClick ={()=>deleteItem(index)}>DELETE</button>         
        </div>
        )})
        return show;
    } 

    const clickEdit=(book)=>{
        setEditIndex(book)
        setModalOpened(true)
    }
    return (
        <div>
            <input type ='text' value = {bookName} onChange = {handelChange}></input>
            <button onClick ={addItem}>ADD</button>       
            <div>
                <div>{showItem()}</div> 
            </div>
            {modalOpened && formEdit()}
        </div>
    );
}
export default ListItem;