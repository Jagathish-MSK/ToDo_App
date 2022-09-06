import React, { Component } from "react";
import TodoList from "./TodoApp.Table.component";
import { Form, Button, Container, Navbar, Nav, Tab, Row } from "react-bootstrap";
// import TodoList from "./TodoApp.Table.component";
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.element = "";

        this.state = { items: [], Id: "", text: "", isDisable: true };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addEvent = this.addEvent.bind(this);
    }

    addEvent = (elementId) => {
        // e.preventDefault()
        // console.log(elementId);
        this.element = document.getElementById(elementId);
        this.setState({
            isDisable: true
        })
    }
    checkEvent = (elem) => {
        // console.log(elem);
        const checkBox = document.getElementById(elem + "_Check");
        // checkBox.disabled = true;
        const selElem = document.getElementById(elem + "_TextTD");
        if (checkBox.checked) {
            const styleStrike = "text-decoration: line-through;"
            selElem.setAttribute("style", styleStrike);
            checkBox.disabled = true;
        }
        console.log(checkBox.checked)
    }

    removeElem = (item1) => {
        // console.log(this.state.items);
        // console.log(item1);
        const inval = this.state.items.map(obj => (obj.id).toString()).indexOf(item1.toString());
        // console.log();
        this.state.items.splice(inval, 1);
        this.setState(state => ({
            items: this.state.items,
            isDisable: true
        }));
    }
    addSNo = (snObj) => {
        return (this.state.items.map(obj => (obj.id).toString()).indexOf(snObj.toString()))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: "",
        }));
    }

    handleChange = event => {
        this.setState({ text: event.target.value, isDisable: true })
    }

    render() {
        return (
            <Container>
                <Tab.Container defaultActiveKey="TodoInsert">
                    <Row>
                        <Navbar.Brand>My To Do App</Navbar.Brand>
                        <Nav variant="tabs" className="shadow border ">
                            <Nav.Item>
                                <Nav.Link eventKey="TodoInsert">
                                    Add Todo List
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Todo List">
                                    List of Todo
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                    <Row>
                        <Tab.Content className="shadow square border">
                            <Tab.Pane eventKey="Todo List">
                                <Container>
                                    <br />
                                    <TodoList items={this.state.items} addEvent={this.addEvent} checkEvent={this.checkEvent} removeElem={this.removeElem} addSNo={this.addSNo}>  </TodoList>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="TodoInsert" title="TodoInsert">
                                <br />

                                <Container>
                                    {/* <h3>Hello This is todo App</h3> */}
                                    <Form onSubmit={this.handleSubmit}>
                                        <label htmlFor="todo-Text"> Enter the task here :   </label>
                                        <input type="text" value={this.state.text} onChange={this.handleChange} />
                                        <div>
                                            <br />
                                            <Button type="submit">
                                                Add Task #{this.state.items.length + 1}
                                            </Button>

                                        </div>
                                        <br />

                                        <div className="border border-dark center">
                                            <br />
                                            <p >{this.state.text}</p>
                                        </div>
                                        <br />

                                    </Form>

                                </Container>
                            </Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Tab.Container>
            </Container>



        )
    }
}

export default TodoApp