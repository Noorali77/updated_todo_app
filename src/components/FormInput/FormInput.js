import './FormInput.css';
import { useState } from 'react';
import FormList from '../FormList/FormList';

function FormInput(){


    const [name,setName] = useState('');
    const [value,setValue] = useState([]);
    const [isValid,setIsValid] = useState(true)

    const nameChangeHandler = (event)=>{
        setName(event.target.value);
        console.log(event.target.value)
    }

    

    const addTodo = () =>{
            if(name.length == 0 ){
          setIsValid(false);
          console.log(name.length)
          return;
            }
        setValue((prevValues)=>{
            setName('');
            setIsValid(true)
            return [name,...prevValues];

        })

    }

    const deleteTodos = ()=>{
        setValue([]);
    }

    const editTodo = (index)=>{
        let arr = [...value];
        const update = prompt('enter');
        arr[index] = update;
        setValue(arr)

    }

    
   

    const deleteTodo = (index)=>{
       let arr = [...value];
       arr.splice(index,1);
       setValue(arr)
    }





    
    return(
        <>
     
           
           <div className='form-control'>
               <div className='todo_div'>
                   <label className={`todo_label ${!isValid ? 'todo_label_invalid' : 'todo_label'}`  }>Todo App</label>
               </div>
               <div>
                   <input type="text" value={name} onChange={nameChangeHandler}/>
               </div>
              
               <div className='btn_group'>
                   <button className='btn' onClick={addTodo} >Add Todo</button>
                   <button className='btn' onClick={deleteTodos}>Delete Todos</button>
             
                   {
                       name.length === 0 && (<p className = 'para'>Please Enter a todo</p>)
                   }
               </div>
           </div>
          
          <FormList list={value} onEditingTodo={editTodo} onDeletingTodo = {deleteTodo}/>

        </>
    )
}

export default FormInput;