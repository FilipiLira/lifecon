import React from 'react'
import P from './componetsFooter/P'
import IconHouse from './componetsFooter/IconHouse'

const footStyle = {
    display: 'flex',
    flexDirection: 'row',
    justyfiContent: 'center',
}

const footerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '30px',
    position: 'fixed',
    bottom: '0px',
    backgroundColor: '#149911',
    margin: '0px',
    boxShadow: '0.5px 1.5px 10px #149911'
}

export default ( ) => {
    return (
        <div className="foot" style={footStyle}>
              <footer style={footerStyle}>
                    <IconHouse/>
                    <div className="row justify-content-center align-items-center">
                        <p className="logo-text" style={ { textShadow: '0.5px 1.5px 40px #FFF' } }>NOVA<span style={ { fontSize: '0.9rem',  textShadow: '2px 2px 40px #FFF' } }> robotic ideas</span></p>
                    </div>
                    <P/>
              </footer>
        </div>
    )
}