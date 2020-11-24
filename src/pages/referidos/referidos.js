import React from 'react'
import './referidos.css'
import { IonIcon } from '@ionic/react';
import { ticketOutline, arrowForwardCircleOutline, personAddOutline,personOutline } from 'ionicons/icons';

export default function referidos() {
    return (
        <div className="row panel">
            <div className="col-xl-4">
                <h3 className="titulo2">Referidos</h3>
            </div>
            <div className="col-xl-6">

            </div>
            <div className="col-xl-2">
                <IonIcon className="iconosAggReferido" slot="personAddOutline" icon={personAddOutline} />
            </div>
            <div className="col-xl-10 cartas">

                <div className="row">
                    <div className="col-xl-2"></div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                                <h5 className="card-title">1 Referidos</h5>
                                <p>+100 Puntos</p>
                                <IonIcon className="iconosCupones" slot="personOutline" icon={personOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                                <h5 className="card-title">5 Referidos</h5>
                                <p>+600 Puntos</p>
                                <IonIcon className="iconosCupones" slot="personOutline" icon={personOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                                <h5 className="card-title">10 Referidos</h5>
                                <p>+1400 Puntos</p>
                                <IonIcon className="iconosCupones" slot="personOutline" icon={personOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2"></div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                            <h5 className="card-title">15 Referidos</h5>
                                <p>+2000 Puntos</p>
                                <IonIcon className="iconosCupones" slot="personOutline" icon={personOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                            <h5 className="card-title">20 Referidos</h5>
                                <p>+3500 Puntos</p>
                                <IonIcon className="iconosCupones" slot="personOutline" icon={personOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                            <h5 className="card-title">20 Referidos</h5>
                                <p>+5000 Puntos</p>
                                <IonIcon className="iconosCupones" slot="personOutline" icon={personOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-1"></div>
                    <div className="col-xl-2"></div>
                    <div className="col-xl-9">
                        <div className="row divInputButonCupon">
                            <div className="col-xl-11">
                                <input className="inputCupon" type="text" placeholder="Agregar Referido" />
                            </div>
                            <div className="col-xl-1 botonCupon">
                                <IonIcon className="iconosBotonCupon" slot="arrowForwardCircleOutline" icon={arrowForwardCircleOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-11 tabla">
                        <h5>Lista de Referidos </h5>
                        <table className="table table-borderless">
                            <thead>
                                <tr className="headTabla">
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Puntos</th>
                                    <th scope="col">Status</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th scope="row">Default</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>

                                </tr>
                                <tr>
                                    <th scope="row">Default</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr>
                                    <th scope="row">Default</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                </div>

            </div>
        </div>
    )
}
