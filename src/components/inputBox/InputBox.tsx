import React from 'react'

function InputBox({cls, ...rest }: any) {
  return (
    <input className={cls} {...rest}/>
  )
}

export default InputBox


