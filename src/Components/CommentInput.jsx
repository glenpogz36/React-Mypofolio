import React, { Component } from 'react'
import PropTypes from 'prop-types'


class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor() {
        super()
        this.state = {
            username: '',
            comment: '',
            time: ''
        }
    }
    componentWillMount() {
        if (localStorage.username) {
            console.log('set localStorage username')
            this.setState({
                username: localStorage.username
            })
        }
    }
    compoenetDidMount() {
        this.textarea.focus()
    }
    changeUserName(e) {
        this.setState({
            username: e.target.value
        })
    }
    changeComment(e) {
        this.setState({
            comment: e.target.value
        })
    }
    saveUsername() {
        let { username } = this.state
        if (username) {
            localStorage.username = username;
        }
    }
    publish() {
        const time = new Date().toLocaleTimeString();
        const { username, comment } = this.state
        if (!username) return
        if (!comment || comment == '\s') return
        if (this.props.onSubmit) {
            this.props.onSubmit({ username, comment, time })
        }
        this.setState({
            comment: ""
        })
    }
    handleKeyup(e) {
        if (e.keyCode == 13) {
            e.preventDefault()
            this.publish()
        }
    }
    render() {
        return (
            <div className="comment-input">
                <h1 style={{ color: 'grey', fontFamily: 'Apple Chancery, cursive' }}>FeedBack</h1>
                <div className="username-wrapper">
                    <label htmlFor="username"></label>
                    <input onBlur={this.saveUsername.bind(this)} value={this.state.username} onChange={this.changeUserName.bind(this)} type="text" placeholder="Write your Topic"></input>
                </div>
                <div className="usercomment-wrapper">
                    <label htmlFor="comment"></label>
                    <textarea onKeyDown={this.handleKeyup.bind(this)} ref={(textarea) => { this.textarea = textarea }} value={this.state.comment} onChange={this.changeComment.bind(this)} type="text" placeholder="Write your Message"></textarea>
                </div>
                <div className="submit">
                    <button onClick={this.publish.bind(this)}>Submit</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;