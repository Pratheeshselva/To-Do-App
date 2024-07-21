import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../index.css'


function AddTodo({ note, setNote }) {
    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('null')
    const [description, setDescription] = useState('')


    const AddToList = (e) => {
        event.preventDefault();

        const data = { todoName, priority, description, isCompleted: false }
        note.push(data)
        setNote([...note])

        setTodoName('');
        setDescription('')
        setPriority('null');

    }

    return <>
        <Form className='formcss-custom' onSubmit={() => AddToList()}>
            <div className='row'>
                <div className='col'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>To-do Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" value={todoName} onChange={(e) => setTodoName(e.target.value)} />
                    </Form.Group>
                </div>
                <div className='col'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Priority</Form.Label>
                        <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)} className='custom-select' >
                            <option value='null' disabled>select Priority of the task</option>
                            <option value='Critical'>Critical</option>
                            <option value='High'>High </option>
                            <option value='Medium'>Medium </option>
                            <option value='Low'>Low </option>
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Todo Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        <Button variant="outline-success" type="submit" className='col-6' >
                            Add Todo
                        </Button>
                    </div>
                </div >
            </div >
        </Form>

    </>
}

export default AddTodo