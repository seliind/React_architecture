import {useState, useEffect} from 'react'

import List from './List'
import Form from './Form'
import "./style.css"

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: 'Cemre',
            phone_number: '123456'
        },{
            fullname: 'Selin',
            phone_number: '456789'
        },{
            fullname: 'Merlin',
            phone_number:'987321'
        },{
            fullname: 'Arwen',
            phone_number:'654123'
        },
    ]);

    useEffect(() => {
        console.log(Contacts);
    }, [Contacts]);



  return (
    <div id="container">
        <h1>Directory</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={Contacts} />
    </div>
  )
}

export default Contacts 