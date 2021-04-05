import React, { useState } from "react"

export const PropsAndState = ({ pet, yourName }) => {
  let [dogsAdopted, setdogsAdopted] = useState(0)

  const handleClick = () => {
    const newdogsAdopted = ++dogsAdopted
    setdogsAdopted(newdogsAdopted)
    console.log(newdogsAdopted)
  }
  return (
    <><div className="PropsAndState">
      <h2>Welcome, {yourName} </h2>
      <h3>Your pet {pet} is lovely</h3>
      <p className="clickCount">Dogs Adopted: {dogsAdopted}</p>
      <button onClick={(handleClick)}>Click me to instantly adopt a Dog</button>
      </div>
    </>
  )
}