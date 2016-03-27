import React    from 'react';
import ReactDOM from 'react-dom';

// create component.
class App extends React.Component{
    constructor() {
        super();
        this.state = {
            value: 'state value'
        }

    }
    update (e) {
        this.setState({value: e.target.value})
    }
    render() {
        return (
            <div>
                <h3>{this.props.nmbr}</h3>
                <p> {this.props.txt}</p>
                <input type="text"
                    value={this.state.value}
                    onChange={this.update.bind(this)}
                />
                <h3>{this.state.value}</h3>
            </div>
        )
    }
}
// validate props.
App.propTypes = {
    txt: React.PropTypes.string,
    nmbr: React.PropTypes.number.isRequired
};

// set default props.
App.defaultProps = {
  txt : 'default prop value',
  nmbr: 0
};

// render component to DOM.
ReactDOM.render(<App txt = "prop text" nmbr={37}/>, document.getElementById('app'));

export default App