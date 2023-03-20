import { Component } from "react";
import "./index.css"

class Counter extends Component {
    state = {
        count: 0
    }

    onClickIncrease = () => {
        this.setState(prevstate => {
        return  {count: prevstate.count + 1}
        })
    }

    onClickDecrease = () => {
        this.setState(prevstate => {
            return {count: prevstate.count - 1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <div className="counter-app">
                <h1 className="h1">
                    Counter
                </h1>
                <p className="p"> {count} </p>
                <div className="button-container">
                    <button 
                        className="button"
                        onClick={this.onClickIncrease}>
                            Increase
                    </button>
                    <button 
                        className="button"
                        onClick={this.onClickDecrease}>
                            Decrease
                    </button>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Counter
