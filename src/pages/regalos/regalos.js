import React from 'react'
import "./regalo.css"
import { IonIcon } from '@ionic/react';
import { personOutline, ticketOutline, documentTextOutline, peopleOutline, pulseOutline, giftOutline, logOutOutline,addCircleOutline } from 'ionicons/icons';

export default function regalos() {
    return (
        <div className="row panel">
            <div className="col-xl-4">
                <h3 className="titulo2">Regalos Disponibles</h3>
            </div>
            <div className="col-xl-6">
               
            </div>
            <div className="col-xl-2">
          
            </div>
            <div className="col-xl-10 cartas">

                <div className="row">
                    <div className="col-xl-2"></div>
                    <div className="col-xl-3">
                        <div className="card cardRegalos">
                            <div className="card-body content">
                                <h4 className="card-title">01</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <IonIcon className="iconos" slot="giftOutline" icon={giftOutline} />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Reclamar</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card cardRegalos">
                            <div className="card-body content">
                                <h4 className="card-title">02</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <IonIcon className="iconos" slot="giftOutline" icon={giftOutline} />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Reclamar</a>


                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card cardRegalos">
                            <div className="card-body content">
                                <h4 className="card-title">03</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <IonIcon className="iconos" slot="giftOutline" icon={giftOutline} />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Reclamar</a>


                            </div>
                        </div>
                    </div>
                    <div className="col-xl-1"></div>
                    <div className="col-xl-5 tabla">
                        <h5>Regalos Obtenidos</h5>
                        <table className="table table-borderless">
                            <thead>
                                <tr className="headTabla">
                                    <th scope="col">#</th>
                                    <th scope="col">Regalo</th>
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
                    <div className="col-xl-5 tabla2">
                        <h5>Todos los Regalos</h5>
                        <table className="table table-borderless">
                            <thead>
                                <tr className="headTabla">
                                    <th scope="col">#</th>
                                    <th scope="col">Regalo</th>
                                    <th scope="col">Ptos</th>

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
