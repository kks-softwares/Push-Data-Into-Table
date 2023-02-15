import React from "react";

const ReadOnlyRow = ({ contact }) => {
  return (
    <>
      <tr>
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
      </tr>
    </>
  );
};

export default ReadOnlyRow;
