
import cx from 'classnames';
import { Component } from 'react';

export default class CrudTodoApp extends Component {
  constructor() {
    super()
    this.state = ({
      todos: [],
      value: "",
      editing: false,
      currentTodo: {},

    });
  }
  onChange = (e) => {
    this.setState({ value: e.target.value })


  };
  onAddTask = () => {
    const obj = {
      name: this.state.value,
      id: Date.now()

    }
    if (this.state.value !== "") {
      this.setState({ todos: this.state.todos.concat(obj) })
      this.setState({ value: "" })
    }}

  onDeleteTask = (itemId) => {

    this.setState({
      todos: [...this.state.todos].filter(id => id.id !== itemId)

    })


  }

  onEditTodo = (id, title) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.name = title
        }
        return todo
      }),
    })

    console.log(this.state.todos)
    this.setState({ editing: false })


  }

  onSubmitTodo = (e) => {
    this.onEditTodo(this.state.currentTodo.id, this.state.currentTodo.name)
  }


  onToggleEdit = (todo) => {
    this.setState({ editing: !this.state.editing })

    this.setState({ currentTodo: todo });

  }

  onEditInputChange = (event) => {
    console.log(this.state.currentTodo, "hello current")

    this.setState({
      currentTodo: {
        ...this.state.currentTodo,
        name: event.target.value
      },
    });

  }


  render() {
    const mylist = this.state.todos.map(todo => (<li>{todo.name}

      <button onClick={() => this.onToggleEdit(todo)}>Edit</button>
      <button onClick={() => this.onDeleteTask(todo.id)}>Remove</button>
    </li>));

    return (
      <>
        <div>
          {this.state.editing === false ? (<div>
            <input placeholder="typeyour task" value={this.state.value}
              onChange={this.onChange}
            />
            <button className={cx('liked')} onClick={this.onAddTask}>Add Item</button>
          </div>)
            :
            (<div>
                <button className={cx('liked btn')} onClick={this.onToggleEdit} >X</button>

              <input placeholder="update task" value={this.state.currentTodo.name}
                onChange={this.onEditInputChange}
              />
              <button className={cx('liked')} onClick={this.onSubmitTodo} >Update</button>

            </div>)

          }
          <ul>
            {mylist}
          </ul>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
      </>
    );
  }
}
