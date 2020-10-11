import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'
export const ExampleForm = ({
  author,
  changeAuthor,
  msg,
  changeMsg,
  onSubmit,
}) => {
  const onChangeAuthor = e => {
    e.preventDefault()
    changeAuthor(e.target.value)
  }

  const onChangeMsg = e => {
    e.preventDefault()
    changeMsg(e.target.value)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Row className="align-items-center">
        <Col xs="auto">
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Author (unique)"
            onChange={onChangeAuthor}
            value={author}
          />
        </Col>
        <Col xs="auto">
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Message"
            onChange={onChangeMsg}
            value={msg}
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Create/update
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default ExampleForm
