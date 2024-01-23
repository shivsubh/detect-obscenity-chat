/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Typography } from '@mui/material'

const Messages = ({ messages }) => {
    return (
        <Box className="chat-messages">
            {messages.map((msg, index) => (
                <Typography key={index} className='chatbot-message'>
                    {msg.text}
                </Typography>
            ))}
        </Box>
    )
}

export default Messages