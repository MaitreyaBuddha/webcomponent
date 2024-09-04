import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import CloseIcon from '@mui/icons-material/Close'
import { Box, IconButton, Slide } from '@mui/material'
import React, { useState } from 'react'
interface ChatWidgetProps {
  source: string
}

function ChatWidget({ source }: ChatWidgetProps) {
  const [open, setOpen] = useState(false)

  function handleOpen() {
    return setOpen(!open)
  }

  function getSource() {
    console.log(source)
    return source
  }

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <IconButton
          size='large'
          onClick={handleOpen}
          sx={{
            backgroundColor: '#0651d2',
            color: 'white',
            '&:hover': {
              backgroundColor: '#1976d2',
            },
          }}
        >
          {open ? <CloseIcon /> : <ChatBubbleIcon />}
        </IconButton>
      </Box>
      <Slide direction='left' in={open}>
        <Box
          sx={{
            position: 'fixed',
            bottom: 70,
            right: 60,
            width: 350,
            height: 500,
            bgcolor: 'background.paper',
            border: '1px solid #ccc',
            boxShadow: 24,
            borderRadius: '15px',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <iframe
            src={getSource()}
            style={{
              width: '110%',
              height: '110%',
              border: 'none',
              margin: '-15px',
            }}
            title='Chat App'
          />
        </Box>
      </Slide>
    </>
  )
}

export default ChatWidget
