import React from 'react'
import { useRouter } from "next/router";
import { Container, Card, CardGroup, Row, Col, Accordion, Button } from 'react-bootstrap'
import Data from '../data.json'
import convertRupiah from 'rupiah-format'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListProduk() {

  const router = useRouter();

  return (
    <Container fluid style={{ marginTop: '5px' }}>
      {Data.produk.filter( title => router.pathname == "/" ? title : router.pathname == "/"+title.title ? title : null ).map((data, i) => {
        return (
          <Accordion defaultActiveKey={0} key={i}>
            <Accordion.Item eventKey={i}>
              <Accordion.Header>{data.title}</Accordion.Header>
              <Accordion.Body>
                <Row xs={1} md={4} className="g-2">
                {data.produk_list.map((produk, idx) => {
                  return(
                      <Col key={idx}>
                        <Card>
                          <Card.Img variant="top" src={produk.img_produk} style={{ height: "250px" }}/>
                          <Card.Body>
                            <Card.Title>{ produk.nama_produk }</Card.Title>
                            <Card.Text>
                              { produk.desc_produk }
                            </Card.Text>
                            <Card.Text>
                              Harga : { convertRupiah.convert(produk.harga_produk) }
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer className="d-grid gap-2">
                            <Button variant="success">Share Produk</Button>
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
