import { useState } from "react"

const Counter = () => {

  const [ counter, setCounter ] = useState(0)

  const increase = () => {
    setCounter(counter +1)
  }

  return (
    <div>
      <button onClick={increase}>Aumentar +1</button>
      <p>Hiciste click {counter} veces!</p>
    </div>
  )
}

export default Counter
