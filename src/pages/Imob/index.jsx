import React, { Fragment } from "react"
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Topbanner from "../../components/Topbanner";
import { Container, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb} from "./styles";


const Imob = () => { 
    return(
        <Fragment>
             <Topbanner />
    <Container>
      <Left>
     <Thumb>
        <img src="https://images.unsplash.com/photo-1678889284808-6913951fc6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""></img>
     </Thumb>
     <Description>
        <h2>Apartamento para alugar</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
     </Description>
      </Left>
      <Right>
        <Profile>
      <ProfileImg>
        <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt=""></img>
      </ProfileImg>
      <ProfileDescription>
        <h3>João Assis</h3>
        <p>Descrição do usuário</p>
        <p>joao@teste.com</p>
      </ProfileDescription>
      </Profile>
      <ProfileContact>
      <h3>Informações para contato:</h3>
        <p>(11) 97774-0000</p>
        <p>joao@teste.com</p>
      </ProfileContact>
      <ProfileFormContact>
        <h3>Contate o anunciante</h3>
        <form>
           <Input type="text" placeholder="Nome:"/>
           <Input type="text" placeholder="E-mail:"/>
           <TextArea placeholder="Mensagem:"/>
           <Button> Envia sua mensagem</Button>
        </form>
      </ProfileFormContact>
      </Right>
     </Container>
     </Fragment>
    )
}

export default Imob;