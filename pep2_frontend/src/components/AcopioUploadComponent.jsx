import React, { Component } from 'react'
import swal from 'sweetalert';
import AcopioUploadService from '../services/AcopioUploadService';
import NavbarComponent from './NavbarComponent';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AcopioUploadComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(event) {
    this.setState({ file: event.target.files[0] });
  }
  
  onFileUpload = () => {
    swal({
      title: "¿Está seguro de que desea cargar el archivo de texto?",
      text: "El archivo solo será aceptado en el sistema si cumple con el formato establecido.",
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
      dangerMode: true
  }).then(respuesta=>{
    if(respuesta){
      swal("Archivo cargado correctamente!", {icon: "success", timer: 3000});
      const formData = new FormData();
      formData.append("file", this.state.file);
      AcopioUploadService.CargarArchivo(formData).then((res) => {
      });
    }
    else{
      swal("Archivo no cargado!", {icon: "error"});
      }
    });
  }

  render() {
    return (
      <div className='home'>
        <NavbarComponent />
        <Styles>
          <div class="f">
            <div class="container">
              <h1><b>Cargar el archivo de Acopio</b></h1>
              <Row className="mt-4">
                <Col col="12">
                  <Form.Group className="mb-3" controlId="formFileLg">
                      <Form.Control type="file" size="lg" onChange={this.onFileChange} />
                  </Form.Group>
                  <Button varian="primary" onClick={this.onFileUpload}>
                    Cargar el archivo de Acopio a la base de datos.
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
          <br>
          </br>
          <hr>
          </hr>
          <div class="form1">
            <h5>Recuerde que el archivo debe tener el formato correspondiente.</h5>
          </div>
        </Styles>
        </div>
    );
  }
}

export default AcopioUploadComponent;


const Styles = styled.div`
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2%;
}
.f{
  margin-top: 40px;
  border: 3px solid rgb(162, 161, 161);
  padding: 40px;
  padding-top: 10px;
  border-radius: 40px;
  margin-left: 300px;
  margin-right: 300px;
}
@media(max-width: 1200px){
  .f{margin-left: 200px;
    margin-right: 200px;}
  
}
.form1{
  border: 1px solid rgb(82, 82, 173);
  padding: 30px;
  border-radius: 30px;
  margin-left: 300px;
  margin-right: 300px;
}
`