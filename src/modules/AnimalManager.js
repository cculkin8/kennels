
const remoteURL = "http://localhost:5002"

export const getAnimalById = (id) => {
return fetch(`${remoteURL}/animals/${id}?_expand=location&_expand=customer`)
.then(res => res.json())
  }

export const getAllAnimals = () => {
return fetch(`${remoteURL}/animals`)
.then(result => result.json())
  } 
export const remove = (id) =>{
  return fetch (`${remoteURL}/animals/${id}`, {
  method: "Delete"
}).then(result => result.json())
}