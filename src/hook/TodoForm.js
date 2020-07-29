// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// TodoForm.propTypes = {
    
// };

// function TodoForm(props) {
//     const [value , setValue] = useState('');

//    const handelOnChange =(e) =>{
//      setValue( e.target.value);    
//    }
//    // xu ly viec reload on browser dung e.preventDefault();

//     const handelSubmit = (e) => {
//         e.preventDefault();
//         const formValues = { titel: value};
//         onSubmit(formValues);
//     }
//     return (
//         <form onSubmit = {handelSubmit}>
//             <input type = 'text' value = {value} onChange = {handelOnChange}></input>
//         </form>
//     );
// }

// export default TodoForm;