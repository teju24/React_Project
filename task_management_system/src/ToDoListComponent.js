import React from 'react';

class ToDoListComponent extends React.Component {

    constructor() {
        super();
        this.submitTask=this.submitTask.bind(this);
        this.state = {
            tasks: [
                {
                    taskName: "Gym",
                    completed: false
                },
                {
                    taskName: "Study",
                    completed: false
                }
            ],
            currentTask:''
        }
    }


    submitTask(newTask){
        var task={
            taskName:newTask,
            completed:false
        }
        this.state.tasks.push(task)
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

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <tbody>
                        {this.state.tasks.map((task,i) => {
                            return < tr key={task.taskName}>
                            <td className ={task.completed ? 'completed' : ''}>
                            <input type="checkbox" 
                            checked={task.completed} 
                            onChange={() => this.toggletask(task,i)}
                            /> {task.taskName}</td>
                            <td> <button type="button" className="btn btn-primary" onClick={() => this.onDelete(i)} >Delete</button></td>
                        </tr>
                        })}
                    </tbody>
                </table>

            </div >
        )
    }
}

export default ToDoListComponent;