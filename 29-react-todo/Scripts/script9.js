class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }

    handleClickEdit = () => {
        this.setState({ isEdit: true });
    }

    handleClickRemove = () => {
        alert(`Press remove ${this.props.children}`);
    }

    handleClickSave = () => {
        //TODO
        this.setState({ isEdit: false });
    }

    renderEdit = () => {
        return (
            <div className="box">
                <textarea defaultValue={this.props.children}></textarea>
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

ReactDOM.render(
    <div className="field">
        <Task>Task 1</Task>
        <Task>Task 2</Task>
        <Task>Task 3</Task>
    </div>
    , document.getElementById('root')
);