import React from 'react';
import ListItem from '../../molecues/listItem/ListItem';

function List({ items, deleteTask }: any) {
  const listLength = items.length;
  const listItems = items.map((item: string, index: number) => (
    <ListItem
      value={item}
      key={index}
      noBorder={index >= listLength - 1}
      onClick={() => deleteTask instanceof Function && deleteTask(index)}
    />
  ));
  const noItems = (
    <div className="text-center text-tertiary text-small my-20px">No Tasks</div>
  );

  return (
    <div className="border border-tertiary">
      {listLength ? listItems : noItems}
    </div>
  );
}

export default List;
