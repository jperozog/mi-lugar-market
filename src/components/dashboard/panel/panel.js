import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { IonIcon } from '@ionic/react';
import { personOutline, ticketOutline, documentTextOutline, peopleOutline, pulseOutline, giftOutline,logOutOutline } from 'ionicons/icons';

import {
    Link
} from "react-router-dom";
import "./panel.css"

export default function panel() {
    return (
        <Row>
            <Col xl={1}>
            </Col>
            <Col xl={10}>
                <IonIcon className="iconoUser" slot="person-outline" icon={personOutline} />
                <h2 className="Datosuser" >Nombre Usuario</h2>
                <h2 className="Datosuser" >Apellido Usuario</h2>
                <br />
                <br />
                <Link to="/dashboard" className="boton" type="button">
                    <IonIcon className="iconos" slot="pulseOutline" icon={pulseOutline} />
                    <p>Panel Principal</p>
                </Link>
                <Link to="/regalos" className="boton" type="button">
                    <IonIcon className="iconos" slot="giftOutline" icon={giftOutline} />
                    <p>Regalos</p>
                </Link>
                <Link to="/cupones" className="boton" type="button">
                    <IonIcon className="iconos" slot="ticketOutline" icon={ticketOutline} />
                    <p>Cupones</p>
                </Link>
                <Link to="/facturas" className="boton" type="button">
                    <IonIcon className="iconos" slot="documentTextOutline" icon={documentTextOutline} />
                    <p>Facturas</p>
                </Link>
                <Link to="/referidos" className="boton" type="button">
                    <IonIcon className="iconos" slot="peopleOutline" icon={peopleOutline} />
                    <p>Referidos</p>
                </Link>
                <Link to="/" className="boton" type="button">
                    <IonIcon className="iconos" slot="logOutOutline" icon={logOutOutline} />
                    <p>Cerrar Sesion</p>
                </Link>
            </Col>

        </Row>
    )
}
