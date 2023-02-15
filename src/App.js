import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import data from './component/mock-data.json';
import ReadOnlyRow from "./component/ReadOnlyRow";

function App() {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: ""
  });


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      fullName: addFormData.fullName,
      address: addFormData.address
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

    setAddFormData({
      fullName: '',
      address: ''
    })
  };


  return (
    <div className="app-container">
      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>

      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <>
                <ReadOnlyRow contact={contact} />
              </>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;