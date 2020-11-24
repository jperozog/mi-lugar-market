import React from 'react'
import "./facturas.css"
import { IonIcon } from '@ionic/react';
import { ticketOutline, arrowForwardCircleOutline, documentTextOutline, peopleOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

export default function facturas() {
    return (
        <div className="row panel">
            <div className="col-xl-4">
                <h3 className="titulo2">Facturas</h3>
            </div>
            <div className="col-xl-6">

            </div>
            <div className="col-xl-2">

            </div>
            <div className="col-xl-10 cartas">

                <div className="row">
                    <div className="col-xl-1"></div>
                    <div className="col-xl-3">
                        <div className="card cardFacturasCanjedos">
                            <div className="card-body content">
                                <h6 className="card-title">125 Puntos Canjeados</h6>
                                <IonIcon className="iconosCupones" slot="documentTextOutline" icon={documentTextOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card cardFacturasDisponibles">
                            <div className="card-body content">
                                <h6 className="card-title">721 Puntos Disponibles</h6>
                                <IonIcon className="iconosCupones" slot="documentTextOutline" icon={documentTextOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card cardFacturasRecolectados">
                            <div className="card-body content">
                                <h6 className="card-title">846 Puntos Recolectados</h6>
                                <IonIcon className="iconosCupones" slot="documentTextOutline" icon={documentTextOutline} />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-11 tabla">
                        <h5>Facturas </h5>
                        <table className="table table-borderless">
                            <thead>
                                <tr className="headTabla">
                                    <th scope="col">#</th>
                                    <th scope="col">Factura</th>
                                    <th scope="col">Fecha Canje</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th scope="row">Default</th>
                                    <td>Column content</td>
                                    <td>Column content</td>

                                </tr>
                                <tr>
                                    <th scope="row">Default</th>
                                    <td>Column content</td>
                                    <td>Column content</td>

                                </tr>
                                <tr>
                                    <th scope="row">Default</th>
                                    <td>Column content</td>
                                    <td>Column content</td>

                                </tr>
                                <tr>
                                    <th scope="row">Default</th>
                                    <td>Column content</td>
                                    <td>Column content</td>

                                </tr>
                                <tr>
                                    <th scope="row">Default</th>
                                    <td>Column content</td>
                                    <td>Column content</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="col-xl-11 otrasFormas ">
                        <div className="row">
                            <div className="col-xl-12">
                                <h5>Otras Formas de Obtener Puntos </h5>
                            </div>
                            <div className="col-xl-4">
                                <Link to="/cupones">
                                    <div className="card cardOtrasFormas">
                                        <div className="card-body content">
                                            <h6 className="card-title">Cupones</h6>
                                            <IonIcon className="iconosCupones" slot="ticketOutline" icon={ticketOutline} />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-xl-4">
                                <Link to="/referidos">
                                    <div className="card cardOtrasFormas">
                                        <div className="card-body content">
                                            <h6 className="card-title">Referidos</h6>
                                            <IonIcon className="iconosCupones" slot="peopleOutline" icon={peopleOutline} />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
