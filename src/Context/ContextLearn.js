import React from "react";

// ------------- use context before -------------------------
class Demo extends React.Component {
  render() {
    return <Toolbar theme="dark" />
  }
}

// Toolbar
// Toolbar组件接受一个额外的theme属性，然后传递给themedbutton组件
// 如果应用中每一个单独的按钮都需要知道theme的值，很麻烦
// 银伟必须将这个值层层传递所有组件
const Toolbar = props => {
  return (
    <div>
      <ThemedButton theme={props.theme}></ThemedButton>
    </div>
  )
}

// themebutton
class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme}></Button>
  }
}


// ------------------use context after------------------------
//Context可以让我们无须明确的传递每个组件，就能把值插入组件树
// 创建了一个Context对象，当React渲染一个订阅了这个Context对象的组件，这个组件会从组件树中离自身最近的那个匹配的Provider中读取当前context的值
// 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效
const ThemeContext = React.createContext('light')

class ContextLearn extends React.Component {
  render() {
    // 使用一个Provider来将当前的theme传递给以下的组件树
    // 无论多深，任何组件都能读取这个值
    // 在这个例子中，我们将'dark'作为当前值传递下去
    return (
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
    )
  }
}

// 中间的组件再也不必指明往下传递theme了
function Toolbar(props) {
  return (
      <div>
        <ThemedButton />
      </div>
  )
}

class ThemedButton extends React.Component {
    // 指定 contextType读取当前的theme context
    // 在react会往上找到最近的 theme provider,然后使用他的值
    // 在这个例子中，当前的theme值为'dark'
    static contextType = ThemeContext
    render() {
        return <Button theme={this.context}/>
    }
}
