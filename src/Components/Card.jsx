import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


function Cards({ note, setNote }) {
    let navigate = useNavigate()
    const [isCompleted, setCompletionstatus] = useState(false)

    const deleteTodo = (i) => {
        note.splice(i, 1)
        setNote([...note])
    }

    const handleStatusChange = (e, i) => {
        if (e.target.value == 'completed') {
            note[i].isCompleted = true
        }
        else if (e.target.value == 'notcompleted') {
            note[i].isCompleted = false
        }
        setNote([...note])
        console.log(note)

    }


    return <>
        <div className='card-custom'>
            {
                note.map((note, i) => (
                    <div key={i}>
                        <Card style={{ width: '25rem' }}>
                            <Card.Body>
                                <Card.Title><b>{note.todoName}</b> </Card.Title>
                                <Card.Text>
                                    <b> Description:</b> <br />
                                    {note.description}
                                </Card.Text>
                                <Card.Text>
                                    Priority -  {note.priority}
                                </Card.Text>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select value={note.isCompleted ? 'completed' : 'notcompleted'} onChange={(e) => handleStatusChange(e, i)}
                                        style={{
                                            backgroundColor: note.isCompleted ? 'lightblue' : 'lightpink', padding: '5px',
                                            borderRadius: '4px', width: '70%', display: 'inline-block', marginLeft: '15px'
                                        }}
                                    >
                                        <option style={{ backgroundColor: 'whitesmoke' }} value='notcompleted'>Not Completed</option>
                                        <option style={{ backgroundColor: 'whitesmoke' }} value='completed'>Completed</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button variant="success" onClick={() => navigate(`/Edit/${i}`)}>Edit</Button> &nbsp;
                                <Button variant="danger" onClick={() => deleteTodo(i)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>


    </>
}

export default Cards