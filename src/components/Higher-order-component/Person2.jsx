import React, { useState } from 'react'
import UpdatedComponents from './UpdatedComponents'

const Person2 = () => {
    const [money, setMoney] = useState(10)

    const handleIncrease = ()=> {
        setMoney(money * 2)
    }
    
  return (
    <div>
        <h2>John is offering ${money}</h2>
        <button onClick={handleIncrease}>Increase Money</button>
    </div>
  )
}

export default UpdatedComponents(Person2)