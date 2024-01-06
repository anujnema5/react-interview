import React, { useState } from 'react'

const UpdatedComponents = (OriginalComponent) => {
  const NewComponent = ()=> {
    const [money, setMoney] = useState(10)

    const handleIncrease = ()=> {
        setMoney(money * 2)
    }

    return <OriginalComponent handleIncrease={handleIncrease} money={money}/>
  }

  return NewComponent
}

export default UpdatedComponents