const remoteURL = "http://localhost:5002"

export const getCustomerById = (id) => {
return fetch(`${remoteURL}/customers/${id}?_expand=address`)
.then(res => res.json())
  }

export const getAllCustomers = () => {
return fetch(`${remoteURL}/customers`)
.then(result => result.json())
  } 
export const remove = (id) =>{
  return fetch (`${remoteURL}/customer/${id}`, {
  method: "Delete"
  }).then(result => result.json())
}