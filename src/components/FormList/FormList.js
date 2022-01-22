import './FormList.css'


function FormList(props){

    return(
        <div className="list_container">
                        
        <ul>
            {
                props.list.map((value,index)=>{
                     return(
                         <>
                        
                         <li className="goal-list" key={index}>{value}</li> 
                         <button className='btn' onClick={()=> props.onEditingTodo(index)}>Edit Todo</button> 
                         <button className='btn' onClick={()=> props.onDeletingTodo(index)}>Delete Todo</button> 
                         </>
                     )
    
                })
            }
           
        </ul>
                  </div>
    )
   

}

export default FormList;



