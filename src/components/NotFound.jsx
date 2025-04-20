import { Container, Row, Col, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink } from "react-router-dom";
import styles from './NotFound.module.css';

function NotFound() {

    return (
        <div>
            <Container>
                <Row>
                    <Image className={styles.img} src="https://as2.ftcdn.net/v2/jpg/01/55/59/47/1000_F_155594729_QxakT4UpwM7hL4lvOWjXnQVevxzhhOky.jpg" thumbnail fluid />
                    <Col md className={styles.content}>
                    <h1 className="mb-3 fw-bold"><strong>404 - Not Found</strong></h1>
                    <p>Uhh Ohh! You are at the end of the sheet music!</p>
                    <p className="fs-4">
                        Start your song over at the <NavLink to='/'>homepage</NavLink>
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default NotFound