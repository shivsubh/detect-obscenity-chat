// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
const MessageInput = ({ sendMessage, loading }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '' && !loading) {
      sendMessage(message);
      setMessage('');
    }
  };


  const onChange = (e) => setMessage(e.target.value);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setMessage(e.target.value);
      handleSendMessage();
    }
  }

  return (
    <div className='message-input'>
      <TextField
        fullWidth
        variant="outlined"
        label="Type your message..."
        value={message}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Button disabled={loading || message.trim() === ''} variant="contained" color="primary" onClick={handleSendMessage} className='send-btn'>
        Send
      </Button>
    </div>
  );
};

export default MessageInput;