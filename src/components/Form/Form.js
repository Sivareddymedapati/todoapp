import React,{Component} from 'react'
import {default_data} from '../../Data/Data'
import {connect} from 'react-redux'
import {addtodo,deletetodo} from '../../redux/TaskActions'
import Table from '../Table/Table'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            data:{...default_data},
            edit:false,
            index:""
        }
    }
    
    onInputChange = (e) => {
        const {target} = e
        this.setState({
            data:{...this.state.data,[target.name]:target.value}
        })
    }

    onSave = () => {
        if(this.state.edit) {
            const {todoData,addtodo} = this.props
            todoData[this.state.index] = this.state.data
            addtodo(todoData)
            console.log(todoData)
            this.setState({
                edit:false,
                data:{...default_data} })
        } else {
            const data = this.state.data
            console.log(data)
            const {todoData,addtodo} = this.props
            todoData.push(data)
            addtodo(todoData)
            console.log(todoData)
            this.setState({
                edit:false,
                data:{...default_data}})
        }
        
    }

    onEdit = (index) =>{
        const {todoData} = this.props
        const editdata = todoData[index]
        console.log(editdata)
        this.setState({
            data:editdata,
            edit:true,
            index:index
        })
    }

    onDelete = (index) => {
        const {todoData} = this.props
        const deleteData = todoData.splice(index,1)
        console.log(deleteData)
        console.log(todoData)
        deletetodo(todoData)
    }

    
    render() {
    return (
        <div>
            <h1>TODO App</h1>
            <input placeholder="enter id" name="id" onChange={this.onInputChange} value={this.state.data.id}/>
            <input placeholder="enter your todo" name="task" onChange={this.onInputChange} value={this.state.data.task}/>
            <input placeholder="priority" name="priority" onChange={this.onInputChange} value={this.state.data.priority}/>
            <button onClick={this.onSave}>Submit</button>
            <Table onEdit={this.onEdit} onDelete={this.onDelete}/>
        </div>
    )
}}

const mapStateToProps = (state) => {
    return {
        todoData:state.Data
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addtodo:(todoData) => dispatch(addtodo(todoData)),
        deletetodo:(todoData) => dispatch(deletetodo(todoData))
     

    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Form)

