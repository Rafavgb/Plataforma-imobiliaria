import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png"
import { Container, Logo, Menu } from "./styles";

const Header = () =>{
    return (
        <Container>
      <Logo>
        <Link to='/'><img src={LogoImg} alt="" /></Link>
      </Logo>
      <Menu>
        <ul>
           <li><Link to='/login'><span>Cadastro/Login</span></Link></li> 
        </ul>
      </Menu>
        </Container>
    )
}

export default Header;