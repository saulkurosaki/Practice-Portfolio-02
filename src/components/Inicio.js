import React from 'react';
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>
        Hola, soy <strong>Saul Paredes Fano</strong>, Desarrollador Web en Mexico, y
        ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en todo 
        tipo de proyectos web.
      </h1>

      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicación web, tener mas
        visibilidad y relevancia en internet. <Link to='/contacto'>Contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis Proyectos</h2>
        <p>Estos son algunos de mis trabajos como desarrollador web</p>

        <ListadoTrabajos limite='2' />
      </section>

    </div>
  )
}
