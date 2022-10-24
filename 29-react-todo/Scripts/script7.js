class Task extends React.Component {

    handleClickEdit = () => {
        alert(`Press edit ${this.props.children}`);
    }

    handleClickRemove = () => {
        alert(`Press remove ${this.props.children}`);
    }

    render() {
        return (
            <div className="box">
                <div>{this.props.children}</div>
                <button onClick={this.handleClickEdit} className="btn light">Edit</button>
                <button onClick={this.handleClickRemove} className="btn red">Remove</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div className="field">
        <Task>Task 1</Task>
        <Task>Task 2</Task>
        <Task>Task 3</Task>
    </div>
    , document.getElementById('root'));