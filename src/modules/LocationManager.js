const remoteURL = "http://localhost:5002"

export const getLocationById = (id) => {
return fetch(`${remoteURL}/locations/${id}?_expand=location&_expand=customer`)
.then(res => res.json())
  }

export const getAllLocations = () => {
return fetch(`${remoteURL}/locations`)
.then(result => result.json())
  } 
export const remove = (id) =>{
  return fetch (`${remoteURL}/location/${id}`,{
  method: "Delete"
  }).then(result => result.json())
}