import React, { Component } from "react";
import TodoApp from "./TodoApp.component";
import { Container, Button, Table } from "react-bootstrap"

class TodoList extends Component {
    render() {
        return (
            // <Container>
                <Table responsive striped bordered>
                    <thead>
                        <tr>
                            <th width={20} >S.No</th>
                            <th >To Do List</th>
                            <th >Status</th>
                            <th >Remove To do</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map(item => (
                            <tr key={item.id} id={item.id} onClick={() => this.props.addEvent(item.id)}>
                                <td>
                                    {this.props.addSNo(item.id) + 1}
                                </td>
                                <td id={item.id + "_TextTD"}>
                                    {item.text}
                                </td>
                                <td>
                                    {/* <button type="reset"></button> */}
                                    <input type="checkbox" name="" onChange={() => this.props.checkEvent(item.id)} id={item.id + "_Check"} />

                                </td>
                                <td>
                                    {/* <button type="reset"></button> */}
                                    <Button id={item.id + "_Remove"} onClick={() => this.props.removeElem(item.id)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                            // <li key={item.id} onClick={this.props.addEvent} id={item.id}>{item.text}</li>
                        ))}
                    </tbody>

                </Table>
            // </Container>
        )
    }
}
export default TodoList