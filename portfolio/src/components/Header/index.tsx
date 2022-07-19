import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
    return (
        <Navbar style={{ backgroundColor: 'black', fontFamily: 'Roboto', paddingRight: '46px' }} variant="dark" expand="lg">
            <Container fluid className='ms-3 me-3'>
                <Link to="/"><img className="ps-5" src={Logo} alt="icone" /></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-center flex-grow-1 pe-3"
                        style={{ maxHeight: '240px' }}
                        navbarScroll
                    >
                        <li className="nav-item">
                            <a className="nav-link text-light" style={{ paddingRight: '52px' }} href="/#meu-projeto-titulo">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" style={{ paddingRight: '52px' }} href="/#meu-contato">Contato</a>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;