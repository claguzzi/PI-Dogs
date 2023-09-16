require("dotenv").config();
const { Dog, Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const URL = "https://api.thedogapi.com/v1/breeds"

const getDogById = async (req, res) => {
  try {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api"

    const dog = source === "api"
      ? await axios.get(`${URL}/${id}?api_key=${API_KEY}`)
      : await Dog.findByPk( id,{include:{model:Temperament,as : "temperaments"}})

      

    if (source === "api") {
      const dogApi = [dog.data] // lo pongo en una array para poder mapearlo

      const filtereddogApi = dogApi.map((breed) => ({
        id: breed.id,
        nombre: breed.name,
        altura: breed.height.metric,
        imagen: breed.reference_image_id,
        peso: breed.weight.metric,
        temperamentos: breed.temperament,
        añosDeVida: breed.life_span
      }));

      

      res.json(filtereddogApi)
    } else {
      // traerme los temperamentos
      res.json(dog)
    }

  } catch (error) {
    console.log(error)
    res.status(400).json("error al obtener detalle de la raza")
  }
}


module.exports = getDogById;
