import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

const ExampleResults = ({ msgs, deleteMsg }) => {
  return (
    <ListGroup>
      {msgs.map((data, index) => (
        <ListGroup.Item key={index}>
          <p> Author: {data.author} </p>
          <p> Message: {data.data} </p>

          <Button
            variant="danger"
            onClick={() => {
              deleteMsg(data.author)
            }}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default ExampleResults
