import React from 'react'

/* interface ButtonProps {
  cls?: string;
  
}
 */
function Button({cls, children, ...rest}:any) {
  return (
    <button className={cls} {...rest}>{children}</button>
  )
}

export default Button
