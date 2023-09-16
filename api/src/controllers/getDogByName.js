require("dotenv").config();
const { Op } = require("sequelize");
const { Dog, Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;


const URL = `https://api.thedogapi.com/v1/breeds/search?q=`;


const getDogByName = async (req, res) => {
  try {
    const { name } = req.query;
  
   
    const response = await axios.get(`${URL}${name}&api_key=${API_KEY}`);
    const apiData = response.data;

    const apiRaza = apiData.map((e) => ({             
      id: e.id,
      nombre: e.name,
      altura: e.height.metric,
      peso: e.weight.metric,
      temperamentos: e.temperament,
      añosDeVida: e.life_span
    }));

    
    const dbRaza = await Dog.findAll({   // arreglar problema 
      where: {
        nombre: {
          [Op.iLike]: `%${name}%`
        }
      },
      include: ["temperamentos"] 
    });

    const allRazas = apiRaza

 
    if (allRazas.length === 0) {
      return res.status(404).json({ message: "No se encontraron razas de perros." });
    }

    

    res.json(allRazas);

  } catch (error) {
    res.status(500).json({ error: "Error al buscar las razas de perros" });
  };
}

module.exports = getDogByName
