export const Contact = ({id, name, number, onDeleteContact }) => {
  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => {onDeleteContact(id)}}>Delete</button>
    </div>
  );
};
