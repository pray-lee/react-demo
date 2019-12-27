import React from "react";

// 何时使用？ (不要过度使用)
// 管理焦点，文本选择或媒体播放
// 触发强制动画
// 集成第三方dom库

// ref的值根据节点的类型而有所不同
// . 当ref属性用于HTML元素时，对该节点的引用可以在ref的current属性中被访问
// . 当ref属性用于自定义class组件时，ref对象接收组件的挂载实例作为其current属性



// . /**************不能在函数组件上使用ref属性，因为函数组件没有实例**************/




// React会在组件挂载时给current属性传入DOM元素，并且在组件卸载时传入null值
// ref会在componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新

// one
// 为普通dom元素添加ref
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // 创建一个ref来存储textInput的dom元素
        this.textInput = React.createRef()
        this.focusTextInput = this.focusTextInput.bind(this)
    }
    focusTextInput() {
        // 通过创建的ref的current属性访问dom节点
        this.textInput.current.focus()
    }
    render() {
        return (
            // 告诉React想把<input/> ref 关联到构造器创建的'textInput'上面来
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




// 为class组件添加Ref, 值得注意的是，/**************子组件必须是由class方式创建的React元素******************/



class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef()
    }
    componentDidMount() {
        console.log(this.textInput.current)
        this.textInput.current.focusTextInput()
    }
    render() {
        return (
            <CustomTextInput ref={this.textInput}></CustomTextInput>
        )
    }
}

export {AutoFocusTextInput}

// 在函数组件内部使用ref
function FunctionalCustomTextInput(props) {
   let textInput = React.createRef()
    const handleClick = () => {
       textInput.current.focus()
   }
   return (
       <div>
           <input
               type="text"
               ref={textInput}
           />
           <input
               type="button"
               value="Focus the text input <Functional refs>"
               onClick={handleClick}
           />
       </div>
   )
}
export {FunctionalCustomTextInput}

// 回调Refs
class CallbackCustomTextInput extends React.Component {
    constructor(props) {
        super(props);
    }
    focusTextInput = () => {
        if(this.textInput)
            this.textInput.focus()
    }
    componentDidMount() {
        this.focusTextInput()
    }
    render() {
        return (
            <div>
                <input type="text"
                    ref={element => this.textInput = element}
                />
                <input type="button"
                       value="Focus the text input"
                       onClick={this.focusTextInput}

                />
            </div>
        )
    }
}

// 函数式回调Refs
const FunctionalCallbackCustomTextInput = () => {
    let textInput = null
    const onClick = () => {
        textInput.focus()
    }
    return (
        <div>
            <input type="text"
                ref={element => textInput = element}
            />
            <input type="button"
                onClick={onClick}
            />
        </div>
    )
}

// 函数式回调Refs 嵌套子组件
const MyInput = props => {
    return (
        <input ref={props.inputRefTest}/>
    )
}

const FunctionalNestCallbackCustomTextInput = () => {
    let textInput = null
    const onClick = () => {
        textInput.focus()
    }
    return (
       <div>
           <MyInput inputRefTest={element => textInput = element}/>
           <input type="button" onClick={onClick} value="focus the text input <nest functional refs>"/>
       </div>
    )
}

export {FunctionalNestCallbackCustomTextInput}
