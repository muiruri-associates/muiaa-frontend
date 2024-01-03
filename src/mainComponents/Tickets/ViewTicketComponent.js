import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketById } from '../../redux/actions/ticketActions';
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
import { Icon } from "../../components/Component";

const ViewTicketComponent = () => {
  const [newMessage, setNewMessage] = useState('');
  const listRef = useRef(null);
  const userAvatar = 'user_avatar_url'; // Replace with actual user avatar URL
  const adminAvatar = 'admin_avatar_url'; // Replace with actual admin avatar URL

  const messages = useSelector((state) => state.ticket.messages);
  const dispatch = useDispatch();

  console.log('Messages>>', messages)

  useEffect(() => {
    // Fetch ticket data when component mounts
    const ticketId = '657a5b276e43c6f0574ef25a'; // Replace with the actual ticket ID
    dispatch(getTicketById(ticketId));
  }, [dispatch]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    // Dispatch action to send new message to the server if needed

    setNewMessage('');
  };

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Container fluid>
      <Row>
        <Col sm={8} md={12} className="col-12">
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
                    <span>{message.message}</span>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
          <Form onSubmit={handleSubmit} className="p-3">
            <FormGroup className="d-flex">
              <Input
                type="text"
                placeholder="Type a message"
                value={newMessage}
                onChange={handleInputChange}
                className="flex-grow-1 mr-2 border-0 rounded-0"
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
