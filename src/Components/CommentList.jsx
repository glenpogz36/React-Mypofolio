import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
    constructor() {
        super()
        this.state = {

        }
    }
    deleteComment(input) {
        if (this.props.onDelete) {
            this.props.onDelete(input)
        }
    }
    render() {
        return (
            <div className='comment-list'>
                {this.props.comments.map((comment, idx) => {
                    return <Comment onDelete={this.deleteComment.bind(this)} key={idx} comment={comment} />
                })}
            </div>
        )
    }
}

export default CommentList;