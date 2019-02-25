import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import Clock from './Clock'

class Comment extends Component {
    static defaultProps = {
    }
    static propTypes = {
        comment: PropTypes.object
    }
    static contextTypes = {
        themeColor: PropTypes.string
    }
    componentWillMount() {
        console.log(this.props.comment)
    }
    deleteComment() {
        if (this.props.onDelete) {
            let comment = this.props.comment
            this.props.onDelete(comment)
        }
    }
    render() {
        return (
            <div className='comment'>
                <div className='comment-username'>
                    {this.props.comment.username}:
					</div>
                <div className='comment-comment'>
                    {this.props.comment.comment}
                </div>
                <Clock time={this.props.comment.time} />
                <div onClick={this.deleteComment.bind(this)} className='comment-delete'>
                    Clear
					</div>
            </div>
        )
    }
}



export default Comment;