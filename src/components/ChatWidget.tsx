import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import CloseIcon from '@mui/icons-material/Close'
import { Box, IconButton, Slide } from '@mui/material'
import React, { useState } from 'react'

interface ChatWidgetProps {
  source: string
}

function ChatWidget({ source }: ChatWidgetProps) {
  const [open, setOpen] = useState(false)
  const scale = 0.8 // You can adjust this value as needed

  function handleOpen() {
    return setOpen(!open)
  }

  function getSource() {
    console.log(source)
    // Query our API for current web URL to get the source
    return source
  }

  const iframeStyle = {
    width: `${100 / scale}%`,
    height: `${100 / scale}%`,
    border: 'none',
    transform: `scale(${scale})`,
    transformOrigin: '0 0',
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
      <Slide direction='up' in={open}>
        <Box
          sx={{
            position: 'fixed',
            bottom: 75,
            right: 20,
            width: 350,
            height: 550,
            bgcolor: 'background.paper',
            border: '1px solid #ccc',
            boxShadow: 24,
            borderRadius: '15px',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden', // Changed from 'visible' to 'hidden'
          }}
        >
          <Box
            sx={{
              width: '110%',
              height: '110%',
              overflow: 'hidden',
              marginLeft: '-16px',
              marginTop: '-16px',
              marginBottom: '-20px',
            }}
          >
            <iframe src={getSource()} style={iframeStyle} title='Chat App' />
          </Box>
        </Box>
      </Slide>
    </>
  )
}

export default ChatWidget
