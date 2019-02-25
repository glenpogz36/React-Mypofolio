import React, { Component } from 'react'


class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time: new Date()
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    componentWillReceiveProps(nextProps) { }
    componentWillUpdate() { }
    componentDidUpdate() { }
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }
    componentDidMount() { }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className='timer'>{this.state.time.toLocaleTimeString()}</div>
        )
    }
}

export default Timer;