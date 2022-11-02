import React, {useEffect} from "react" ;

export default function App() {
    fetch('https://webservices.sinavsepeti.com/api/Announcement')
.then(response => response.json())
.then(response => console.log(response));
}