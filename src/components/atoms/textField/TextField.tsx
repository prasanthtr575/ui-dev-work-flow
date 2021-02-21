import React from 'react'

function TextField({cls, ...rest }: any) {
  return (
    <input className={cls} {...rest}/>
  )
}

export default TextField


