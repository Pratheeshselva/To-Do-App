
import React, { useState } from 'react'
import AddTodo from './Components/AddTodo'
import Cards from './Components/Card'
import Edit from './Components/Edit'
import Header from './Components/Header'
import Filter from './Components/Filter'


import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  let [note, setNote] = useState([])
  const [filteredNote, setFilteredNote] = useState(note);



  return <>

    <BrowserRouter>

      <Routes>

        <Route path='/' element={
          <>
            <Header />

            <AddTodo note={filteredNote} setNote={setNote} />
            <br /><br />
            <Filter filteredNote={filteredNote} note={note} setFilteredNote={setFilteredNote} />
            <br />
            <Cards note={filteredNote} setNote={setNote} />
          </>
        } />

        <Route path='/Edit/:i' element={<Edit note={filteredNote} setNote={setNote} />} />
      </Routes>

    </BrowserRouter>
  </>

}

export default App