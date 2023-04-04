import React, { Fragment } from "react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from "../../assets/logo.png"
import { Container, Copy, Item } from "./styles";

const Footer = () => { 
    return(
        <Fragment>
        <Container>
        <Item>
            <img src={LogoImg} alt=""></img>
            <p>Saiba mais sobre nós.</p>
            <nav>
                <li><span><FaFacebook size={32}/></span></li>
                <li><span><FaInstagram size={32}/></span></li>
                <li><span><FaWhatsapp size={32}/></span></li>
            </nav>
        </Item>
        <Item>
            <h3>Nossos serviços:</h3>
            <ul>
                <li><span>Comprar</span></li>
                <li><span>Alugar</span></li>
                <li><span>Vender</span></li>
            </ul>
        </Item>
        </Container>
        <Copy>
            <p>Todos os direitos reservados.</p>
                <ul>
                    <li><span>Termos de uso</span></li>
                    <li><span>Política de privacidade</span></li>
                    <li><span>Política de cookies</span></li>
                </ul>
        </Copy>
        </Fragment>
    )
}

export default Footer;