import React from 'react';
import Button from '../../atoms/button/Button';

function ListItem({ value, noBorder = false, onClick }: any) {
  const containerCls = noBorder ? 'flex' : 'flex border-b border-tertiary';

  return (
    <div className={containerCls}>
      <p className="flex-1 p-20px m-0px">{value}</p>
      <Button
        className="hover:bg-secondary hover:text-light bg-light text-secondary text-label font-bold border border-secondary w-40px h-40px rounded-full place-self-center mr-20px"
        onClick={onClick}>
        X
      </Button>
    </div>
  )
}

export default ListItem
