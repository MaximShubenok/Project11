import React from 'react';
import {Button, Card} from 'react-bootstrap';

export const CardData = ({data, deleteItem}) => {

  return (
      <Card className={`${data.status}`}>
          <Card.Body>
              <Card.Title>ID - {data.id}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{data.name}</Card.Subtitle>
              <Card.Text>Status - {`${data.status}`}</Card.Text>
              <Button variant="danger" onClick={() => deleteItem(data.id)}>Delete</Button>
          </Card.Body>
      </Card>
  )
};