import { Route, Routes } from 'react-router-dom';

import FormCategoriaProduto from './views/categoriaProduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaProduto/ListCategoriaProduto';
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregator';
import Home from './views/home/Home';
import FormLogin from './views/login/FormLogin';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import FormPromocao from './views/promocao/FormPromocao';
import ListPromocao from './views/promocao/ListPromocao';
import { ProtectedRoute } from './views/util/ProtectedRoute';

function Rotas() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FormLogin />} />

        <Route path='/home' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        <Route path='list-cliente' element={
          <ProtectedRoute>
            <ListCliente />
          </ProtectedRoute>
        } />

        <Route path='list-produto' element={
          <ProtectedRoute>
            <ListProduto />
          </ProtectedRoute>
        } />

        <Route path='list-entregador' element={
          <ProtectedRoute>
            <ListEntregador />
          </ProtectedRoute>
        } />

        <Route path='list-promocao' element={
          <ProtectedRoute>
            <ListPromocao />
          </ProtectedRoute>
        } />

        <Route path='list-categoriaproduto' element={
          <ProtectedRoute>
            <ListCategoriaProduto />
          </ProtectedRoute>
        } />

        <Route path='form-cliente' element={
          <ProtectedRoute>
            <FormCliente />
          </ProtectedRoute>
        } />
        <Route path='form-produto' element={
          <ProtectedRoute>
            <FormProduto />
          </ProtectedRoute>
        } />

        <Route path='form-entregador' element={
          <ProtectedRoute>
            <FormEntregador />
          </ProtectedRoute>
        } />

        <Route path='form-promocao' element={
          <ProtectedRoute>
            <FormPromocao />
          </ProtectedRoute>
        } />
        
        <Route path='form-categoriaproduto' element={
          <ProtectedRoute>
            <FormCategoriaProduto />
          </ProtectedRoute>
        } />

      </Routes>
    </>
  );
}

export default Rotas;
