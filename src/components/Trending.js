import { Card, Container, Row, Col } from "react-bootstrap";
import another from "../assets/images/another.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <div className="text-white mb-3 p-3">
          <h1>Trending Movie</h1>
        </div>
        <Row>
          <Col md={4} id="trending">
            <Card className="bg-dark text-white MovieImage text-center">
              <Card.Img
                src={another}
                alt="Card image"
                className="MovieImageTrending"
              />
              <Card.Title>Another World</Card.Title>
              <Card.Text>This is a wider card with supporting text</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white MovieImage text-center">
              <Card.Img
                src={another}
                alt="Card image"
                className="MovieImageTrending"
              />
              <Card.Title>Another World</Card.Title>
              <Card.Text>This is a wider card with supporting text</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white MovieImage text-center">
              <Card.Img
                src={another}
                alt="Card image"
                className="MovieImageTrending"
              />
              <Card.Title>Another World</Card.Title>
              <Card.Text>This is a wider card with supporting text</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="bg-dark text-white MovieImage text-center">
              <Card.Img
                src={another}
                alt="Card image"
                className="MovieImageTrending"
              />
              <Card.Title>Another World</Card.Title>
              <Card.Text>This is a wider card with supporting text</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white MovieImage text-center">
              <Card.Img
                src={another}
                alt="Card image"
                className="MovieImageTrending"
              />
              <Card.Title>Another World</Card.Title>
              <Card.Text>This is a wider card with supporting text</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white MovieImage text-center">
              <Card.Img
                src={another}
                alt="Card image"
                className="MovieImageTrending"
              />
              <Card.Title>Another World</Card.Title>
              <Card.Text>This is a wider card with supporting text</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Trending;
