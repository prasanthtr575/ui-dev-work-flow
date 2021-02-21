import React, { useState } from 'react';
import Button from '../../atoms/button/Button';
import TextField from '../../atoms/textField/TextField';

function Toolbar({ addTask }: any) {
  const [task, setTask] = useState('');
  const BTN_ENABLED_CLS =
    'hover:bg-primary hover:text-light bg-light text-primary text-label font-bold border border-primary px-57px py-20px ml-20px';
  const BTN_DISABLED_CLS =
    'bg-tertiary text-light text-label font-bold px-57px py-20px ml-20px cursor-not-allowed';
  const [btnEnabled, setBtnEnabled] = useState(false);

  const onChange = (e: any) => {
    const text = e.target.value;

    setBtnEnabled(text.length > 0);
    setTask(text);
  };
  const onAdd = () => {
    addTask instanceof Function && addTask(task);
    setTask('');
    setBtnEnabled(false);
  };

  return (
    <div className="flex">
      <TextField
        cls="bg-white text-black text-label border border-tertiary p-20px w-full"
        placeholder="Add Todo"
        value={task}
        onChange={onChange}
      />
      <Button
        className={btnEnabled ? BTN_ENABLED_CLS : BTN_DISABLED_CLS}
        onClick={onAdd}
        disabled={!btnEnabled}
      >
        Add
      </Button>
    </div>
  );
}

export default Toolbar;
