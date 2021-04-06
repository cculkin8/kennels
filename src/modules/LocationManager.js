const remoteURL = "http://localhost:5002"

export const getLocationById = (id) => {
return fetch(`${remoteURL}/locations/${id}?_expand=address`)
.then(res => res.json())
  }

export const getAllLocations = () => {
return fetch(`${remoteURL}/locations`)
.then(result => result.json())
  } 
export const remove = (id) =>{
  return fetch (`${remoteURL}/locations/${id}`,{
  method: "Delete"
  }).then(result => result.json())
}