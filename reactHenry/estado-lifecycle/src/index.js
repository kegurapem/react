import React from 'react';
import ReactDOM from 'react-dom/client';
import Clase from './Clase';
import Funcional from './Funcional'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Clase text='Esto es un props'/>
    <Funcional text='Enviado desde el componente Funcional'/>
  </>
);
