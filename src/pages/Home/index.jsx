import React, { Fragment } from "react"
import Card from "../../components/Card";
import Banner from "../../components/Banner"
import { Header, Wrapper } from "./styles";

const Home = () => { 
    let Cards = [];
    for(let i= 0; i<4; i++){
        Cards.push(<Card key={i}/>)
    }
    return(
        <Fragment>
            <Banner />
       <Header>
        <h2>Escolha seu imóvel</h2>
       </Header>
       <Wrapper>
        {Cards}
       </Wrapper>
        </Fragment>
    )
}

export default Home;