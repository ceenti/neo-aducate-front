import React from 'react';
import {Link} from 'react-router-dom'
import SchoolImage from './../../assets/images/Teaching-cuate_1.png'
import studentsImage from './../../assets/images/Subway-cuate.png'
import { Card, Button, CardTitle, CardText, Row, Col, Form, CardImg, CardBody, CardSubtitle } from 'reactstrap';
import SchoolIcon from './../../icons/home.svg'
import Stadistics from './../../assets/images/Dark_analytics-cuate.png'
import Content from './../../assets/images/File-searching-cuate.png'
import Membership from './../../assets/images/Plain-rafiki.svg'

export default function DashboardCard(){
  return (

    <div className="row d-flex justify-content-center">
        <Link to = "/dashboard/statistics" className="card-home col-6 col-md-5 mb-1 rounded">
            <Card className="card-item">
                <CardImg className="" src={Stadistics} alt="Card image cap" />
                <CardBody className= " text-center nowrap">
                <CardSubtitle tag="h6" className="mb-2 text-muted">Estadísticas</CardSubtitle>
                </CardBody>
            </Card>
        </Link>

        <Link to = "/dashboard/memberships" className="card-home col-6 col-md-5 mb-1 rounded">
            <Card className="card-item">
                <CardImg className="w-55" src={Membership} alt="Card image cap" />
                <CardBody className= " text-center nowrap">
                <CardSubtitle tag="h6" className="mb-2 text-muted">Membresía</CardSubtitle>
                </CardBody>
            </Card>
        </Link>

        <Link to = "/dashboard/schools" className="card-home col-6 col-md-5 mb-1 rounded">
            <Card className="card-item">
                <CardImg className="w-55" src={SchoolImage} alt="Card image cap" />
                <CardBody className= " text-center ">
                <CardSubtitle tag="h6" className="mb-2 text-muted">Lista de escuelas</CardSubtitle>
                </CardBody>
            </Card>
        </Link>

        <Link to = "/dashboard/students" className="card-home col-6 col-md-5 mb-1 rounded">
            <Card className="card-item">
                <CardImg className="w-55" src={studentsImage} alt="Card image cap" />
                <CardBody className= " text-center nowrap">
                <CardSubtitle tag="h6" className="mb-2 text-muted">Lista alumnos</CardSubtitle>
                </CardBody>
            </Card>
        </Link>

        {/* <Link to = "/dashboard/schools" className="card-home col-6 col-md-5 mb-1 rounded">
            <Card className="card-item">
                <CardImg className="w-55" src={Content} alt="Card image cap" />
                <CardBody className= " text-center nowrap">
                <CardSubtitle tag="h6" className="mb-2 text-muted">Contenido</CardSubtitle>
                </CardBody>
            </Card>
        </Link> */}

    </div>
  );
};
