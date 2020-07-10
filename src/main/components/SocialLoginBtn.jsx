import React from 'react'

const spanStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexBasis: '20%',
    alignItems: 'center',
    color: '#149911',
    padding: '5px',
    cursor: 'pointer'
}

export default (props) => {
    return (
        <span className="social-button" style={spanStyle}><i className={props.classs} aria-hidden="true"></i></span>
    )
}