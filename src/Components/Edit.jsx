import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../index.css'
import { useNavigate, useParams } from 'react-router-dom';


function Edit({ note, setNote }) {
    let navigate = useNavigate()
    let { i } = useParams()

    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('')
    const [description, setDescription] = useState('')

 const   getData = (i) =>{
    console.log(note)
    setPriority(note[i].priority)
    setDescription(note[i].description)
    setTodoName(note[i].todoName)
 }

    useEffect(() => {
        if (i) {
          getData(i)
          console.log('get data called')
        }
        else{
            alert('No To-Do Available')
        }
      }, [])

 
    const AddToList = (i) => {
        event.preventDefault();
        const data = { todoName, priority, description }
        console.log(data)
        note.splice(i,1, data)
        setNote([...note])
        console.log(note)
        navigate('/')
        
    }

    return <>
        <Form className='formcss-custom' >
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
                        <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
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
                        <Button variant="outline-success" type="submit" className='col-3'  onClick={() => AddToList(i)}>
                            Save
                        </Button>
                    </div>
                </div >
            </div >
        </Form>

    </>
}

export default Edit