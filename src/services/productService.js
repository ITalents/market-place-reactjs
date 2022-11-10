import api from './api'

const addProductAPI = (product) =>
  api.post('/produto/create', product)
    .then((response) => response)
    .catch((err) => err)

const findAllProducts = () =>
  api.get('/produto/findAll')
    .then((response) => response)
    .catch((err) => err)

export { addProductAPI, findAllProducts };