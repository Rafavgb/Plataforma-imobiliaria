import React from "react"
import { FaArrowRight, FaMapMarkerAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
import { Container, Description, Img, Itens } from "./styles";
import { HiOutlineHandThumbUp } from "react-icons/hi2";

const Card = () => { 
    return(
    <Container>
       <Img>
       <img src="https://images.unsplash.com/photo-1678889284808-6913951fc6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
       </Img>
       <Description>
        <h4>Apartamento</h4>
        <Itens>
            <span><FaMapMarkerAlt />Pinheiros, São paulo</span>
            <span>R$ 2.400,00 / mês</span>
            <button onClick={()=>""}><HiOutlineHandThumbUp/></button>
        </Itens>
        <Link to='/imovel'>Detalhes<FaArrowRight/></Link>
       </Description>
     </Container>
        
    )
    
}

export default Card;