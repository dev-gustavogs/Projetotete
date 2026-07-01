import '/src/index.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import foto from '../assets/tete2.jpeg'
import foto2 from '../assets/tete5.jpeg'

const SecundaryPage = () => {
    const [corAtiva, setCorAtiva] = useState(false)
  
    useEffect(() => {
      const intervalo = setInterval(() => {
        setCorAtiva((corAnterior) => !corAnterior) // inverte o valor a cada vez
      }, 2000) // troca a cada 2 segundos
  
      return () => clearInterval(intervalo) // limpa o intervalo quando o componente desmonta
    }, [])
  return (

    <>
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">

      <div>
        <img
        width="400"
        height="5000"
        src={foto}
        alt="Description"
        className="absolute top-4 left-4"
      />
      <img
        width="400"
        src={foto2}
        alt="Description"
        className="absolute top-4 right-4"
      />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-blue-800 p-8 rounded-lg flex flex-col items-center justify-center min-h-[150px]">
          <h2 className="text-white text-xl p-20 font-bold mb-2">Quem é a mulher mais linda do mundo?</h2>
          <a
            href="https://www.youtube.com/watch?v=uU3Lw6y_Tfs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white m-4 bg-green-600 px-6 py-3 rounded-lg text-lg p-5 hover:underline"
            >
              Thereza Vitória
            </a>
            <a
              href="https://www.youtube.com/shorts/ld6dC-kEp00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-red-700 px-6 py-3 rounded-lg text-lg p-5 hover:underline"
            >
              Outra
            </a>
            <div className="flex flex-col items-center justify-center mt-10">
              <Link to="/terceira" className={`text-xl flex flex-col p-2 rounded-lg items-center justify-center transition-colors duration-[2000ms] ${
                corAtiva ? 'bg-blue-400' : 'bg-blue-800'}`}>
                Próximo
              </Link>
            </div>
        </div>
      </div>


    </div>
    </>
  )
}

export default SecundaryPage