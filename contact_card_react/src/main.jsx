
  import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Contacts from "./App.jsx"; 
import Header from "./Header.jsx";
import contact from "./contact.js";

function createContacts(contact) {
  return (
    <Contacts
      key={contact.id}
      name={contact.name}
      tel={contact.tel}
      rel={contact.rel}
      img={contact.img}
    />
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <div className="card-section">
      {contact.map(createContacts)}
    </div>
  </StrictMode>
);
