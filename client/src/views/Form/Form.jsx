import style from "./Form.module.css"
import { useState } from "react";
import axios from "axios"
import { useSelector } from "react-redux";



const Form = () => {

  const temperaments = useSelector((state) => state.allTemperaments);


  const [form, setForm] = useState({
    nombre: "",
    altura: "",
    peso: "",
    añosDeVida: "",
    temperamentos: "",
  })


  const [errorsState, setErrors] = useState({
    nombre: "",
    altura: "",
    peso: "",
    añosDeVida: "",
    temperamentos: "",
  })


  const onChange = (e) => {
    const property = e.target.name
    const value = e.target.value

    setErrors(validate({ ...form, [property]: value }, errorsState))

    setForm({ ...form, [property]: value })
  }

  const validate = (form, errorsState) => {

    const errors = { ...errorsState }

    if (!form.nombre) errors.nombre = "raza requerida"
    else if (/^.{4,}$/g.test(form.nombre)) {
      errors.nombre = ""
    } else errors.nombre = "ingrese minimo 4 caracteres"


    if (!form.altura) errors.altura = "altura requerida"
    else if (/^.{2,}$/g.test(form.altura)) {
      errors.altura = ""
    } else errors.altura = "ingrese minimo 2 caracteres"


    if (!form.peso) errors.peso = "peso requerido"
    else if (/^.{2,}$/g.test(form.peso)) {
      errors.peso = ""
    } else errors.peso = "ingrese minimo 2 caracteres"


    if (!form.añosDeVida) errors.añosDeVida = "años requerido"
    else if (/^.{2,}$/g.test(form.añosDeVida)) {
      errors.añosDeVida = ""
    } else errors.añosDeVida = "ingrese minimo 2 caracteres"


    if (!form.temperamentos) errors.temperamentos = "temperamentos requerido"
    else if (/^.{4,}$/g.test(form.temperamentos)) {
      errors.temperamentos = ""
    } else errors.temperamentos = "ingrese minimo 4 caracteres"

    return errors
  }

  const submitHandler = (event) => {
    event.preventDefault()
    axios.post("http://localhost:3001/dogs", form)
      .then(res => alert(res.data))
      .catch(err => alert(err))

  }


  return (
    <div>
      <h1 className={style.titulo}>CREATE BREED</h1>
      <form onSubmit={submitHandler} className={style.form}>
        <div>
          <label>NAME: </label>
          <input type="text" value={form.nombre} placeholder="ingrese nombre de la raza.."
            name="nombre" onChange={onChange} />
          <span>{errorsState.nombre}</span>
        </div>
        <div>
          <label>HEIGHT: </label>
          <input type="text" value={form.altura} placeholder="min/max"
            name="altura" onChange={onChange} />
          <span>{errorsState.altura}</span>
        </div>
        <div>
          <label>WEIGHT: </label>
          <input type="text" value={form.peso} name="peso" placeholder="min/max"
            onChange={onChange} />
          <span>{errorsState.peso}</span>
        </div>
        <div>
          <label>YEARS OF LIFE: </label>
          <input type="text" value={form.añosDeVida} name="añosDeVida" placeholder="min/max"
            onChange={onChange} />
          <span>{errorsState.añosDeVida}</span>
        </div>
        <div>
          <label>TEMPERAMENTS: </label>
          <input type="text" value={form.temperamentos} placeholder="ingrese los temperamentos"
            name="temperamentos" onChange={onChange} />
          <span>{errorsState.temperamentos}</span>
        </div>
        <button type="submit" disabled={Object.values(errorsState).some((error) => error !== '')}>CREAR RAZA</button>
      </form>
    </div>
  )
}


export default Form;
