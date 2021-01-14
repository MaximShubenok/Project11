import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardData} from "./CardData";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './styles.css'

export const App = () => {

  const [cards, setCards] = useState([
      {
          id: 0,
          name: 'One',
          status: Math.random() < 0.5
      },
      {
          id: 1,
          name: 'Two',
          status: Math.random() < 0.5
      },
      {
          id: 2,
          name: 'Three',
          status: Math.random() < 0.5
      },
      {
          id: 3,
          name: 'Four',
          status: Math.random() < 0.5
      },
      {
          id: 4,
          name: 'Five',
          status: Math.random() < 0.5
      },
      {
          id: 5,
          name: 'Six',
          status: Math.random() < 0.5
      },
      {
          id: 6,
          name: 'Seven',
          status: Math.random() < 0.5
      },
      {
          id: 7,
          name: 'Eight',
          status: Math.random() < 0.5
      },
      {
          id: 8,
          name: 'Nine',
          status: Math.random() < 0.5
      },
      {
          id: 9,
          name: 'Ten',
          status: Math.random() < 0.5
      },
  ]);

  const [name, setName] = useState('');

  const addCardHandler = () => {
      setCards(prevState => [...prevState, {id: prevState.length !== 0 ? prevState[prevState.length - 1].id + 1 : 0, name: name, status: Math.random() < 0.5}]);
      setName('')
  };

  const deleteHandler = (id) => {
      const filtered = cards.filter(item => item.id !== id);

      setCards(filtered)
  };

  return (
      <div>
          <Container>

              <h1>Lab 11 Max Shubenok</h1>

              <Form>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Name of card</Form.Label>
                      <Form.Control type="text" placeholder="Name of card" value={name} onChange={e => setName(e.target.value)} />
                  </Form.Group>
                  {name === '' ?
                      <Button variant="primary" disabled>
                          Add card
                      </Button> :
                      <Button variant="primary" onClick={addCardHandler}>
                          Add card
                      </Button>
                  }
              </Form>

              <Row>
                  {cards.map((card, index) => {
                      return (
                          <Col sm={12} md={6} lg={3} xl={3}>
                              <CardData
                                  key={index}
                                  data={card}
                                  deleteItem={deleteHandler}
                              />
                          </Col>
                      )
                  })}
              </Row>
          </Container>
      </div>
  )
};