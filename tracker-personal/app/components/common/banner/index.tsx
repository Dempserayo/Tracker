import { FiRefreshCcw } from "react-icons/fi";

export default function Banner(){
    return(
    <>
    <section className="w-full h-screen flex flex-col-reverse">
    
        <section className="w-full max-w-7xl h-full text-xs font-thin text-white bg-black flex flex-col  justify-start items-center gap-4 px-20">
            <div className="w-full">
                <p className="uppercase">Importante</p>
                <p className="p-4">
                Al empezar, se creara un archivo excel en el cual se registraran de manera local, tus datos,
                de esta forma solo tu tienes acceso a esta informacion,  
                a menos de que compartas con terceros este archivo. Nadie podra acceder a el y a tus datos, recuerda que no estamos almacenando nada.
                </p>
            </div>
    
            <div className="w-full">
                <p className="uppercase">Modo de Uso</p>
                <ul className="p-4 flex flex-col gap-2">
                <li>- Ingresa el archivo EXCEL</li>
                <li>- Actualiza tus datos, agregando las ganancias o perdidas del dia</li>
                <li>- Ve reflejado en una grafica, tus ganancias, porcentaje de victoria y lo acumulado desde el dia 1, hasta ahora.</li>
                </ul>
            </div>
        </section>

        <div className="w-full h-auto bg-black text-xs font-thin  flex flex-row justify-between items-center p-20">
            <section className="w-full flex flex-row gap-4 text-white">
                <button className="hover:text-green-500 cursor-pointer transition-all duration-500">Inicio</button>
                <button className="hover:text-green-500 cursor-pointer transition-all duration-500">Historial</button>
                <button className="hover:text-green-500 cursor-pointer transition-all duration-500">Estadisticas</button>
                <button className="hover:text-green-500 cursor-pointer transition-all duration-500">Github</button>
                <button className="hover:text-green-500 cursor-pointer transition-all duration-500">Documentation</button>
            </section>
            <section className="w-full flex justify-end items-center gap-2">
                <button className="w-20 h-10 hover:text-green-500 cursor-pointer transition-all duration-500 bg-green-500 flex justify-center items-center">Empezar</button>
                <button className="w-auto h-10 hover:text-green-500 cursor-pointer transition-all duration-500 bg-green-500 p-2 justify-center items-center">
                    <FiRefreshCcw />
                </button>
            </section>
        </div>
    </section>
    </>
    )
}