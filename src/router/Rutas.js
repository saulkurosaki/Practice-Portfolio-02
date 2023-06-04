import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const Rutas = () => {
  return (
    <BrowserRouter>
        {/* HEADER Y NAVEGACIÓN */}
        <HeaderNav />

        {/* CONTENIDO CENTRAL */}
        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/inicio" element={<Inicio />}/>
            <Route path="/portafolio" element={<Portafolio />}/>
            <Route path="/servicios" element={<Servicios />}/>
            <Route path="/curriculum" element={<Curriculum />}/>
            <Route path="/contacto" element={<Contacto />}/>
        </Routes>

        <hr/>
        {/* FOOTER */}
        <Footer />
    </BrowserRouter>
 )
}
