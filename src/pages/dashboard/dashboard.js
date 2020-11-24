import React from 'react'
import { Row, Col } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './dashboard.css';
import Facturas from '../facturas/facturas';
import Cupones from '../cupones/cupones';
import Referidos from '../referidos/referidos';
import Regalos from '../regalos/regalos';
import Panel from '../../components/dashboard/panel/panel';

export default function dashboard() {
    return (
        <div className="body">
            <Row>
                <Router>
                    <Col className="AreaPanel" xl={3}>
                        <Panel />
                    </Col>
                    <Col className="AreaComponents" xl={9}>
                        <Switch>
                            <Route path="/facturas" exact>
                                <Facturas />
                            </Route>
                            <Route path="/dashboard" exact>

                            </Route>
                            <Route path="/cupones" exact>
                                <Cupones />
                            </Route>
                            <Route path="/referidos" exact>
                                <Referidos />
                            </Route>
                            <Route path="/regalos" exact>
                                <Regalos />
                            </Route>
                        </Switch>
                    </Col>
                </Router>
            </Row>
        </div >
    )
}
