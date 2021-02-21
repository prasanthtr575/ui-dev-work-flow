import React from 'react'

function Button({className, children, ...rest}: any) {
  return (
    <button className={className}>{children}</button>
  )
}

export default Button
