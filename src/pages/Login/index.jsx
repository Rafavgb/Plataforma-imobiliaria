import React, { useState } from "react"
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContainerForm, Form, Label } from "./styles";

const Login = () => { 
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const handleSubmit = (e) =>{
    e.preventDefault();

    console.log({
        email,
        password
    })
   }
    return(
       <Container>
       <h2>Acesse sua conta</h2>
       <p>Entre com seu e-mail e senha.</p>
       <ContainerForm>
        <Form onSubmit={handleSubmit}>
        <Label>E-mail:</Label>
        <Input type="text" 
        name= "email" 
        placeholder="Informe seu e-mail." 
        onChange={(e) => setEmail(e.target.value)}/>
        <Label>Senha:</Label>
        <Input type="text" 
        name= "password" 
        placeholder="Informe sua senha."
        onChange={(e) => setPassword(e.target.value)}/>
        <Button type="submit">Fazer login</Button>
        </Form>
       </ContainerForm>
       </Container>
    )
}

export default Login;