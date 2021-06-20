import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home'
import CreateAccount from './Pages/CreateAccount'
import Cart from './Pages/Cart'
import Category from './Pages/Category'
import Login from './Pages/Login'
import ProductPage from './Pages/ProductPage'
import Profile from './Pages/Profile'
import Products from './Pages/Products'
import AdminPage from './Pages/Admin/Pages/AdminPage'
import CreateCategory from './Pages/Admin/Pages/CategoryForm/CreateCategory'
import CreateProduct from './Pages/Admin/Pages/ProductForm/CreateProduct'
import CreateSlide from './Pages/Admin/Pages/SlideForm/CreateSlide'
import EditCategory from './Pages/Admin/Pages/CategoryForm/EditCategory'
import EditProduct from './Pages/Admin/Pages/ProductForm/EditProduct'
import EditSlide from './Pages/Admin/Pages/SlideForm/EditSlide'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={CreateAccount} path="/cadastrar" />
                <Route component={Cart} path="/carrinho" />
                <Route component={Category} path="/categoria/:category" />
                <Route component={Login} path="/login" />
                <Route component={ProductPage} path="/produto/:id" />
                <Route component={Profile} path="/perfil" />
                <Route component={AdminPage} path="/admin"/>
                <Route component={Products} path="/produtos" />
                <Route component={CreateCategory} path="/criar-categoria" />
                <Route component={CreateProduct} path="/criar-produto" />
                <Route component={CreateSlide} path="/criar-slide" />
                <Route component={EditCategory} path="/editar-categoria/:id" />
                <Route component={EditProduct} path="/editar-produto/:id" />
                <Route component={EditSlide} path="/editar-slide/:id" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;