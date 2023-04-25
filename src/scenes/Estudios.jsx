import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Estudios = () => {
  return (
    <section id="estudios" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          Estudios
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Nivel de Inglés: <span className="text-red">Avanzado C-1</span>
        </p>
        <p className="mt-2">
          Finalizando el secundario en <span className="text-red">Julio de 2023</span>
        </p>
      </motion.div>

      {/* Estudios */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        > 
        
          <p className="font-playfair font-semibold text-2xl">
          HTML | CSS | Javascript
          </p>
          <p className="text-center text-xl">
            Expresiones regulares  
            Programación de algoritmos
            Programación orientada a objetos (POO) y
            Programación funcional
          </p>
          
        
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair font-semibold text-2xl">
          PHP | MySql | Javascript

          </p>
          <p className="text-center text-xl">
            Expresiones regulares  
            Programación de algoritmos
            Programación orientada a objetos (POO) y
            Programación funcional
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair font-semibold text-2xl">
          Bootcamp Full-Stack
          </p>
          <p className="text-center text-xl">
            HTML | CSS | Boostrap | Javascript | Ruby On Rails.. 
             Git: Proyectos, flujo de trabajo, creación de ramas
             Scrum: Planificación 

          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Estudios;
