class Group extends React.Component {
    render() {
        const subTitle = 'Tel Ran programm ' + (Math.random() * 10).toFixed(1);
        return (
            <div>
                <h1>Java 48</h1>
                <h3>{subTitle} {3 * 5}</h3>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Group />
        <Group />
        <Group />
    </div>
    , document.getElementById('root'));