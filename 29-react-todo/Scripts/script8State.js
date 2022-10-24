class Check extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    handleChangeCheck = () => {
        this.setState({checked: !this.state.checked})
    }

    render() {
        const message = this.state.checked ? 'checked' : 'unchecked'
        return (
            <div>
                <input
                    onChange={this.handleChangeCheck}
                    type="checkbox"
                    defaultChecked={this.state.checked}
                />
                <p>{message}</p>
            </div>
        )
    }
}

ReactDOM.render(<Check />, document.getElementById('root'));