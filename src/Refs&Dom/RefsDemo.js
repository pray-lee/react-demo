import React from "react";

// 何时使用？ (不要过度使用)
// 管理焦点，文本选择或媒体播放
// 触发强制动画
// 集成第三方dom库

// there are two way to access dom node or react element

// one
// 为普通dom元素添加ref
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // 创建一个ref存储textInput的dom元素
        this.textInput = React.createRef()
    }
    focusTextInput = () => {
        console.log(this.textInput)
        // 当组件挂在完成时，react会给current属性传入dom元素，并且在组件卸载时传入null值
        // ref会在componentDidMount或者componentDidUpdate生命周期勾子触发前更新
        this.textInput.current.focus()
    }
    render() {
        // 告诉react我们想把<input> ref关联到构造器里创建的'textInput'上
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        )
    }
}

export default CustomTextInput

// 为class组件添加Ref
class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef()
    }
    componentDidMount() {
        console.log(this.textInput)
        this.textInput.current.focusTextInput()
    }
    render() {
        return (
            <CustomTextInput ref={this.textInput}></CustomTextInput>
        )
    }
}

export {AutoFocusTextInput}