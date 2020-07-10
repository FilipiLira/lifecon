import React from 'react'
import Avatar from '../components/Avatar'
import Form from '../forms/FormLogin'
import SocialBtn from '../components/SocialLoginBtn'
import SocialBar from '../components/SocialIconsBar'
import FormLogin from '../forms/FormLogin'
import FormCadastro from '../forms/FormCadastro'


const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '400px',
    maxHeight: '500px',
    backgroundColor: '#5b5b5b',
    borderRadius: '0.5rem',
}

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.exibirCadastro = this.exibirCadastro.bind(this)
        this.state = {
            exibirCadastro: false,
        }
    }

    exibirCadastro(e, exibir) {
        e.preventDefault()
        exibir ?  this.setState({exibirCadastro: true}) : this.setState({exibirCadastro: false})
        // console.log(this.state.exibirCadastro)
    }

    render() {
        
        let form = !this.state.exibirCadastro ? <FormLogin exibirCadastro={this.exibirCadastro}/> : <FormCadastro/>
        return (
            <div style={style}>
                {/* <h2>User login</h2> */}
                <Avatar />
                {form}
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