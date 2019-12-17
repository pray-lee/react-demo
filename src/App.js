import React from 'react';
console.log(React)

// tudo list
class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items}></TodoList>
        <FormSubmit 
          items={this.state.items} 
          text={this.state.text} 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange}></FormSubmit>
      </div>
    )
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.text.length) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }
}

const FormSubmit = props => {
  return (
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?<br />
          </label>
          <input id="new-todo" onChange={props.handleChange} value={props.text} />
          <button>Add #{props.items.length + 1}</button>
        </form>
  )
}

const TodoList = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}

export default TodoApp;
