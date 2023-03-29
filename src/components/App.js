import React from "react";
import Card from "./Card";
import contacts from "../contact.js"

function createCard(contact) {
    return (
        <Card key={contact["id"]}
            id={contact["id"]}
            name={contact["name"]}
            image={contact["imgURL"]}
            phone={contact["phone"]}
            email={contact["email"]} />
    )
}

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(createCard)}
        </div>
    );
}

export default App;