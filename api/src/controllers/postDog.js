const { Dog, Temperament } = require("../db");

const postDog = async (req, res) => {
  try {
    const { nombre, altura, peso, temperamentos } = req.body;

    if (!nombre || !altura || !peso || !temperamentos) {
      return res.status(400).json('Faltan datos');
    }

    // Buscar o crear el perro por sus características principales
    const [newDog, created] = await Dog.findOrCreate({
      where: { nombre, altura, peso },
    });

    const temperamentArray = Array.isArray(temperamentos)
      ? temperamentos
      : [temperamentos];

    const associatedTemperaments = [];

    await Promise.all(
      temperamentArray.map(async (temperament) => {
        const trimmedTemperament = temperament.trim();
        const foundTemperament = await Temperament.findOne({
          where: { nombre: trimmedTemperament },
        });

        if (foundTemperament) {
          await newDog.addTemperamentos(foundTemperament);
          associatedTemperaments.push(foundTemperament.nombre);
        }
      })
    );

    return res.json("SUCCESSFULLY CREATED");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postDog;
