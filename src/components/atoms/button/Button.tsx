import React from 'react';

function Button({ className, children, ...rest }: any) {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

export default Button;
