import React from 'react'

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '20px'
}

const style2 = {
    color: '#149911',
    fontSize: '2.5rem',
    borderRadius: '50%',
    backgroundColor: '#333',
    border: 'none'
}

export default ( props ) => {
    return (
        <div style={style}>
                <button style={style2} onClick={e => props.clickEvent(e)}>
                  <i className="fa fa-sign-in"></i>
                </button>
        </div>
    )
}