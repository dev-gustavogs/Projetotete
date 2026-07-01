import { useState, useEffect } from 'react'
import '/src/index.css'
import { Link } from 'react-router-dom'

const MainPage = () => {
  const [corAtiva, setCorAtiva] = useState(false)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCorAtiva((corAnterior) => !corAnterior) // inverte o valor a cada vez
    }, 1000) // troca a cada 2 segundos

    return () => clearInterval(intervalo) // limpa o intervalo quando o componente desmonta
  }, [])

  return (
    <>
    <div className="min-h-screen bg-pink-300 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-pink-700  p-15 rounded-lg">
        <h1 className="font-bold text-3xl">Bem-vinda à sua página Tete</h1>
          <p className="text-xl font-light">(sou péssimo em estilizar, desculpe)</p>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <Link to="/secundaria" className={`text-xl flex flex-col p-10 rounded-lg items-center justify-center transition-colors duration-[1000ms] ${
          corAtiva ? 'bg-pink-500' : 'bg-pink-700'}`}>
          Próxima página bemzin
        </Link>
      </div>
    </div>
  </>
  )
}

export default MainPage