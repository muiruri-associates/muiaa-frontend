import React, { useEffect, useState, useContext, useRef } from "react";
import { useDispatch } from 'react-redux';
import classNames from "classnames";
// import ChatSideBar from "./ChatSideBar";
import SimpleBar from "simplebar-react";
import { DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Icon, Button } from "../../../components/Component";
import { currentTime } from "../../../utils/Utils";
import { TicketChatContext } from "./ticketChatContext";
import { MeChat, YouChat } from "./ticketChatPartials";
import { sendMessage } from '../../../redux/actions/ticketActions';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

// todo: ToDO:fix this section of chat body so that it can display the message
TicketChatBody.propTypes = {
  mobileView: PropTypes.any,
  setMobileView: PropTypes.any,
}
const TicketChatBody = ({ mobileView, setMobileView }) => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  const { chatState } = useContext(TicketChatContext);
  const [chat, setChat] = chatState || [];
  const [Uchat, setUchat] = useState({});
  const [sidebar, setsidebar] = useState(false);
  const [inputText, setInputText] = useState("");
  const [chatOptions, setChatOptions] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage (assuming it's stored as JSON)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to check if the user is a lender (customize this logic as per your application)
  // const isLender = user && user.role === "Lender";
  // const isUser = user && user.role === "User";

  console.log("chat>>>>>", chat);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const scrollHeight = messagesEndRef.current.scrollHeight;
      const height = messagesEndRef.current.clientHeight;
      const maxScrollTop = scrollHeight - height;
      messagesEndRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [Uchat]);

  const resizeFunc = () => {
    if (window.innerWidth > 1550) {
      setsidebar(true);
    } else {
      setsidebar(false);
    }
  };

  // useEffect(() => {
  //   if (_id && chat && chat.length > 0) {
  //     const foundChat = chat.find(item => item._id === _id);
  //     console.log('chat foundnd',foundChat);
  //     if (foundChat) {
  //       setUchat(foundChat);
  //     }
  //   }
  // }, [_id, chat]);

  useEffect(() => {
    if (Array.isArray(chat)) {
      chat.forEach((item) => {
        console.log("chat eegf>>", item);
        setUchat(item);
        // if (item._id === _id) {
        //   console.log('id to check wih>>', _id)
        //   setUchat(item);
        // }
      });
    }
  }, [_id, chat]);

  useEffect(() => {
    window.addEventListener("resize", resizeFunc);
    resizeFunc();
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

  // () => {
    setChatOptions(!chatOptions);
  // };

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleMenu = () => {
    setsidebar(!sidebar);
  };

  const onTextSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      const ticketData = {
        message: inputText,
        date: currentTime(),
      };
  
      try {
        // Dispatch the sendMessage action with the necessary data
        await dispatch(sendMessage({ ticketData, ticket_id: _id }));
        // Update the chat state with the new message
      const newMessage = {
        id: `chat_${chat.length + 1}`, // Generate a unique ID for the new message
        sender: user._id,
        message: inputText,
        date: currentTime(),
      };

      setChat([...chat, newMessage]); // Append the new message to the chat array
      setInputText(""); // Clear the input field after sending the message
      } catch (error) {
        console.error('Error sending message:', error);
        // Handle error scenarios here
      }
    }
  };
  

  const onRemoveMessage = (idx, id) => {
    // Find the index of the message to be removed
    const messageIndex = chat.findIndex((item) => item.id === id);
    
    if (messageIndex !== -1) {
      // Make a copy of the chat array
      const updatedChat = [...chat];
      const messageToRemove = updatedChat[messageIndex];
  
      // Remove the message at the found index
      updatedChat.splice(messageIndex, 1);
  
      // Update the chat state with the modified array
      setChat(updatedChat);
  
      // Additional logic based on your requirements after removing the message...
      // For example, you might want to perform further actions or update other state variables.
  
      console.log('Message removed:', messageToRemove);
    }
  };
  
  const TicketchatBodyClass = classNames({
    "nk-chat-body": true,
    "show-chat": mobileView,
    "profile-shown": sidebar && window.innerWidth > 1550,
  });

  return (
    <React.Fragment>
      {Object.keys(Uchat).length > 0 && (
        <div className={TicketchatBodyClass}>
          <div className="nk-chat-head">
            <ul className="nk-chat-head-info">
              <li className="nk-chat-body-close" onClick={() => setMobileView(false)}>
                <a
                  href="#hide-chat"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                  className="btn btn-icon btn-trigger nk-chat-hide ml-n1"
                >
                  <Icon name="arrow-left"></Icon>
                </a>
              </li>
            </ul>
            <ul className="nk-chat-head-tools">
              <li className="d-none d-sm-block">
                <UncontrolledDropdown>
                  <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger text-primary">
                    <Icon name="setting-fill"></Icon>
                  </DropdownToggle>
                </UncontrolledDropdown>
              </li>
              <li className="mr-n1 mr-md-n2">
                <a
                  href="#alert"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu();
                  }}
                  className="btn btn-icon btn-trigger text-primary chat-profile-toggle"
                >
                  <Icon name="alert-circle-fill"></Icon>
                </a>
              </li>
            </ul>
          </div>
          {Array.isArray(chat) && (
          <SimpleBar className="nk-chat-panel" scrollableNodeProps={{ ref: messagesEndRef }}>
            {chat.map((message, idx) => {
              const isMe = message.sender === user._id;

              // Render MeChat for messages sent by the user, and YouChat for others
              return isMe ? (
                <MeChat
                  key={idx}
                  item={message}
                  chat={Uchat} // If needed, adjust the props accordingly
                  onRemoveMessage={onRemoveMessage}
                />
              ) : (
                <YouChat
                  key={idx}
                  item={message}
                  sender={message.sender}
                  // Pass other necessary props to YouChat
                />
              );
            })}
          </SimpleBar>
          )}
          <div className="nk-chat-editor">
            <div className="nk-chat-editor-form">
              <div className="form-control-wrap">
                <textarea
                  className="form-control form-control-simple no-resize"
                  rows="1"
                  id="default-textarea"
                  onChange={(e) => onInputChange(e)}
                  value={inputText}
                  placeholder="Type your message..."
                  onKeyDown={(e) => {
                    e.code === "Enter" && onTextSubmit(e);
                  }}
                ></textarea>
              </div>
            </div>
            <ul className="nk-chat-editor-tools g-2">
              <li>
                <Button color="primary" onClick={(e) => onTextSubmit(e)} className="btn-round btn-icon">
                  <Icon name="send-alt"></Icon>
                </Button>
              </li>
            </ul>
          </div>

          {window.innerWidth < 1550 && sidebar && (
            <div onClick={() => toggleMenu()} className="nk-chat-profile-overlay"></div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default TicketChatBody;
