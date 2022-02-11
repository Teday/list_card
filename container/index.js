import React, { useState } from 'react'
import { useRouter } from "next/router";
import { Container, Card, Modal, Row, Col, Accordion, Button, FormControl, Alert } from 'react-bootstrap'
import Data from '../data.json'
import convertRupiah from 'rupiah-format'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListProduk() {

  const [openModal, setOpenModal] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [NoWa, setNoWa] = useState(null);
  const [produk, setProduk] = useState(null);

  const router = useRouter();

  const handleClose = () => {
    setNoWa(null)
    setOpenModal(false)
    setShowNotif(false)
  };

  const handleShow = (produk) => {
    setProduk(produk)
    setOpenModal(true)
    setShowNotif(false)
  };

  const shareProduk = () => {
    if(NoWa == null){
      setShowNotif(true)
    }else{
      const phoneNumber = NoWa.toString();
      const phone_number = `+62${phoneNumber.substring(
        phoneNumber.indexOf("8")
      )}`;
      window.open(`https://wa.me/${phone_number}?text=Produk%20%3A%20${produk.nama_produk}%7F%0ADescription%20%3A%20${produk.desc_produk}%7F%0AHarga%20%3A%20${convertRupiah.convert(produk.harga_produk)}`)
    }
  }

  return (
    <Container fluid style={{ marginTop: '5px' }}>
      <Modal show={openModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>No wa tujuan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { showNotif ?  
            <Alert variant="danger">
              No wa harus di isi
            </Alert> : null
          }
          <FormControl type="number" placeholder="08123456789" onChange={ (e) => setNoWa(e.target.value) }/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="primary" onClick={shareProduk}>
            Share Produk
          </Button>
        </Modal.Footer>
      </Modal>
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
                            <Button variant="success" onClick={ () => handleShow(produk) }>Share Produk</Button>
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
