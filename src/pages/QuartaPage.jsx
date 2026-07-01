import "/src/index.css";
import { useState, useEffect } from "react";

const QuartaPage = () => {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarTexto(true);
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[url('/pp2.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="min-h-screen flex flex-col items-center justify-center">
          {mostrarTexto && (
            <div
              className={`flex gap-4  transition-all duration-1000 ${
                mostrarTexto
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a href="https://www.youtube.com/shorts/cdgmo-BjsiU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 px-15 py-10 rounded-lg text-white font-bold"
              >
                VAMOS!
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuartaPage;
