import React from 'react'
import Navbar from '../components/Navbar'
import CardCitaOfertada from '../components/CardCitaOfertada'

function Agendar({tipoCita}) {
  return (
    <>
      <Navbar/>
      <section className="home-ouput flex flex-col gap-1 p-10">
        <h5 className='text-2xl text-start font-semibold'>Aqui el tipo de cita{tipoCita}</h5>
        <div className="h-full h-max-[200px] gap-4 grid grid-cols-3 content-start p-4">
            <CardCitaOfertada/>
            <CardCitaOfertada/>
            <CardCitaOfertada/>
            <CardCitaOfertada/>
            <CardCitaOfertada/>
            <CardCitaOfertada/>
            <CardCitaOfertada/>
            <CardCitaOfertada/>
            <CardCitaOfertada/>
        </div>
      </section>
    </>
  )
}

export default Agendar
