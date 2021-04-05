const remoteURL = "http://localhost:5002"

export const getEmployeeById = (id) => {
return fetch(`${remoteURL}/employees/${id}?_expand=location&_expand=customer`)
.then(res => res.json())
  }

export const getAllEmployees = () => {
return fetch(`${remoteURL}/employees`)
.then(result => result.json())
  } 