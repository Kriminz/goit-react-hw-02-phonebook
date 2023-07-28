const ContactList = ({contacts, onDeleteId}) => 
(
  <>

    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => onDeleteId(id)}> Delete</button>
        </li>
      ))}
    </ul>
  </>
);

export {ContactList};