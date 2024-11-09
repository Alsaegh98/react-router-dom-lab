

import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((box) => box.id === parseInt(mailboxId));

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box Number: {mailbox.id}</p>
      <p>BoxH: {mailbox.name}</p>
      <p>Size: {mailbox.size}</p>
    </div>
  );
};

export default MailboxDetails;
