import React, {useState, useEffect} from 'react'
import axios from 'axios' 

function DataFetching() {
    const [title, setTitle]= useState([])

    useEffect(() => {
        axios.get('https://webservices.sinavsepeti.com/api/Announcement', {
                headers: { 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhMTJjMTAxLWNlMmEtNDMxZC04MDVjLTNjYjQ0NjFiNDlkNSIsIm5iZiI6MTY2NzI4OTQwMiwiZXhwIjoxNjY3ODk0MjAyLCJpYXQiOjE2NjcyODk0MDJ9.AR2QPLiyOy5cF-uaLn7uBzjpmw6pbnIby_vQMjLeyNA'}
          }
        )
        .then(res => {
            console.log(res)
            setTitle(res.data)
        })
        .catch(err => [
            console.log(err)
        ])
    })
  return (
    <div>
    <ul>
            {title.map(title => (<li key={title.id}>
                {title.id}
                </li>))
        }
    </ul>
    </div>
  )
}

export default DataFetching