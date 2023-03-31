import React from "react"
import { Container } from "./styles";
import { Text } from "./styles";

const Banner = () => { 
    return(
        <Container>
            <Text>
                <h2>Descubra o melhor do imobiliário</h2>
                <p>Os melhores lares estão aqui</p>
                <span>Cadastre seu imóvel</span>
            </Text>
        </Container>
    )
}

export default Banner;