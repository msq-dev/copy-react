import React from 'react'

const Button = ({onClick, className, type="button", children}) => {
    return (
        <button onClick={onClick} type={type} className={className}>{children}</button>
    )
}

export default Button