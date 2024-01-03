import parse from "html-react-parser";
import { UserAvatar } from "../../components/Component";
import { findUpper } from "../../utils/Utils";

export const ReplyItem = ({ item }) => {
  const { sender, title, description, note,  message, _id, created_at} = item;

  console.log('item>>>', item)

  return (
    <div className="nk-reply-item" key={_id}>
      <div className="nk-reply-header">
        <div className="user-card">
          <UserAvatar size="sm" text={findUpper(description)} />
          <div className="user-name">{sender}</div>
        </div>
        <div className="date-time">{created_at}</div>
      </div>
      <div className="nk-reply-body">
        <div className={`nk-reply-entry entry ${note ? "note" : ""}`}>
          {message.map((message, idx) => {
            return <p key={idx}>{message}</p>;
          })}
        </div>
        <div className="nk-reply-from">
          {note ? "Private note" : "Replied"} by <span>{sender}</span> at {createdAt}
        </div>
      </div>
    </div>
  );
};

export const MetaItem = ({ item }) => {
  return <div className="nk-reply-meta">{parse(item)}</div>;
};