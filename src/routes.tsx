import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home'
import CreateAccount from './Pages/CreateAccount'
import Account from './Pages/Account'
import Cart from './Pages/Cart'
import Category from './Pages/Category'
import Login from './Pages/Login'
import Product from './Pages/Product'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={CreateAccount} path="/create-account" />
                <Route component={Account} path="/account" />
                <Route component={Cart} path="/cart" />
                <Route component={Category} path="/category" />
                <Route component={Login} path="/login" />
                <Route component={Product} path="/product" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;