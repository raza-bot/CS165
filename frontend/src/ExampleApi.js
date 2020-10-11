import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ExampleForm from './ExampleForm'
import ExampleResults from './ExampleResults'

export const Example = () => {
  const [msgList, changeMsgList] = useState([])
  const [author, changeAuthor] = useState('')
  const [msg, changeMsg] = useState('')
  const getMsgs = () => {
    axios
      .post('/api/example')
      .then(data => {
        changeMsgList(data.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const deleteMsg = author => {
    changeMsgList(prev => prev.filter(entry => entry.author !== author))
    axios.post('/api/example/remove', { author: author }).catch(e => {
      console.log(e)
    })
  }

  const addMsg = e => {
    e.preventDefault()
    const data = {
      author,
      data: msg,
    }
    let found = false
    changeMsgList(prev => {
      prev.forEach(entry => {
        if (entry.author === author) {
          found = true
          entry.data = msg
        }
      })
      if (found) return [...prev]
      return [...prev, data]
    })

    axios.put('/api/example', data)
  }
  useEffect(getMsgs, [])

  return (
    <div>
      <hr/>
      <h3> Example app: </h3>
      <ExampleForm
        onSubmit={addMsg}
        {...{ author, changeAuthor, msg, changeMsg }}
      />
      <ExampleResults msgs={msgList} deleteMsg={deleteMsg} />
    </div>
  )
}

export default Example
