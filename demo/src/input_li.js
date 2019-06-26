import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Item extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        // 不能直接在子组件修改父组件的state
        this.props.deleteItem(this.props.index)
    }
    render() {
        return (
            <li onClick={this.handleClick}>{this.props.content} X</li>
        )
    }
}

// props校验
Item.propTypes = {
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    deleteItem: PropTypes.func.isRequired
}

// 默认props设置
Item.defaultProps = {
    content: '这是默认设置',
    index: 1,
    deleteItem: () => {
        alert(1)
    }
}

export default Item;