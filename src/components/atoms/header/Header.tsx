import React from 'react'

function Header({children}: any) {
  return (
    <div className="bg-primary text-light text-title font-bold p-20px">
      {children}
    </div>
  )
}

export default Header
