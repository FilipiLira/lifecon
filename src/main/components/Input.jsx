import React from 'react'


export default ( props ) => {
    return (
        <div className={`form-group ${props.classs}`}>
            <label htmlFor="">{props.icon}</label>
            <input id={props.id} name={props.name} type={props.type} className="input-form" placeholder={props.placeh} onChange={e => props.stateVal(e)}/>
        </div>
    )
}