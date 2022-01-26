import React from 'react'
import { Container, Card, CardGroup, Row, Col, Accordion } from 'react-bootstrap'
import Data from '../data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  return (
    <Container fluid style={{ marginTop: '5px' }}>
      {Data.produk.map((data, i) => {
        return (
          <Accordion defaultActiveKey={i} key={i}>
            <Accordion.Item eventKey={i}>
              <Accordion.Header>{data.title}</Accordion.Header>
              <Accordion.Body>
                <Row xs={1} md={4} className="g-2">
                {data.produk_list.map((produk, idx) => {
                  return(
                      <Col key={idx}>
                        <Card>
                          <Card.Img variant="top" src={produk.img_produk} />
                          <Card.Body>
                            <Card.Title>{ produk.nama_produk }</Card.Title>
                            <Card.Text>
                              { produk.desc_produk }
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">Harga : { produk.harga_produk }</small>
                          </Card.Footer>
                        </Card>
                      </Col>
                  )
                })}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )
      })
      }
    </Container>
  )
}
