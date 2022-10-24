import Axios from 'axios'
class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        };
        this.textId = React.createRef();
    }


    handleClickEdit = () => {
        this.setState({ isEdit: true });
    }

    handleClickRemove = () => {
        this.props.deleteTask(this.props.value);
    }

    handleClickSave = () => {
        const task = this.textId.current.value;
        this.props.editTask(this.props.value, task);
        this.setState({ isEdit: false });
    }

    renderEdit = () => {
        return (
            <div className="box">
                <textarea ref={this.textId} defaultValue={this.props.children}></textarea>
                <button onClick={this.handleClickSave} className="btn success">Save</button>
            </div>
        )
    }

    renderView = () => {
        return (
            <div className="box">
                <div>{this.props.children}</div>
                <button onClick={this.handleClickEdit} className="btn light">Edit</button>
                <button onClick={this.handleClickRemove} className="btn red">Remove</button>
            </div>
        )
    }

    render() {
        return this.state.isEdit ? this.renderEdit() : this.renderView();

    }
}
class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    deleteTask = (index) => {
        const tasks = [...this.state.tasks];
        tasks.splice(index, 1);
        this.setState({ tasks });
    }

    updateTask = (index, content) => {
        const tasks = [...this.state.tasks];
        tasks[index] = content;
        this.setState({ tasks });
    }

    addTask = () => {
        const tasks = [...this.state.tasks, 'New task ' + (this.state.tasks.length + 1)];
        this.setState({ tasks });
    }

    render() {
        return (
            <div className="field">
                <button className='btn new' onClick={this.addTask}>Add task</button>
                {this.state.tasks.map((t, i) => <Task key={i + 1} value={i} editTask={this.updateTask} deleteTask={this.deleteTask}>{t}</Task>)}
                <button onClick={
                    Axios.post("http://localhost:9000/newtask", { task: '123' }).then((responce) => {
                        console.log(responce);
                    }).catch((e) => {
                        console.log(e);
                    })
                }>Upd to base</button>
            </div>
        )
    }
}

ReactDOM.render(
    <TaskList />
    , document.getElementById('root')
);