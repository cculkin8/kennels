const remoteURL = "http://localhost:5002"

export const getAnimalById = (id) => {
return fetch(`${remoteURL}/animals/${id}?_expand=location&_expand=customer`)
.then(res => res.json())
};

export const getAllAnimals = () => {
return fetch(`${remoteURL}/animals`)
.then(result => result.json())
  } 
export const remove = (id) =>{
  return fetch (`${remoteURL}/animals/${id}`, {
  method: "Delete"
}).then(result => result.json())
};
export const addAnimal = (newAnimal) =>{
  return fetch (`${remoteURL}/animals`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newAnimal)
  }).then(response => response.json())
};

export const updateAnimal = (editedAnimal) => {
  return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedAnimal)
  }).then(data => data.json());
}
export const getRandomId= () =>{
  return fetch(`${remoteURL}/animals`)
  .then(result => result.json())
  .then(animal => {
    const randomIndex = Math.floor(Math.random() * animal.length);
    const randomAnimal = animal[randomIndex];
    return randomAnimal.id;
  })
}