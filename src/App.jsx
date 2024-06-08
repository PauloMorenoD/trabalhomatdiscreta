import { useState } from "react";
import { GoCheck } from "react-icons/go";
const math = require('mathjs');

function App() {
  const [number, setNumber] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [prime, setPrime] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const primeNumber = (num) => {

    if (math.isPrime(num)) {
      setPrime("É primo")
    } else {
      setPrime("Não é primo")
    }

  }
  const evenOrOdd = (num) => {
    if (num % 2 === 0) {
      setPrime("É par")
    } else {
      setPrime("É ímpar")
    }
  }


  function fatoracaoPrimos(num) {

    if (!Number.isInteger(num) != true || +num <= 1) return
    const fatores = [];
    let divisor = 2;
    while (num >= 2) {
      if (num % divisor === 0) {
        fatores.push(divisor);
        num = num / divisor;
        console.log(divisor)
      } else {
        divisor++;
      }
    }

    setPrime(fatores.join(',').replace(/,/g, 'x'))
  }
  const mmc = (num1, num2) => {
    if (+num1 == 0) {
      setPrime("são necessários 2 numéros diferentes de 0")
      return
    } else if (+num2 == 0) {
      setPrime("são necessários 2 numéros diferentes de 0")
      return
    }
    setPrime(math.lcm(num1, num2))
  }
  const mdc = (num1, num2) => {
    console.log(+num1 == 0)
    if (+num1 == 0) {
      setPrime("são necessários 2 numéros diferentes de 0")
      return
    } else if (+num2 == 0) {
      setPrime("são necessários 2 numéros diferentes de 0")
      return
    }

    setPrime(math.gcd(num1, num2))
  }
  const multiple = (num1, num2) => {

    if (+num1 >= +num2 && +num1 % +num2 === 0) {

      setPrime(`${num1} é múltiplo de ${num2}`)
    } else if (+num1 === 0 || +num2 === 0) {
      setPrime("não é possível fazer a operação")
    } else {

      setPrime(`${num1} não é múltiplo de ${num2}`)
    }
  }
  return (
    <div className="App h-screen">

      <header className='w-full bg-[#333] h-14 flex items-center justify-center' >
        <div className="w-5/6 flex items-center justify-center">
          <h1 className='font-bold text-white text-3xl'>Calculadora super fuck</h1>
        </div>
      </header>
      <main className="Main w-full h-full bg-slate-300 flex items-center justify-center flex-col">
        <form action="" className="w-5/6 flex flex-col items-center justify-center py-4 gap-2" onSubmit={handleSubmit} >
          <input type="text" placeholder="" className="w-full p-4 rounded bg-[#444] text-white font-bold" onChange={(event) => {
            setPrime('')
            setNumber(event.target.value)
          }} />
          <input type="text" placeholder="" className="w-full p-4 rounded bg-[#444] text-white font-bold" onChange={(event) => {
            setPrime('')
            setNumber2(event.target.value)
          }} />
        </form >
        <div className="flex w-full h-full">
          <div className="bg-[#222] w-3/5 flex items-center justify-center flex-col text-6xl font-bold text-white">
            <p>{number}</p>
            <p className="text-2xl mt-4 text-center">{prime}</p>
          </div>
          <div className="bg-[#222] border-l-2 w-2/5 flex items-end justify-between flex-col gap-1 p-1 text-white font-bold">
            <button className="border bg-[#555] p-4 rounded cursor-pointer" onClick={() => primeNumber(number)}>Primo ou composto</button>
            <button className="border bg-[#555] p-4 rounded cursor-pointer" onClick={() => evenOrOdd(number)}>par ou ímpar</button>
            <button className="border bg-[#555] p-4 rounded cursor-pointer" onClick={() => fatoracaoPrimos(number)}>fatoração</button>
            <button className="border bg-[#555] p-4 rounded cursor-pointer" onClick={() => mmc(number, number2)}>MMC</button>
            <button className="border bg-[#555] p-4 rounded cursor-pointer" onClick={() => mdc(number, number2)}>MDC</button>
            <button className="border bg-[#555] p-4 rounded cursor-pointer" onClick={() => multiple(number, number2)}>Múltiplo</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
