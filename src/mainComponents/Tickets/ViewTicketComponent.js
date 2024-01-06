import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTicketById, sendMessage } from '../../redux/actions/ticketActions';
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
import { Icon, UserAvatar } from "../../components/Component";
import {formatDateTime} from '../../utils/Utils'

const ViewTicketComponent = () => {
  const listRef = useRef(null);
  const { _id } = useParams(); 
  const [newMessage, setNewMessage] = useState('');
  const [key, setKey] = useState(0);

  const messages = useSelector((state) => state.ticket.messages);
  const ticketTitle = useSelector((state) => state.ticket.title); 
  const dispatch = useDispatch();

  console.log('title>>', ticketTitle)
  console.log('Messages>>', messages)

  useEffect(() => {
    // Fetch ticket data when component mounts
    // const _id = '657a5b276e43c6f0574ef25a'; // Replace with the actual ticket ID
    dispatch(getTicketById(_id));
  }, [dispatch, _id, key]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    // Dispatch action to send message to the server
    dispatch(sendMessage({
      ticketData: {
        message: newMessage, // Assuming your ticketData structure includes a 'message' field
        // Other fields in ticketData if required
      },
      ticket_id: _id, // Pass the ticket ID to the action
    }));

    setNewMessage('');
    setKey(prevKey => prevKey + 1);
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
          {/* Display title from Redux state */}
          {ticketTitle && (
            <>
            <div className="nk-msg-head">

            <h4 className="title d-none d-lg-block">Ticket Title: {ticketTitle}</h4>
            </div>
            </>
            )}
            <ListGroup className="chat-list">
              {messages.map((message, index) => (
                <>
                <ListGroupItem
                  key={index}
                  className={message.sender === 'user' ? 'user-message' : 'admin-message'}
                >
                  <div className="nk-reply-item">
              <div className="nk-reply-header">
                <div className="user-card">
                  <UserAvatar size="sm" />
                  <p>{message.sender}</p>
                </div>
                <p className="date-time">{formatDateTime(message.created_at)}</p>
              </div>
              <div className="nk-reply-body">
                <div className="nk-reply-entry entry">
                <span>{message.message}</span>
                </div>
              </div>
            </div>
                </ListGroupItem>
                </>
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
