import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-groups';

class Login extends React.Component {
    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log("Email", this.state.email);
        console.log("Senha", this.state.senha);
    }
  render(){
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                <div className='bs-docs-section'>
                    
                        <Card title="Login">
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='bs-component'>
                                        <fieldset>
                                            <FormGroup label="E-mail: " htmlFor="exampleInputEmail">
                                                <input type="email"
                                                value={this.state.email}
                                                onChange={e => this.setState({email: e.target.value})}
                                                className='form-control'
                                                id="exampleInputEmail"
                                                placeholder='Digite o Email'>
                                                </input>
                                            </FormGroup>
                                            <FormGroup label="Senha: " htmlFor="exampleInputPassword">
                                                <input type="password"
                                                value={this.state.senha}
                                                onChange={e => this.setState({senha: e.target.value})}
                                                className='form-control'
                                                id="exampleInputPassword"
                                                placeholder='Digite a senha'>
                                                </input>
                                            </FormGroup>
                                            <button onClick={this.entrar} type="button" className="btn btn-success">Entrar</button>
                                            <button type="button" className="btn btn-outline-info">Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>    
    
                            </div>

                        </Card>
                    
                </div>
            </div>
        </div>
      </div>
  );
  

}
}
export default Login;
