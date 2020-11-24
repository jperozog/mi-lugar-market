import React from 'react'
import Logo from '../../img/milugar.png'
import { InputGroup, FormControl } from 'react-bootstrap';
import "./login.css"
import {Link} from 'react-router-dom'



export default function Login() {
    return (
        <div className="Login">
            <h1 className="titulo">Login</h1>
            <br />

            <div className="container">
                <label className=" col-form-label etiqueta"  for="inputDefault">Usuario</label>
                <input className="input" type="text" />

                <label className="col-form-label etiqueta"  for="inputDefault">Clave</label>
                <input className="input" type="password" />
                <br />
                <br />
                <br />
                <Link to="/dashboard" className="boton" type="button" ><p>Ingresar</p></Link>
            </div>


        </div>
    )
}
