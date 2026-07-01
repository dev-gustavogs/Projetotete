import { Link } from 'react-router-dom'
import '/src/index.css'
import BotaoFujao from '../components/BotaoFujao'
import { useState, useEffect } from 'react'

const SecundaryPage = () => {
    const [mostrarTexto, setMostrarTexto] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarTexto(true)
    }, 3000) // 3 segundos

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div>
        <img
        width="400"
        height="5000"
        src="src/assets/tete6.jpeg"
        alt="Description"
        className="absolute top-4 left-4"
      />
      <img
        width="330"
        src="src/assets/tete4.jpeg"
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
              <Link
                className="flex items-center justify-center bg-yellow-600 px-6 py-3 rounded-lg text-white font-bold"
                to="https://www.youtube.com/watch?v=UOs3crIFUXE"
              >
                Talvez
              </Link>
              <Link
                className="flex items-center justify-center bg-green-600 px-6 py-3 rounded-lg text-white font-bold"
                to="https://www.youtube.com/watch?v=HNI7yZvwqAQ"
              >
                Não
              </Link>

              <BotaoFujao className="flex items-center justify-center bg-red-700 px-6 py-3 rounded-lg text-white font-bold">
                É lógico amor!
              </BotaoFujao>
             </div>
          )}
        </div>

      </div>
      
    </div>
  )
}

export default SecundaryPage