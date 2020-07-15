import React from 'react'

const style  = {
    backgroundColor: '#149911',
    borderStyle: 'none',
    borderRadius: '0.45rem',
    border: '3px solid #333',
    color: '#333',
    height: '25px',
    padding: '2px',
    paddingBottom: '4px'
}

export default ( props ) => {
    return (
        <button style={style}><a href='#/home'>{props.label}</a></button>
    )
}