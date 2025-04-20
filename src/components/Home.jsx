import { Button, Container, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <Container className="col-md-12 welcome-style text-center">
                <h1>Welcome To</h1>
                <h1 className="mb-5">The Records Room</h1>
                <Image src="src\assets\vinyl_record.jpg" className="rounded-circle mb-5 rotating align-middle" />
                <Button variant="outline-danger" className="btn btn-style shadow rounded" size='lg'>SHOP NOW</Button>
            </Container>
        </div>
    )
}
export default Home