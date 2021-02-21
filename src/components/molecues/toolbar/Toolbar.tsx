import React from 'react';
import Button from '../../atoms/button/Button';
import TextField from '../../atoms/textField/TextField';

function Toolbar() {
  return (
    <div className="flex">
      <TextField cls="bg-white text-black text-label border border-tertiary p-20px w-full" placeholder="Add Todo" />
      <Button className="hover:bg-primary hover:text-light bg-light text-primary text-label font-bold border border-primary px-57px py-20px ml-20px">Add</Button>
    </div>
  )
}

export default Toolbar
