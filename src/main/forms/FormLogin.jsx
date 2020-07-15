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

const styleTitle = {
    textAlign: 'center'
}

const userIcon = <i className="fa fa-user" aria-hidden="true" style={styleIcons}></i>
const keyIcon = <i className="fa fa-lock" aria-hidden="true" style={styleIcons}></i>
const emailIcon = <i className="fa fa-at" aria-hidden="true" style={styleIcons}></i>

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.inputControlName = this.inputControlName.bind(this)
        this.inputControlPassword = this.inputControlPassword.bind(this)
        // this.inputControlEmail = this.inputControlEmail.bind(this)
        // this.inputControlPasswordConfirm = this.inputControlPasswordConfirm.bind(this)
        this.clickEvent = this.clickEvent.bind(this)
        this.state = {
            inputName: '',
            inputPassword: '',
            inputPasswordConfirm: '',
            exibirCadastro: this.props.exibirCadastro,
            enviado: false
        }
    }

    inputControlName(e) {
        this.setState({ inputName: e.target.value })
    }

    inputControlPassword(e) {
        this.setState({ inputPassword: e.target.value })
    }

    clickEvent(e, tipoElement = '') {
        e.preventDefault()
        tipoElement != '' ? this.setState({ exibirEmail: true }) : this.setState({ enviado: true })
    }

    render() {

        if (this.state.enviado == false) {
            return (
                <form style={styleForm}>
                    <i className="fa fa-spinner"></i>
                    <Input type='text' id='name' name='name' icon={userIcon} placeh='Nome' controleEstado={this.mudaValorInput} stateVal={this.inputControlName} value={this.state.inputName} />
                    <Input type='password' label='Senha' id='password' icon={keyIcon} placeh='Senha' stateVal={this.inputControlPassword} value={this.state.inputPassword} />
                    <LoginFormBtn clickEvent={this.clickEvent} />
                    <div className="row justify-content-center">
                        <p>faça login ou <a href='' className="text-light" onClick={e => this.state.exibirCadastro(e, true)}>registre-se</a></p>
                    </div>
                    <div className="row justify-content-center">
                        <p>Selecione sua rede para fazer login</p>
                    </div>
                </form>
            )
        }

        return (
            <form style={styleForm}>
                <h2 style={styleTitle}>Bem vindo {this.state.inputName}!</h2>
                <div className="row justify-content-center">
                    <p>faça login ou <a href='' className="text-light" onClick={e => this.clickEvent(e, 'botaoRegistr')}>registre-se</a></p>
                </div>
                <div className="row justify-content-center">
                    <p>Selecione sua rede para fazer login</p>
                </div>
            </form>
        )
    }
}