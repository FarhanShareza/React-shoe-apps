import React from 'react'
import './link.scss'

const Link = ({title, onClick}) => {
    return (
        <span className="link" onClick={onClick}>{title}</span>
    )
}

export default Link
