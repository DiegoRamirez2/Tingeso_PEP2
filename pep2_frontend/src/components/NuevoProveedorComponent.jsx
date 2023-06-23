import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import ProveedorService from '../services/ProveedorService';
import swal from 'sweetalert';
import NavbarComponent3 from './NavbarComponent3';

export default function NuevoProveedorComponent(){
    const initialState = {
        idProveedor: 0,
        nombre: "",
        categoria: "",
        retencion: "",
    };
    const [input, setInput] = useState(initialState);

    const changeidProveedorHandler = event => {      
      const idProveedorValue = parseInt(event.target.value, 10);
        setInput({ ...input, idProveedor: idProveedorValue });
    }
    const changeNombreHandler = event => {
        setInput({ ...input, nombre: event.target.value });
    }
    const changeCategoriaHandler = event => {
        setInput({ ...input, categoria: event.target.value });
    }
    const changeRetencionHandler = event => {
        setInput({ ...input, retencion: event.target.value });
    }

    const saveProveedor = e => {
        e.preventDefault();
        swal({
            title: "¿Estás seguro que desea registrar al usuario?",
            text: "Una vez registrado, no podrá modificarlo",
            icon: "warning",
            buttons: ["Cancelar", "Aceptar"],
            dangerMode: true,
        }).then(respuesta => {
            if(respuesta){
                swal("Se ha registrado el usuario con éxito!", {icon: "success", timer: "3000"});
                let proveedor = {idProveedor: input.idProveedor, nombre: input.nombre, categoria: input.categoria, retencion: input.retencion};
                console.log('proveedor => ' + JSON.stringify(proveedor));
                ProveedorService.createProveedor(proveedor).then(
                    (res) =>{
                    }
                );
            }
            else{
                swal("No se ha registrado el usuario", {icon: "error", timer: "3000"});
            }
        });
    }
    

    return (
        <Styles>
          <div className="home">
            <NavbarComponent3 />
            <div className="mainclass">
              <div className="form1">
                <h1 className="text-center"><b>Ingresar Usuarios</b></h1>
                <div className="formcontainer">
                  <hr></hr>
                  <div className="container">
                    <Form>
                      <Form.Group className="mb-3" controlId="idProveedor" value={input.idProveedor} onChange={changeidProveedorHandler}>
                        <Form.Label>Id del Proveedor</Form.Label>
                        <Form.Control type="idProveedor" placeholder="Id del proveedor, con 4 digitos" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="nombre" value={input.nombre} onChange={changeNombreHandler}>
                        <Form.Label>Nombre del Proveedor</Form.Label>
                        <Form.Control type="nombre" placeholder="Nombre en formato Nombre Apellido" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="categoria" value={input.categoria} onChange={changeCategoriaHandler}>
                        <Form.Label>Categoría del Proveedor</Form.Label>
                        <Form.Control type="categoria" placeholder="Categoria: A, B, C o D" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="retencion" value={input.retencion} onChange={changeRetencionHandler}>
                        <Form.Label>Retención del Proveedor</Form.Label>
                        <Form.Control type="retencion" placeholder="Retencion: Si o No" />
                      </Form.Group>
                    </Form>
                  </div>
                  <Button className="boton" onClick={saveProveedor}>Registrar Proveedor</Button>
                </div>
              </div>
            </div>
          </div>
        </Styles>
      );
};

const Styles = styled.div`

.text-center {
text-align: center;
justify-content: center;
padding-top: 8px;
font-family: "Arial Black", Gadget, sans-serif;
font-size: 30px;
letter-spacing: 0px;
word-spacing: 2px;
color: #000000;
font-weight: 700;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: normal;
text-transform: uppercase;
}

.mainclass{
margin-top: 20px;
display: flex;
justify-content: center;
font-family: Roboto, Arial, sans-serif;
font-size: 15px;
}

.form1{
border: 9px solid #CED0CE;
background-color: #DADDD8;
width: 50%;
padding: 36px;
}

input[type=idProveedor], input[type=retencion] {
width: 100%;
padding: 16px 8px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
box-sizing: border-box;
}

Button {
background-color: #42bfbb;
color: white;
padding: 14px 0;
margin: 10px 0;
border: none;
cursor: grabbing;
width: 100%;
}

Button:hover {
opacity: 0.8;
}

.formcontainer {
text-align: left;
margin: 24px 100px 9px;
}

.container {
padding: 24px 0;
text-align:left;
}

span.psw {
float: right;
padding-top: 0;
padding-right: 15px;
}
`
