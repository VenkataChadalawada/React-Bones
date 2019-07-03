class MarkDownEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'hello **world**',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            value = e.target.value
        });
    }
    render(){
        return(
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor="markdown-content">
                Enter some mark down
                </label>
                <textarea
                    id="markdown-content"
                    onChange = {this.handleChange}
                    defaultValue = {this.state.value}
                />
                <h3>Output</h3>
                <div
                    className="content"
                    dangerouslySetInnerHtml={this.getRawMarkup()}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <MarkDownEditor />, document.getElementById('maerkdown-example')
)