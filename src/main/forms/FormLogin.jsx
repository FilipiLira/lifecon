import React from 'react'
import Input from '../components/Input'
import LoginFormBtn from '../components/LoginFormBtn'

const styleForm = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
}

const styleIcons = {
    fontSize: '2rem'
}

const  styleTitle = {
    textAlign: 'center'
}

const userIcon = <i className="fa fa-user" aria-hidden="true" style={styleIcons}></i>
const keyIcon = <i className="fa fa-lock" aria-hidden="true" style={styleIcons}></i>
const emailIcon = <i className="fa fa-at" aria-hidden="true" style={styleIcons}></i>

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.setValueInput = this.setValueInput.bind(this)
        this.clickEvent = this.clickEvent.bind(this)
        this.state = {
            inputName: '',
            enviado: false,
            exibirEmail: this.props.exibirEmail,
            enviado: false
        }
    }

    setValueInput(e) {
        this.setState({ inputName: e.target.value })
        console.log(this.state.inputName)
    }

    // setValuePassword(e){
    //     this.setState({inputPassword: e.target.val})
    // }

    clickEvent(e) {
        e.preventDefault()
        this.setState({enviado: true})
        
    }

    render() {

        console.log(this.state.exibirEmail)
        let inputemail = this.state.exibirEmail == true ? <Input type='email' id='email' name='email' icon={emailIcon} placeh='Email' controleEstado={this.mudaValorInput} /> : ''
        if (this.state.enviado == false) {
            return (
                <form style={styleForm}>
                    <Input type='text' id='name' name='name' icon={userIcon} placeh='Nome' controleEstado={this.mudaValorInput} stateVal={this.setValueInput} />
                    {inputemail}
                    <Input type='password' label='Senha' id='password' icon={keyIcon} placeh='Senha' />
                    <LoginFormBtn clickEvent={this.clickEvent} />
                </form>
            )
        } 

        return (
            <form style={styleForm}>
                <h2 style={styleTitle}>Bem vindo {this.state.inputName}!</h2>
            </form>
        )
    }
}