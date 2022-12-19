import axios from 'axios'

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: { "Accept-Encoding": "gzip,deflate,compress" } // added for error version
})

export default pokeApi