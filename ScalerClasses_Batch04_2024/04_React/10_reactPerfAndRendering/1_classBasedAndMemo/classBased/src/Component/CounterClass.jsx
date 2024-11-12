import React from 'react';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    // handler functions
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    // ui is printed.
    render() {
        return (
            <div className="container">
                <button onClick={this.handleIncrement}>+</button>
                <p>Count { this.state.count}</p>
                <button onClick={this.handleDecrement}>-</button>
            </div>
        )
    }
}

export default CounterClass;