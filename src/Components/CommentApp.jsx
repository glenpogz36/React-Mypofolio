import React, { Component } from 'react'

import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Timer from './Timer'
import PropTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.css";



class CommentApp extends Component {

    getChildContext() {
        return {

        }
    }
    constructor() {
        super();
        this.state = {

            comments: []
        }
    }
    static defaultProps = {
        a: '1'
    }
    componentWillMount() {
        if (localStorage.comments) {
            this.setState({
                comments: JSON.parse(localStorage.comments)
            })
        }
    }
    handleSubmit(input) {
        const { username, comment, time } = input
        console.log(input)
        this.state.comments.push({ username, comment, time })
        this.saveComments();
        this.setState({
            comments: this.state.comments
        })
    }
    saveComments(newComments) {
        if (newComments || this.state.comments) {
            localStorage.comments = JSON.stringify(newComments || this.state.comments)
        }
    }
    deleteComment(input) {
        let newComments = this.state.comments.filter(comment => {
            return (comment.username !== input.username) || (comment.comment !== input.comment)
        })
        this.setState({
            comments: newComments
        })
        this.saveComments(newComments)
    }
    render() {
        return (
            <body className='feedback'>
                <div className="comment-app-wrapper">
                    <Timer />
                    <CommentInput onSubmit={this.handleSubmit.bind(this)} />
                    <CommentList onDelete={this.deleteComment.bind(this)} comments={this.state.comments} />
                </div>
            </body>

        )
    }
}

export default CommentApp;