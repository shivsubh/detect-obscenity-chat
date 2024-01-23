// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MessageInput from './components/MessageInput';
import Messages from './components/Messages';
import filterObscenities from './api/filterObscenities';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (message) => {
    setLoading(true);
    const filteredMessage = await filterObscenities(message);
    setMessages((prevMessages) => [...prevMessages, { text: filteredMessage }]);
    setLoading(false);
  };

  return (
    <div className="app">
      <Paper elevation={3} className="chat-container">
        <Typography variant="h5" align="center">
          Obscenity Chat Filter
        </Typography>
        <Messages messages={messages} />
        <MessageInput sendMessage={sendMessage} loading={loading} />
      </Paper>
    </div>
  );
};

export default App;
