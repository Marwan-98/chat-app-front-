import { Navbar, Container } from "react-bootstrap";

function AppNav({text}: {text: string}) {
    return (
        <Navbar style={{ backgroundColor: "#F8F5F5" }} fixed="top">
            <Container>
                <h1>{text}</h1>
            </Container>
        </Navbar>
    );
}

export default AppNav