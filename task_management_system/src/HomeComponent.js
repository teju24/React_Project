import React from 'react';
import HeaderComponent from './HeaderComponent'
import AddTaskComponent from './AddTaskComponent'

class HomeComponent extends React.Component {
    constructor() {
        super()
        this.updateTask = this.updateTask.bind(this);
        this.submitTask = this.submitTask.bind(this);
        this.onAll=this.onAll.bind(this);
        this.onCompleted = this.onCompleted.bind(this);
        this.onActive= this.onActive.bind(this);

        this.state = {
            tasks: [
                {
                    taskName: "Gym",
                    completed: false
                },
                {
                    taskName: "Study",
                    completed: true
                },
                {
                    taskName: "Cook",
                    completed: false
                }
            ],
            completed:[],
            active:[],
            currentTask: '',
            tobeaddtask: '',
            completeddivhide:true,
            activedivhide:true,
            alldivhide:false
        }
    }

    toggletask(newtaskValue,index){
        var tasks=this.state.tasks;
        var task= tasks[index];
        task.completed=!newtaskValue.completed
        this.setState({
            tasks:tasks
        })
    }

    onDelete(index){
        var tasks=this.state.tasks;
        tasks.splice(index,1); 
        this.setState({
            tasks:tasks
        })
    }
    
    updateTask(event){
        var newtask = event.target.value;
        this.setState({
            currentTask:newtask
        })
    }

    submitTask(event){
        debugger
        var allTasks = this.state.tasks
        var taskName = this.state.currentTask
        var task={
            taskName:taskName,
            completed:false
        }
        allTasks.push(task)
        this.setState({
            tasks:allTasks,
            currentTask:''
        })
        
    }

    onAll(){
        this.setState({
            completeddivhide:true,
            activedivhide:true,
            alldivhide:false
        })
    
    }

    onCompleted(){
        var tasks= this.state.tasks;
        var completedTask = tasks.filter(task => task.completed===true)
        this.setState({
            completed:completedTask,
            completeddivhide:false,
            activedivhide:true,
            alldivhide:true
        })
    }

    onActive(){
        var tasks= this.state.tasks;
        var activeTask = tasks.filter(task => task.completed===false)
        this.setState({
            active:activeTask,
            completeddivhide:true,
            activedivhide:false,
            alldivhide:true
        })
    }

    render() {
        return (
            <div className="home_div">
                <div>
                    <HeaderComponent />
                    <br />
                    <br />
                    <AddTaskComponent
                        currentTask={this.state.currentTask}
                        updateTask={this.updateTask}
                        submitTask={this.submitTask}
                    />
                    <br />
                    <div id="status" className="status-bar"> 
                        <button onClick={this.onAll}>All</button> /
                        <button onClick={this.onCompleted}> Completed</button> /
                        <button onClick={this.onActive}>Active</button>
                    </div>
                    <br />
                    <br />
                    <div id="all" hidden={this.state.alldivhide}>
                        <table className="table table-striped">
                            <tbody>
                                {this.state.tasks.map((task, i) => {
                                    return < tr key={task.taskName}>
                                        <td className={task.completed ? 'completed' : ''}>
                                            <input type="checkbox"
                                                checked={task.completed}
                                                onChange={() => this.toggletask(task, i)}
                                            /> {task.taskName}</td>
                                        <td> <button type="button" className="btn btn-primary" onClick={() => this.onDelete(i)} >Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div >
                    <div id="Completed" hidden={this.state.completeddivhide}>
                        <table className="table table-striped">
                            <tbody>
                                {this.state.completed.map((task, i) => {
                                    return < tr key={task.taskName}>
                                        <td className={task.completed ? 'completed' : ''}>
                                            <input type="checkbox"
                                                checked={task.completed}
                                                onChange={() => this.toggletask(task, i)}
                                            /> {task.taskName}</td>
                                        <td> <button type="button" className="btn btn-primary" onClick={() => this.onDelete(i)} >Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div >
                    <div id="active" hidden={this.state.activedivhide}>
                        <table className="table table-striped">
                            <tbody>
                                {this.state.active.map((task, i) => {
                                    return < tr key={task.taskName}>
                                        <td className={task.completed ? 'completed' : ''}>
                                            <input type="checkbox"
                                                checked={task.completed}
                                                onChange={() => this.toggletask(task, i)}
                                            /> {task.taskName}</td>
                                        <td> <button type="button" className="btn btn-primary" onClick={() => this.onDelete(i)} >Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div >
                </div>

            </div>
        )
    }
}
export default HomeComponent;