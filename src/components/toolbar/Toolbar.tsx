import React from 'react'
import Button from '../Button'
import InputBox from '../inputBox/InputBox'

function Toolbar() {
  return (
    <div>
      <InputBox cls="bg-white text-black border border-black" placeholder="Add Todo"/>
      <Button cls="bg-test-bg-color text-white">Add</Button>
    </div>
  )
}

export default Toolbar
