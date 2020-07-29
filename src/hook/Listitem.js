import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

ListItem.propTypes = {
    
};

function ListItem(props) {
    const [books, setBooks] = useState([]);
    const [bookName, setBookName]  = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [editIndex, setEditIndex] = useState([]);
    const [changeEdit, setChangeEdit] = useState('');

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
        setBooks(newTodoList);
         setBookName('')
    }

    const formEdit =(book) => {   
            return (
            <div className ="form-edit"> 
                <input type = "text" value ={changeEdit} onChange ={changeInput}/>
                <hr/>
                <div>
                <button onClick = {()=>{agreeEdit()}}>Yes</button>
                <button onClick ={() =>{disAgreeEdit()}}>No</button>
                </div>
            </div>
        )
    }
    const changeInput = (e) => {
        setChangeEdit('')
        setChangeEdit(e.target.value);     
    }

    const agreeEdit =()=> {
        const tap = {
            id : editIndex.id,
            name : changeEdit
        }
        console.log(tap)
        books.splice(editIndex.id,1,tap);
        setModalOpened(false);
    }
    const disAgreeEdit = () => {
        setModalOpened(false);
    }

    const deleteItem = (index)=>{
            const newTodoList = [...books];
            newTodoList.splice(index, 1);
            setBooks(newTodoList);
    }
    const showItem =()=>{
        const show = books.map((book,index) =>{
        return (
        <div key={index}> 
            <span >{book.name }</span>
            <button type="button" className="btn btn-primary" onClick={()=>{clickEdit(book)}} > EDIT</button>
            <button className="btn btn-warning" onClick ={()=>deleteItem(index)}>DELETE</button>         
        </div>
        )})
        return show;
    } 

    const handelKeyPressEnter = (e) =>{
        if(e.key === 'Enter'){
            {addItem()}
        }
    }
    const clickEdit=(book)=>{
        setChangeEdit(book.name)
        setEditIndex(book)
        setModalOpened(true)
    }
    return (
        <div>
            <input type ='text' value = {bookName} onChange = {handelChange} onKeyPress = {handelKeyPressEnter} ></input>
            <button onClick ={addItem}>ADD</button>       
            <div>
                <div>{showItem()}</div> 
            </div>
            {modalOpened && formEdit(editIndex)}
        </div>
    );
}
export default ListItem;