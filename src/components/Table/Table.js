import React from 'react'
import {connect} from 'react-redux'

function Table({Data,onEdit,onDelete}) {

    console.log(Data)
    return (
        <div>
            <table >
              <thead>
                <tr>
                  <th>Sno</th>
                  <th>Todos</th>
                  <th>Priority</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  
                </tr> 
               </thead>  
               <tbody> 
           {Data.map((todo,index)=>
               
                        <tr  key={index}>
                            <td>{todo.id}</td>
                            <td>{todo.task}</td>
                            <td>{todo.priority}</td>
                            <td><button onClick={() => onEdit(index)}>Edit</button></td>
                            <td><button onClick={() => onDelete(index)}>Delete</button></td>
                        </tr>
                        
                                
           )}
          
           </tbody>
           </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Data:state.Data
        
    }
}



export default connect (mapStateToProps) (Table)
