
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
         <h2> Mailbox List</h2>
      {mailboxes.map((mailbox) => (
        <div key={mailbox.id} className="mailbox">
          <Link to={`/mailboxes/${mailbox.id}`}>Mailbox {mailbox.id}</Link>
        </div>
      ))}
    </div>
  );
};

export default MailboxList;
