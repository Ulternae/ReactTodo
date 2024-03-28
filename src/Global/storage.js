import { imagesIcons } from "./images"
// const user = {
//   isNew : true,
//   hasTodos: false,
//   userName : 'Juan Alberto Alcaida Acacias',
//   nickName : 'Juancho',
//   password : 12348,
//   language : 'English',
//   icon : 'https://generative-ai-ultisaer.s3.sa-east-1.amazonaws.com/images/cosmic_astronaut_with_vibrant_hues.png'
// }
// localStorage.setItem('user' , JSON.stringify(user))


// const defaultTodos = [
//   { text: 'Completado', completed: true, id: crypto.randomUUID() },
//   { text: 'Pendiente', completed: false, id: crypto.randomUUID() },
// ]
// localStorage.setItem('todos', JSON.stringify(defaultTodos))

const ItemsStorage = {
  USER: 'user', 
  TODOS: 'todos'
}

const getDataStorage = ({ nameItem, defaultItem}) => {
  const data = localStorage.getItem(nameItem)
  if (!data) {
    return defaultItem
  }
  return JSON.parse(data)
}

const updateDataStorage = ({ nameItem, dataItem, setStateItem} ) => {
  setStateItem(dataItem)
  localStorage.setItem(nameItem, JSON.stringify(dataItem))
}

const getImageUser = () => {
  try {
    const data = JSON.parse(localStorage.getItem('user'))
    return data.icon
  } catch (e) {
    return imagesIcons[parseInt(Math.random() * imagesIcons.length)]
  }

}
const getUser = () => getDataStorage({ nameItem: ItemsStorage.USER , defaultItem: { isNew: true, hasTodos: false }})
const getTodos = () => getDataStorage({ nameItem: ItemsStorage.TODOS, defaultItem: []})
const updateTodos = (data, state) => updateDataStorage({ nameItem: ItemsStorage.TODOS , dataItem: data, setStateItem: state})

const editUserData = (editValue, data) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const newData = {...user , [editValue]: data}
  localStorage.setItem('user' , JSON.stringify(newData))
}
export { getUser , getTodos, updateTodos, getImageUser, editUserData}

