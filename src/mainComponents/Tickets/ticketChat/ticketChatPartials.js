import React, { useContext } from "react";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, Dropdownticket } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon, UserAvatar } from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";
import { TicketChatContext } from "./ticketChatContext";

export const MeChat = ({ ticket, onRemoveMessage }) => {
  // const { chatState } = useContext(TicketChatContext);
  // const [chat] = chatState;
  return (
    <div className="chat is-me">
      <div className="chat-content">
        <div className="chat-bubbles">
          {ticket.chat?.map((messages, _id) => (
              <div className="chat-bubble" key={_id}>
                {messages === "deleted" ? (
                  <div className="chat-msg border bg-white text-muted">Message has been deleted</div>
                ) : (
                  <React.Fragment>
                    <div className={`chat-msg`}>{messages.message}</div>
                    <ul className="chat-msg-more">
                      <li className="d-none d-sm-block">
                        <a
                          href="#delete"
                          onClick={(ev) => {
                            ev.preventDefault();
                            onRemoveMessage(_id, ticket._id);
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
          ))}
        </div>
        <ul className="chat-meta">
          <li>{messages.sender}</li>
          <li>{messages.sender}</li>
        </ul>
      </div>
    </div>
  );
};

export const YouChat = ({ ticket }) => {
  const { chatState } = useContext(TicketChatContext);
  const [chat] = chatState;
  return (
    <div className="chat is-you">
      
      <div className="chat-content">
        <div className="chat-bubbles">
          {chat.messages?.map((messages, _id) => (
            // console.log('msg>>',msg)
              <div className="chat-bubble" key={_id}>
                <div className="chat-msg">{msg.message}</div>
              </div>
          ))}
        </div>
        <ul className="chat-meta">
          <li>test name</li>
          <li>date</li>
        </ul>
      </div>
    </div>
  );
};

// export const MetaChat = ({ ticket }) => {
//   return (
//     <div className="chat-sap">
//       <div className="chat-sap-meta">
//         <span>{ticket}</span>
//       </div>
//     </div>
//   );
// };

// export const Chatticket = ({ ticket, chatticketClick, setSelectedId, selectedId }) => {
//   const { deleteConvo, propAction } = useContext(TicketChatContext);

//   const checkBeforeDelete = (id) => {
//     deleteConvo(id);
//     if (selectedId === id) {
//       setSelectedId(null);
//     }
//   };

//   return (
//     <li className={`chat-ticket ${ticket.unread ? "is-unread" : ""}`}>
//       <a
//         className="chat-link"
//         href="#chat-link"
//         onClick={(ev) => {
//           ev.preventDefault();
//           chatticketClick(ticket.id);
//         }}
//       >
//         {ticket.group === true ? (
//           <div className="chat-media user-avatar user-avatar-multiple">
//             {ticket.user.slice(0, 2).map((user, _id) => {
//               return (
//                 <UserAvatar
//                   key={_id}
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
//           <UserAvatar theme={ticket.theme} text={findUpper(ticket.name)} image={ticket.image} className="chat-media">
//             <span className={`status dot dot-lg dot-${ticket.active === true ? "success" : "gray"}`}></span>
//           </UserAvatar>
//         )}
//         <div className="chat-info">
//           <div className="chat-from">
//             <div className="name">{ticket.nickname ? ticket.nickname : ticket.name}</div>
//             <span className="time">{ticket.date}</span>
//           </div>
//           <div className="chat-context">
//             <div className="text">
//               <p>{ticket.convo.length !== 0 && ticket.convo[ticket.convo.length - 1].chat.at(-1)}</p>
//             </div>
//             <div className="status delivered">
//               <Icon
//                 name={`${
//                   ticket.delivered === true ? "check-circle-fill" : ticket.delivered === "sent" ? "check-circle" : ""
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
//               <li onClick={() => checkBeforeDelete(ticket.id)}>
//                 <Dropdownticket
//                   tag="a"
//                   href="#delete"
//                   onClick={(ev) => {
//                     ev.preventDefault();
//                   }}
//                 >
//                   Delete
//                 </Dropdownticket>
//               </li>
//               <li onClick={() => propAction(ticket.id, "unread")}>
//                 <Dropdownticket
//                   tag="a"
//                   href="#unread"
//                   className={ticket.unread ? "disabled" : ""}
//                   onClick={(ev) => {
//                     ev.preventDefault();
//                   }}
//                 >
//                   Mark as Unread
//                 </Dropdownticket>
//               </li>
//               <li onClick={() => propAction(ticket.id, "archive")}>
//                 <Dropdownticket
//                   tag="a"
//                   href="#archive"
//                   className={ticket.archive ? "disabled" : ""}
//                   onClick={(ev) => {
//                     ev.preventDefault();
//                   }}
//                 >
//                   Archive Message
//                 </Dropdownticket>
//               </li>
//             </ul>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//       </div>
//     </li>
//   );
// };

// export const Contactticket = ({ ticket, setTab, setSelectedId }) => {
//   return (
//     <ul className="contacts-list">
//       <li>
//         <h6 className="title overline-title-alt">{ticket.contacts.length > 0 && ticket.title}</h6>
//       </li>
//       {ticket.contacts.map((contact, _id) => {
//         return (
//           <li
//             key={_id}
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
