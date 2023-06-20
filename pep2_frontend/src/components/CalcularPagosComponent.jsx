import { Component } from "react";
import styled from "styled-components";
import NavbarComponent3 from "./NavbarComponent3";

class CalcularPagosComponent extends Component{
  constructor(props) {
    super(props);
      this.state = {
        pagos: []
        }
      }
      handleCalcularPagos = () => {
        fetch("http://localhost:8080/pagos")
        .then(response => response.json())
        .then((data) => this.setState({pagos: data}));
      };
    
      render() {
        return (
          <div className="home">
            <NavbarComponent3 />
            <Styles>
              <div className="text-container">
                <h1 className="text-center"><b>Planilla de Pagos</b></h1>
              </div>
              <div className="f">
                <div className="button-container">
                  <button onClick={this.handleCalcularPagos}>Calcular Pagos</button>
                </div>
              </div>
              <table border="1" className="content-table">
                <thead>
                  <tr>
                    <th>Quincena</th>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>TOTAL KLS leche</th>
                    <th>Nro. días</th>
                    <th>Promedio diario</th>
                    <th>%Variación Leche</th>
                    <th>%Grasa</th>
                    <th>%Variación Grasa</th>
                    <th>%Solidos Totales</th>
                    <th>%Variación ST</th>
                    <th>Pago por Leche</th>
                    <th>Pago por Grasa</th>
                    <th>Pago por Solidos Totales</th>
                    <th>Bonificación por Frecuencia</th>
                    <th>Dcto. Variación Leche</th>
                    <th>Dcto. Variación Grasa</th>
                    <th>Dcto. Variación ST</th>
                    <th>Pago TOTAL</th>
                    <th>Monto Retención</th>
                    <th>Monto FINAL</th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.pagos.map((pago) => (
                    <tr key={pago.idPago}>
                      <td>{`${pago.anio}/${pago.mes}/${pago.quincena}`}</td>
                      <td>{pago.idProveedor}</td>
                      <td>{pago.nombreProveedor}</td>
                      <td>{pago.klsLeche}</td>
                      <td>{pago.nroDiasEnvios}</td>
                      <td>{pago.promDiarioKlsLeche}</td>
                        <td>{pago.varLeche}</td>
                        <td>{pago.grasa}</td>
                        <td>{pago.varGrasa}</td>
                        <td>{pago.solidosTotales}</td>
                        <td>{pago.varSolidosTotales}</td>
                        <td>{pago.pagoLeche}</td>
                        <td>{pago.pagoGrasa}</td>
                        <td>{pago.pagoSolidosTotales}</td>
                        <td>{pago.bonificacionPorFrecuencia}</td>
                        <td>{pago.dctoVarLeche}</td>
                        <td>{pago.dctoVarGrasa}</td>
                        <td>{pago.dctoVarSolidosTotales}</td>
                        <td>{pago.pagoTotal}</td>
                        <td>{pago.montoRetencion}</td>
                        <td>{pago.montoFinal}</td>
                    </tr>
              ))}
              </tbody>
            </table>
        </Styles>
      </div>
    );
  }
}

export default CalcularPagosComponent;

const Styles = styled.div`
  .text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
  }

  .f {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  * {
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .content-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  .content-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }

  .content-table th,
  .content-table td {
    padding: 5px 5px;
  }

  .content-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  .content-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  .content-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  .content-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }

  /* Estilos para el botón */
  .button-container {
    text-align: center;
    margin-top: 16px;
  }

  button {
    border-radius: 20px;
    background-color: #005b4a;
    color: white;
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #004438;
  }
}
`

