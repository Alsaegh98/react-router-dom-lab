
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = { name, size };
    addBox(newBox);
    navigate('/mailboxes');
  };

  return (
    <div>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Boxholder:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Select a Box Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <button type="submit">Create Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;
