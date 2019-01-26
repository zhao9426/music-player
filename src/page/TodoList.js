import React, { Component, Fragment } from "react";
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
import PropTypes from "prop-types";
import "./todoList.less";
import { trace } from "mobx";

@observer
class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            finished: PropTypes.bool.isRequired
        }).isRequired
    }

    handleClick() {
        this.props.todo.toggle();
    }

    render() {
        trace();
        const { todo } = this.props;
        return (
            <Fragment>
                <input type="checkbox"
                    onChange={this.handleClick.bind(this)}
                    checked={todo.finished}
                    className="toggle" />
                <span className={["title", todo.finished && 'finished' ].join(' ')}>{todo.title}</span>
            </Fragment>
        )
    }
}

@observer
class TodoHeader extends Component {
    state = {
        value: ''
    }

    handleSubmit(e) {
        e.preventDefault();
        let store = this.props.store;
        let value = this.state.value;

        store.createTodo(value);
        this.setState({
            value: ''
        });
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    render() { 
        trace()
        return (
            <header>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text"
                        value={this.state.value}
                        className="input-item"
                        placeholder="What todo todo list?"
                        onChange={this.handleChange.bind(this)} />
                </form>
            </header>
          );
    }
}


@observer
class TodoView extends Component {

    deleteClick(todo) {
        const { store } = this.props;
        store.removeTodo(todo);
    }

    render(){
        const { todos } = this.props.store
        return (
            <ul>
                {todos.map((todo) => <li className="todo-item" key={todo.id}>
                    <TodoItem todo={todo} />
                    <span
                        className="delete"
                        onClick={this.deleteClick.bind(this, todo)}>X</span>
                </li>
                )}
            </ul>
        )
    }
}

@observer
class TodoFooter extends Component {
    static propTypes = {
     //   left: PropTypes.number,
    }
    render(){
        trace();
        const { left } = this.props.store;
        return (
            <footer>This is {left} item unfinished.</footer>
        )
    }
}
@observer
class TodoList extends Component {
    static propTypes = {
        store: PropTypes.shape({
            createTodo: PropTypes.func,
            left: PropTypes.number,
            todos: ObservablePropTypes.observableArrayOf(
                ObservablePropTypes.observableObject
            ).isRequired
        }).isRequired
    };

    render() {
        trace();
        const { store } = this.props
        return (
            <div className="todo-list">
                <TodoHeader store={store}/>
                <TodoView store={store}/>
                <TodoFooter store={store}/>
            </div>
        )
    }
}

export default TodoList;

// 1. 细粒度拆分视图组件
// 2. 使用专用组件处理列表
// 3. 尽可能晚地解构可观察数据