import React from 'react'
import "./cupones.css"
import { IonIcon } from '@ionic/react';
import {ticketOutline, arrowForwardCircleOutline} from 'ionicons/icons';

export default function cupones() {
    return (
        <div className="row panel">
            <div className="col-xl-4">
                <h3 className="titulo2">Cupones</h3>
            </div>
            <div className="col-xl-6">

            </div>
            <div className="col-xl-2">

            </div>
            <div className="col-xl-10 cartas">

                <div className="row">
                    <div className="col-xl-2"></div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                                <h5 className="card-title">100 Puntos</h5>
                                <IonIcon className="iconosCupones" slot="ticketOutline" icon={ticketOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                                <h5 className="card-title">500 Puntos</h5>
                                <IonIcon className="iconosCupones" slot="ticketOutline" icon={ticketOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                                <h5 className="card-title">1000 Puntos</h5>
                                <IonIcon className="iconosCupones" slot="ticketOutline" icon={ticketOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2"></div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                                <h5 className="card-title">2500 Puntos</h5>
                                <IonIcon className="iconosCupones" slot="ticketOutline" icon={ticketOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                                <h5 className="card-title">5000 Puntos</h5>
                                <IonIcon className="iconosCupones" slot="ticketOutline" icon={ticketOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card cardCupones">
                            <div className="card-body content">
                                <h5 className="card-title">10000 Puntos</h5>
                                <IonIcon className="iconosCupones" slot="ticketOutline" icon={ticketOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-1"></div>
                    <div className="col-xl-2"></div>
                    <div className="col-xl-9">
                        <div className="row divInputButonCupon">
                            <div className="col-xl-11">
                            <input className="inputCupon" type="text" placeholder="Ingrese Codigo Cupon" />
                            </div>
                            <div className="col-xl-1 botonCupon">
                            <IonIcon className="iconosBotonCupon" slot="arrowForwardCircleOutline" icon={arrowForwardCircleOutline} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-11 tabla">
                        <h5>Cupones Obtenidos</h5>
                        <table className="table table-borderless">
                            <thead>
                                <tr className="headTabla">
                                    <th scope="col">#</th>
                                    <th scope="col">Cupon</th>
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

                            </tbody>
                        </table>
                    </div>
                   

                </div>

            </div>
        </div>
    )
}
