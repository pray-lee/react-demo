import React from "react";

// ------------- use context before -------------------------
class ContextDemo extends React.Component {
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
const ThemeContext = React.createContext('light')