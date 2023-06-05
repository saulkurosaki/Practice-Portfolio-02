import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>

      <section className='services'>
        <article className='service'>
          <h2>Diseño Web</h2>
          <p>
            Hago que tu web sea lo suficientemente atractiva para llamar
            la atención de cualquier persona, cliente o empresa.
          </p>
        </article>

        <article className='service'>
          <h2>Desarrollo Web</h2>
          <p>
            Realizo la maquetación, estructura y modelado de toda tu pagina web.
          </p>
        </article>

        <article className='service'>
          <h2>Posicionamiento Web</h2>
          <p>
            Me encargo que tu pagina web se encuentre disponible en Google al
            alcance de cualquier potencial visitante, completamente lista para
            sdr utilizada en su totalidad.
          </p>
        </article>
      </section>
    </div>
  )
}
