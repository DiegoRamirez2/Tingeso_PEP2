import React, { Component } from "react";
import styled from "styled-components";
import NavbarComponent2 from "./NavbarComponent2";

class AcopioInformationComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            acopio: []
        }
    }
    componentDidMount(){
        fetch("http://127.0.0.1:12880/acopio")
        .then(response => response.json())
        .then((data) => this.setState({acopio: data}));
    }

    render(){
        return(
            <div className="home">
                <NavbarComponent2 />
                <Styles>
                <h1 className="text-center"> <b>Información de Acopio</b></h1>
                    <div className="f">
                        <table border="1" class="content-table">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Turno</th>
                                    <th>Proveedor</th>
                                    <th>KlsLeche</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.acopio.map((data) => (
                                    <tr key={data.idAcopio}>
                                        <td>{data.fecha}</td>
                                        <td>{data.turno}</td>
                                        <td>{data.proveedor}</td>
                                        <td>{data.klsLeche}</td>
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

export default AcopioInformationComponent;

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
