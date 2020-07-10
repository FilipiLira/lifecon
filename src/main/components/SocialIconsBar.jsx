import React, {cloneElement} from 'react'

const style2 = {
    display: 'flex',
    flexDirection: 'row',
    padding: '0px 10px',
    backgroundColor: '#333',
    borderBottomLeftRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem'
}

export default (props) => {
    return (
        <div style={style2}>
            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i });
            })}
        </div>
    )
}