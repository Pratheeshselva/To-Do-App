
import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


function Filter({ filteredNote, note, setFilteredNote }) {
  let [dropdownText, setdropdownText] = useState('Filter')

  useEffect(() => {
    console.log(filteredNote);
  }, [filteredNote]);

  const filterAll = () => {
    setFilteredNote([...note]);
    console.log(filteredNote)
    setdropdownText('All')
  }

  const filterCompleted = () => {
    setFilteredNote(note.filter(item => item.isCompleted));
    setdropdownText('Completed')
    console.log(filteredNote)

  }

  const filterNotComplted = () => {
    setFilteredNote(note.filter(item => !item.isCompleted));
    console.log(filteredNote)
    setdropdownText('Not Completed')
  }

  return <div style={{ display: "flex", justifyContent: "flex-end", marginRight: '40px' }}>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {dropdownText}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => filterAll()}  >All</Dropdown.Item>
        <Dropdown.Item onClick={() => filterCompleted()} > Completed</Dropdown.Item>
        <Dropdown.Item onClick={() => filterNotComplted()} > Not Completed</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </div>
}

export default Filter