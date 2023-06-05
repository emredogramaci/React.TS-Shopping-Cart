import { StoreProd } from "../components/StoreProd";
import storeProds from "../data/products.json";
import { Col, Row } from "react-bootstrap";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeProds.map(item => (
            <Col key={item.id}><StoreProd {...item} /></Col>
        ))}
      </Row>
    </>
  );
}
