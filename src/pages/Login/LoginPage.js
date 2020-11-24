import React from 'react'
import './LoginPage.css';
import { Container, Row, Col} from 'react-bootstrap';
import Login from '../../components/Login/login';
import {Link} from 'react-router-dom'

export default function LoginPage() {
    return (
        <div className="body">

        <Row>
          <Col className="AreaLogin" xl={3}>
            <Row>
              <Col xl={1}>
                
              </Col>
              <Col xl={10}>
              <Login/>
              </Col>
  
            </Row>
          </Col>
          <Col className="AreaImagen" xl={9}>
  
          </Col>
        </Row>
  
  
      </div >
    )
}
