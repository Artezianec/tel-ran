class Student extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Student name="Peter" age={25}/>
        <Student name="Mary" age={19} />
        <Student name="Tigran" age={29} />
    </div>
    , document.getElementById('root'));