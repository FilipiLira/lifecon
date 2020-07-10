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

export default class FormCadastro extends React.Component {
    constructor(props) {
        super(props)
        this.inputControlName = this.inputControlName.bind(this)
        this.inputControlPassword = this.inputControlPassword.bind(this)
        this.inputControlEmail = this.inputControlEmail.bind(this)
        this.inputControlPasswordConfirm = this.inputControlPasswordConfirm.bind(this)
        this.postData = this.postData.bind(this)
        this.clickEvent = this.clickEvent.bind(this)

        this.state = {
            inputName: '',
            inputPassword: '',
            inputEmail: '',
            inputPasswordConfirm: '',
            exibirEmail: false,
            enviado: false
        }
    }

    postData(e) {

        e.preventDefault()
        console.log('teste')

        const data = {
            name: this.state.inputName,
            email: this.state.inputEmail,
            password: this.state.inputPassword
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:4004/api/user/', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ enviado: true })
                console.log(data)
                this.setState({inputName: data.name})
            })
            .catch(error => console.error('Error:', error))
        // .then(data => this.setState({ postId: data.id }));
    }

    inputControlName(e) {
        this.setState({ inputName: e.target.value })
    }

    inputControlPassword(e) {
        this.setState({ inputPassword: e.target.value })
    }

    inputControlEmail(e) {
        this.setState({ inputEmail: e.target.value })
    }

    inputControlPasswordConfirm(e) {
        this.setState({ inputEmail: e.target.value })
    }

    // setValuePassword(e){
    //     this.setState({inputPassword: e.target.val})
    // }

    clickEvent(e, tipoElement = '') {
        e.preventDefault()
        tipoElement != '' ? this.setState({ exibirEmail: true }) : this.setState({ enviado: true })
    }

    render() {

        if (this.state.enviado == false) {
            return (
                <form style={styleForm}>
                    <Input type='text' id='name' name='name' icon={userIcon} placeh='* Nome' controleEstado={this.mudaValorInput} stateVal={this.inputControlName} value={this.state.inputName} />
                    <Input classs='col-12' type='email' id='email' name='email' icon={emailIcon} placeh='* Email' controleEstado={this.mudaValorInput} stateVal={this.inputControlEmail} />
                    <div className="row m-0">
                        <Input classs='col-6 pr-1' type='password' label='Senha' id='password' icon={keyIcon} placeh='* Senha' stateVal={this.inputControlPassword} value={this.state.inputPassword} />
                        <Input classs='col-6 pr-1 mt-1' type='password' label='Confirmar Senha' id='password_confirm' icon={''} placeh='* Confirmar Senha' stateVal={this.inputControlPasswordConfirm} value={this.state.inputPasswordConfirm} />
                    </div>
                    <LoginFormBtn clickEvent={e => {
                        this.clickEvent
                        this.postData(e)
                    }} />
                    <div className="row justify-content-center">
                        <p>faça login ou <a href='' className="text-light" onClick={e => this.clickEvent(e, 'botaoRegistr')}>registre-se</a></p>
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