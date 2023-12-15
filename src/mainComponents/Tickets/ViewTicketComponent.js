import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import {Icon, UserAvatar} from "../../components/Component"
import './style.css'; // Import your CSS file


const ViewTicketComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const listRef = useRef(null);

  const userAvatar = 'user_avatar_url'; // Replace with actual user avatar URL
  const adminAvatar = 'admin_avatar_url'; // Replace with actual admin avatar URL

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
    setMessages(updatedMessages);
    setNewMessage('');
    // Here you can send the message to your backend or perform other necessary actions
  };

  // Update list height when new messages are added
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Container fluid>
      <Row>
        <Col sm={8} md={12} className="col-12">
          {/* Chat Header */}
          <div className="sticky-top bg-white">
            <div className="p-3 border-bottom">
              <div className="d-flex align-items-center">
                <img src={userAvatar} alt="User Avatar" className="avatar mr-2" />
                <h5 className="mb-0">username</h5>
              </div>
            </div>
          </div>
          {/* Chat Body */}
          <div className="chat-window p-3" style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }} ref={listRef}>
            <ListGroup className="chat-list">
              {messages.map((message, index) => (
                <ListGroupItem
                  key={index}
                  className={message.sender === 'user' ? 'user-message' : 'admin-message'}
                >
                  <div className="message-with-avatar">
                    {message.sender === 'user' ? (
                      <img src={userAvatar} alt="User Avatar" className="avatar" />
                    ) : (
                      <img src={adminAvatar} alt="Admin Avatar" className="avatar" />
                    )}
                    <span>{message.text}</span>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
          {/* Message Input */}
          <Form onSubmit={handleSubmit} className="p-3">
          <FormGroup className="d-flex">
            <Input
              type="text"
              placeholder="Type a message"
              value={newMessage}
              onChange={handleInputChange}
              className="flex-grow-1 mr-2 border-0 rounded-0" // Adjust classes for border and rounding
            />
            <button type="submit" className="btn btn-primary rounded-0">
              <Icon name="send-alt" />
            </button>
          </FormGroup>
        </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewTicketComponent;
