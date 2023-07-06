import React, { Component } from "react";
import styled from "styled-components";
import NavbarComponent5 from "./NavbarComponent5";

class LaboratorioInformationComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            laboratorio: []
        }
    }
    componentDidMount(){
        fetch("http://127.0.0.1:12880/laboratorio")
        .then(response => response.json())
        .then((data) => this.setState({laboratorio: data}));
    }

    render(){
        return(
            <div className="home">
                <NavbarComponent5 />
                <Styles>
                <h1 className="text-center"> <b>Información de Laboratorio</b></h1>
                    <div className="f">
                        <table border="1" class="content-table">
                            <thead>
                                <tr>
                                    <th>Proveedor</th>
                                    <th>% Grasa</th>
                                    <th>% Sólidos Totales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.laboratorio.map((data) => (
                                    <tr key={data.idLaboratorio}>
                                        <td>{data.proveedor}</td>
                                        <td>{data.porcentajeGrasa}</td>
                                        <td>{data.porcentajeSolidosTotales}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Styles>
            </div>
            
        );
    }
}

export default LaboratorioInformationComponent;

const Styles = styled.div`
.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
}

.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
}

.f{
    justify-content: center;
    align-items: center;
    display: flex;
}
*{
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.content-table{
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.content-table thead tr{
    background-color: #009879;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
}
.content-table th,
.content-table td{
    padding: 12px 15px;
}
.content-table tbody tr{
    border-bottom: 1px solid #dddddd;
}
.content-table tbody tr:nth-of-type(even){
    background-color: #f3f3f3;
}
.content-table tbody tr:last-of-type{
    border-bottom: 2px solid #009879;
}
.content-table tbody tr.active-row{
    font-weight: bold;
    color: #009879;
}
`
