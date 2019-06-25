import React, { Component, Fragment } from 'react'
export default class InputDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleDelClick = this.handleDelClick.bind(this)
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }
    handleClick() {
        // ****合成事件和钩子函数中使用setState的时候，是'异步'触发的，但是在原生事件和setTimeout事件中，是同步的，所谓的异步其实就是合成事件和钩子函数是在state更新前就完成了。而不是真正的异步。一般来讲，在componentDidMounted之后才会执行commitUpdateQueue对列中的更新。****
        // 一般我们使用setState的函数参数去获取更新后的state, setState有两个参数，第二个参数是指更新完成后执行的操作。一般用componentDidUpdated代替。
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue]
        // })
        if (this.state.inputValue) {
            this.setState(prevState => ({
                list: [...prevState.list, this.state.inputValue],
                inputValue: ''
            }))
        } else {
            alert('请输入')
        }
    }
    handleDelClick(idx) {
        // 这里使用临时变量存储list，因为官网禁止直接修改this.state, 如果直接修改this.state,会导致不去重新渲染
        let tempList = this.state.list
        tempList.splice(idx, 1)
        this.setState({
            list:this.state.list
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                    <button style={{fontSize:'20px'}} onClick={this.handleClick}>+</button>
                </div>
                <ul>
                    {
                        // 参数传递需要使用bind()传递，不可以直接this.fn(xxx)
                        this.state.list.map((item, index) => (<li key={index+item} onClick={this.handleDelClick.bind(this, index)}>{item} x</li>))
                    }
                </ul>
            </Fragment>
        )
    }
}