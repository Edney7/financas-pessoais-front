import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-groups";
class CadastroUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaRepeticao: "",
  };

  cadastrar = () => {
    console.log("Nome:", this.state.nome);
    console.log("Email:", this.state.email);
    console.log("Senha:", this.state.senha);
    console.log("Repita a senha:", this.state.senhaRepeticao);
  }

  render() {
    return (
      <div classNameName="container">
        <Card title="Cadastro de Usuário">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Nome: *" htmlfor="inputNome">
                  <input
                    type="text"
                    id="inputNome"
                    className="form-control"
                    name="nome"
                    onChange={(e) => this.setState({ nome: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label="E-mail: *" htmlfor="inputEmail">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    name="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label="Senha: *" htmlfor="inputSenha">
                  <input
                    type="password"
                    id="inputSenha"
                    className="form-control"
                    name="senha"
                    onChange={(e) => this.setState({ senha: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label="Repita a senha: *" htmlfor="inputRepitaSenha">
                  <input
                    type="password"
                    id="inputRepitaSenha"
                    className="form-control"
                    name="senhaRepeticao"
                    onChange={(e) => this.setState({ senhaRepeticao: e.target.value })}
                  />
                </FormGroup>
                <button onClick={this.cadastrar} type = "button" className= "btn btn-success">Salvar</button>
                <button type = "button" className="btn btn-danger">Cancelar</button>

              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default CadastroUsuario;
