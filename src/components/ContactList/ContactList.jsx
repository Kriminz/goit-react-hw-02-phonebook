import css from './ContactList.module.css'

const ContactList = ({contacts, onDeleteId}) => 
(
  <>

    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className={css.btn}
            type="button"
            onClick={() => onDeleteId(id)}> Delete</button>
        </li>
      ))}
    </ul>
  </>
);

export {ContactList};