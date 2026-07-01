import { useState, useRef } from 'react'

const TerceiraPagina = ({ children, className }) => {
  const [posicao, setPosicao] = useState({ x: 0, y: 0 })
  const botaoRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!botaoRef.current) return

    const rect = botaoRef.current.getBoundingClientRect()
    const centroX = rect.left + rect.width / 2
    const centroY = rect.top + rect.height / 2

    const distanciaX = e.clientX - centroX
    const distanciaY = e.clientY - centroY
    const distancia = Math.sqrt(distanciaX ** 2 + distanciaY ** 2)

    const distanciaMinima = 100 // raio de detecção em pixels

    if (distancia < distanciaMinima) {
      // calcula o ângulo oposto ao mouse e move o botão pra longe
      const angulo = Math.atan2(distanciaY, distanciaX)
      const forca = (distanciaMinima - distancia) * 1.5

      setPosicao({
        x: -Math.cos(angulo) * forca,
        y: -Math.sin(angulo) * forca,
      })
    } else {
      setPosicao({ x: 0, y: 0 }) // volta ao normal
    }
  }

  return (
    <button
      ref={botaoRef}
      onMouseMove={handleMouseMove}
      style={{
        transform: `translate(${posicao.x}px, ${posicao.y}px)`,
        transition: 'transform 0.2s ease-out',
      }}
      className={className}
    >
      {children}
    </button>
  )
}



export default TerceiraPagina