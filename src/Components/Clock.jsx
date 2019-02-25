import React, { Component } from 'react'

class Clock extends Component {
    constructor() {
        super()
        this.state = {
            time: ''
        }
    }
    componentWillMount() {
    }
    componentWillUnMount() {
        clearInterval(this.timer)
    }
    render() {
        return <span className='clock'>{this.props.time}</span>
    }
}

export default Clock;