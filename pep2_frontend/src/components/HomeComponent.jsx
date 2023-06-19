import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export default function Home(){
    return (
        <div>
            <GlobalStyle />
            <HomeStyle>  
                <h1 className="center-text"> <b>MilkStgo</b></h1>
                <div class="box-area">
                    <div class="single-box">
                        <a href="/subir-acopio">
                            <div class="img-area"></div>
                        </a>
                        <div class="img-text">
                            <span class="header-text"><strong>Subir Acopio</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/lista-proveedores">
                            <div class="img-area"></div>
                        </a>
                        <div class="img-text">
                            <span class="header-text"><strong>Ver Proveedores</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/subir-laboratorio">
                            <div class="img-area"></div>
                        </a>
                        <div class="img-text">
                            <span class="header-text"><strong>Subir Laboratorio</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/calcular-pagos">
                            <div class="img-area"></div>
                        </a>
                        <div class="img-text">
                            <span class="header-text"><strong>Ver planilla de pagos</strong></span>
                        </div>
                    </div>
                </div>
            </HomeStyle>
        </div>
    );
};

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #262626;
`
const HomeStyle = styled.nav`

.center-text {
    background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    justify-content: center;
    padding-top: 8px;
}


.box-area{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
body{
    background: #262626
}
.single-box{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: auto;
    border-radius: 4px;
    background-color: #ffffff;
    text-align: center;
    margin: 20px;
    padding: 20px;
    transition: .3s
    border: 2px solid #00a0e9
}

.img-area{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 6px solid #00a0e9;
    border-radius: 50%;
    padding: 20px;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
}

.single-box:nth-child(1) .img-area{
    background-image: url(https://img.freepik.com/vector-premium/chat-archivo-documento-texto-comentando-o-editando-documentos-linea-ilustracion-dibujos-animados-plana_101884-838.jpg)
}
.single-box:nth-child(2) .img-area{
    background-image: url(http://static1.squarespace.com/static/55c7a3e2e4b0fa365689d8aa/55e0aceae4b0643202e59629/55e322ade4b077beb0266329/1590769127854/?format=1500w)
}
.single-box:nth-child(3) .img-area{
    background-image: url(https://img.freepik.com/vector-gratis/ilustracion-matraz-quimico_53876-5926.jpg?w=740&t=st=1681165256~exp=1681165856~hmac=dd373ccb5fe7a19a701a50a1b147edceff3b8cb2db5e5ea350f2373878aaf11d)
}
.single-box:nth-child(4) .img-area{
    background-image: url(https://img.freepik.com/vector-gratis/monedas-oro-billetes-icono-estilo-dibujos-animados-3d-pila-monedas-signo-dolar-fajo-dinero-o-efectivo-ilustracion-vector-plano-ahorro-riqueza-economia-finanzas-ganancias-concepto-moneda_74855-25998.jpg?w=826&t=st=1681257412~exp=1681258012~hmac=35783fd562a8352389df5b29bec0978647629f9397b26d943efd23f3a9bb00e7)
}
.single-box:nth-child(5) .img-area{
    background-image: url(https://img.freepik.com/vector-gratis/monedas-oro-billetes-icono-estilo-dibujos-animados-3d-pila-monedas-signo-dolar-fajo-dinero-o-efectivo-ilustracion-vector-plano-ahorro-riqueza-economia-finanzas-ganancias-concepto-moneda_74855-25998.jpg?w=826&t=st=1681257412~exp=1681258012~hmac=35783fd562a8352389df5b29bec0978647629f9397b26d943efd23f3a9bb00e7)
}
.header-text{
    font-size: 24px;
    font-weight: 500;
    line-height: 48px;
}
.img-text p{
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
}
.single-box:hover{
    background: #e84393;
    color: #fff;}
.login-box{
    cursor: pointer;
}
`
