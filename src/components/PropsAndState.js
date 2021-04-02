import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
  let [dogsAdopted, setdogsAdopted] = useState(0)

  const handleClick = () => {
    const newdogsAdopted = ++dogsAdopted
    setdogsAdopted(newdogsAdopted)
    console.log(newdogsAdopted)
  }
  return (
    <>
      <h2>Welcome, {yourName} </h2>
      <p className="clickCount">Dogs Adopted: {dogsAdopted}</p>
      <button onClick={(handleClick)}>Click me to instantly adopt a Dog</button>
    </>
  )
}