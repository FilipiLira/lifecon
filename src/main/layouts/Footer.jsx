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
    margin: '0px'
}

export default ( ) => {
    return (
        <div className="foot" style={footStyle}>
              <footer style={footerStyle}>
                    <IconHouse/>
                    <P/>
              </footer>
        </div>
    )
}