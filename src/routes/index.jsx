import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Error from "../pages/Error"
import Imob from "../pages/Imob"
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"

const RouterApp = () => { 
   
    return(
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/imovel" element={<Imob/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    )
}

export default RouterApp;