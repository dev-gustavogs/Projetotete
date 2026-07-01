import { Link } from 'react-router-dom'
import '/src/index.css'
import BotaoFujao from '../components/BotaoFujao'
import { useState, useEffect } from 'react'
import foto6 from '../assets/tete6.jpeg'
import foto4 from '../assets/tete4.jpeg'

const SecundaryPage = () => {
    const [mostrarTexto, setMostrarTexto] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarTexto(true)
    }, 2000) // 2 segundos

    return () => clearTimeout(timer)
  }, [])

    const [corAtiva, setCorAtiva] = useState(false)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCorAtiva((corAnterior) => !corAnterior) // inverte o valor a cada vez
    }, 1000) // troca a cada 2 segundos

    return () => clearInterval(intervalo) // limpa o intervalo quando o componente desmonta
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div>
        <img
        width="400"
        height="5000"
        src={foto6}
        alt="Description"
        className="absolute top-4 left-4"
      />
      <img
        width="330"
        src={foto4}
        alt="Description"
        className="absolute top-4 right-4"
      />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg flex flex-col items-center justify-center min-h-[150px]">
           <h2 className="text-white text-xl p-20 font-bold mb-2">Será que vamos pra Campina?</h2>

        {mostrarTexto && (
            <div
              className={`flex gap-4 p-10 transition-all duration-1000 ${
                mostrarTexto ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
              href="https://www.youtube.com/watch?v=UOs3crIFUXE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-yellow-600 px-6 py-3 rounded-lg text-white font-bold"
              >
                Talvez
              </a>
              <a
                href="https://www.youtube.com/watch?v=HNI7yZvwqAQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 px-6 py-3 rounded-lg text-white font-bold"
              >
                Não
              </a>

              <BotaoFujao className="flex items-center justify-center bg-red-700 px-6 py-3 rounded-lg text-white font-bold">
                É lógico amor!
              </BotaoFujao>
             </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
                <Link to="/quarta" className={`text-xl flex flex-col p-10 rounded-lg items-center justify-center transition-colors duration-[1000ms] ${
                  corAtiva ? 'bg-blue-500' : 'bg-blue-700'}`}>
                  Next
                </Link>
        </div>

      </div>
      
    </div>
  )
}

export default SecundaryPage