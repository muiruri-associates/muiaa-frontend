import React from "react";
import { Icon } from "../../../components/Component";
import PropTypes from "prop-types";

MeChat.propTypes = {
  item: PropTypes.any,
  onRemoveMessage: PropTypes.any,
};
export const MeChat = ({ item, onRemoveMessage }) => {
  const { message, date, sender } = item; // Access the message content and date from the item

  return (
    <div className="chat is-me">
      <div className="chat-content">
        <div className="chat-bubbles">
          <div className="chat-bubble">
            {message === "deleted" ? (
              <div className="chat-msg border bg-white text-muted">
                Message has been deleted
              </div>
            ) : (
              <React.Fragment>
                <div className="chat-msg">{message}</div>
                <ul className="chat-msg-more">
                  <li className="d-none d-sm-block">
                    <a
                      href="#delete"
                      onClick={(ev) => {
                        ev.preventDefault();
                        onRemoveMessage(item.id); // Pass the message ID to remove
                      }}
                      className="btn btn-icon btn-sm btn-trigger"
                    >
                      <Icon name="trash-fill"></Icon>
                    </a>
                  </li>
                </ul>
              </React.Fragment>
            )}
          </div>
          <ul className="chat-meta">
            <li>
              {/* Show the sender here */}
              {sender}
            </li>
            <li>{date}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const YouChat = ({ item }) => {
  if (!item || typeof item !== "object" || !item.message) {
    // Handle the case when item or item.message is undefined
    return (
      <div className="chat is-you">
        <div className="chat-content">
          <div className="chat-bubbles">
            <div className="chat-bubble">
              <div className="chat-msg">Invalid message</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Assuming item.message contains the actual message content
  const { message, created_at, sender } = item;

  return (
    <div className="chat is-you">
      <div className="chat-content">
        <div className="chat-bubbles">
          <div className="chat-bubble">
            <div className="chat-msg">{message}</div>
          </div>
        </div>
        <ul className="chat-meta">
          <li>{sender}</li>
          <li>{created_at}</li>
        </ul>
      </div>
    </div>
  );
};

YouChat.propTypes = {
  item: PropTypes.shape({
    created_at: PropTypes.any,
    message: PropTypes.any,
    sender: PropTypes.any,
  }),
};

// export const MetaChat = ({ item }) => {
//   return (
//     <div className="chat-sap">
//       <div className="chat-sap-meta">
//         <span>{item}</span>
//       </div>
//     </div>
//   );
// };

// export const ChatItem = ({ item, chatItemClick, setSelectedId, selectedId }) => {
//   const { deleteConvo, propAction } = useContext(TicketChatContext);

//   const checkBeforeDelete = (id) => {
//     deleteConvo(id);
//     if (selectedId === id) {
//       setSelectedId(null);
//     }
//   };

//   return (
//     <li className={`chat-item ${item.unread ? "is-unread" : ""}`}>
//       <a
//         className="chat-link"
//         href="#chat-link"
//         onClick={(ev) => {
//           ev.preventDefault();
//           chatItemClick(item.id);
//         }}
//       >
//         {item.group === true ? (
//           <div className="chat-media user-avatar user-avatar-multiple">
//             {item.user.slice(0, 2).map((user, idx) => {
//               return (
//                 <UserAvatar
//                   key={idx}
//                   theme={user.theme}
//                   text={findUpper(user.name)}
//                   image={user.image}
//                   className="chat-media"
//                 ></UserAvatar>
//               );
//             })}
//             <span className={"status dot dot-lg dot-success"}></span>
//           </div>
//         ) : (
//           <UserAvatar theme={item.theme} text={findUpper(item.name)} image={item.image} className="chat-media">
//             <span className={`status dot dot-lg dot-${item.active === true ? "success" : "gray"}`}></span>
//           </UserAvatar>
//         )}
//         <div className="chat-info">
//           <div className="chat-from">
//             <div className="name">{item.nickname ? item.nickname : item.name}</div>
//             <span className="time">{item.date}</span>
//           </div>
//           <div className="chat-context">
//             <div className="text">
//               <p>{item.convo.length !== 0 && item.convo[item.convo.length - 1].chat.at(-1)}</p>
//             </div>
//             <div className="status delivered">
//               <Icon
//                 name={`${
//                   item.delivered === true ? "check-circle-fill" : item.delivered === "sent" ? "check-circle" : ""
//                 }`}
//               ></Icon>
//             </div>
//           </div>
//         </div>
//       </a>
//       <div className="chat-actions">
//         <UncontrolledDropdown>
//           <DropdownToggle tag="a" className="btn btn-icon btn-sm btn-trigger dropdown-toggle">
//             <Icon name="more-h"></Icon>
//           </DropdownToggle>
//           <DropdownMenu right>
//             <ul className="link-list-opt no-bdr">
//               <li onClick={() => checkBeforeDelete(item.id)}>
//                 <DropdownItem
//                   tag="a"
//                   href="#delete"
//                   onClick={(ev) => {
//                     ev.preventDefault();
//                   }}
//                 >
//                   Delete
//                 </DropdownItem>
//               </li>
//               <li onClick={() => propAction(item.id, "unread")}>
//                 <DropdownItem
//                   tag="a"
//                   href="#unread"
//                   className={item.unread ? "disabled" : ""}
//                   onClick={(ev) => {
//                     ev.preventDefault();
//                   }}
//                 >
//                   Mark as Unread
//                 </DropdownItem>
//               </li>
//               <li onClick={() => propAction(item.id, "archive")}>
//                 <DropdownItem
//                   tag="a"
//                   href="#archive"
//                   className={item.archive ? "disabled" : ""}
//                   onClick={(ev) => {
//                     ev.preventDefault();
//                   }}
//                 >
//                   Archive Message
//                 </DropdownItem>
//               </li>
//             </ul>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//       </div>
//     </li>
//   );
// };

// export const ContactItem = ({ item, setTab, setSelectedId }) => {
//   return (
//     <ul className="contacts-list">
//       <li>
//         <h6 className="title overline-title-alt">{item.contacts.length > 0 && item.title}</h6>
//       </li>
//       {item.contacts.map((contact, idx) => {
//         return (
//           <li
//             key={idx}
//             onClick={() => {
//               setTab("Chats");
//               setSelectedId(contact.id);
//             }}
//           >
//             <div className="user-card">
//               <a href="#card" onClick={(ev) => ev.preventDefault()}>
//                 <UserAvatar text={findUpper(contact.name)} theme={contact.theme} image={contact.image}></UserAvatar>
//                 <div className="user-name">{contact.name}</div>
//               </a>
//               <div className="user-actions">
//                 <Link to={`${process.env.PUBLIC_URL}/app-chat`}>Start Chat</Link>
//               </div>
//             </div>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
