import React from 'react'

function Footer({children}: any) {
  return (
    <div className="bg-tertiary text-dark text-small text-regular p-20px">
      {children}
    </div>
  )
}

export default Footer
