import React from "react";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";

import {Route, Switch, HashRouter } from "react-router-dom";

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
            </Switch>
        </HashRouter>
    );
}

export default Routes;