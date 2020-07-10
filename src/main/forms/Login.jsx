import React from 'react'
import Avatar from '../components/Avatar'
import Form from '../forms/FormLogin'
import SocialBtn from '../components/SocialLoginBtn'
import SocialBar from '../components/SocialIconsBar'
import FormLogin from '../forms/FormLogin'


const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '400px',
    height: '500px',
    backgroundColor: '#5b5b5b',
    borderRadius: '0.5rem',
}

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.clickEvent = this.clickEvent.bind(this)
        this.state = {
            exibirInputEmail: false,
        }
    }

    clickEvent(e) {
        e.preventDefault()
        this.setState({exibirInputEmail: true})
        console.log(this.state.exibirInputEmail)
    }

    render() {
        
        return (
            <div style={style}>
                {/* <h2>User login</h2> */}
                <Avatar />
                <FormLogin exibirEmail={this.state.exibirInputEmail}/>
                <div className="row justify-content-center">
                    <p>faça login ou <a href='' className="text-light" onClick={ e => this.clickEvent(e) }>registre-se</a></p>
                </div>
                <div className="row justify-content-center">
                    <p>Selecione sua rede para fazer login</p>
                </div>
                <SocialBar>
                    <SocialBtn classs={'fa fa-google'} />
                    <SocialBtn classs={'fa fa-amazon'} />
                    <SocialBtn classs={'fa fa-facebook'} />
                    <SocialBtn classs={'fa fa-linkedin'} />
                    <SocialBtn classs={'fa fa-instagram'} />
                </SocialBar>
            </div>

        )
    }
}