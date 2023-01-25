import { LocationOn, Phone, WhatsApp } from '@mui/icons-material'
import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SpeedDial from '@mui/material/SpeedDial';


function CallMe() {

  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
      <div className='my-14 flex justify-center'>
      <div className='absolute top-8 font-bold text-lg'>24*7 Suport</div>
        <div className='font-bold xl:text-6xl lg:text-5xl text-4xl '>
          +91 94826 58028
        </div>

      </div>
      <Divider />
      <div >
        <div className="flex justify-evenly my-10 md:my-12 lg:my-14 font-semibold" >
          <a href='https://goo.gl/maps/L7w2VanwCGHMAgwv9' target="_blank" class="no-underline">
            <div className='flex flex-col justify-center items-center text-blue-500 md:scale-125 lg:scale-150'>
              <LocationOn className='' />
              <div>
                Location
              </div>
            </div>
          </a>
          <a href='https://wa.me/message/ASOK2XATB4ENJ1' target="_blank" class="no-underline">
            <div className='flex flex-col justify-center items-center text-green-500 md:scale-125 lg:scale-150'>
              <WhatsApp />
              <div>
                Whatsapp
              </div>
            </div>
          </a>

          <a href='tel:9482658028' target="_blank" class="no-underline">
            <div className='flex flex-col text-black justify-center items-center md:scale-125 lg:scale-150'>
              <Phone />
              <div>
                Contact us
              </div>
            </div>
          </a>
        </div>
      </div>
    </Box >
  );

  return (
    <div>
      <div
        className='fixed bottom-10 right-10 md:right-15 md:bottom-15 z-20 cursor-pointer'>

        <div className=''>
          <Box sx={{ height: 320, flexGrow: 1 }}>
            <SpeedDial
              title='Contact us'
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: 16, right: 16 }}
              icon={<Phone />}
              onClick={toggleDrawer('top', true)}
            >
            </SpeedDial>
          </Box>
        </div>
      </div>

      <SwipeableDrawer
        anchor={'top'}
        open={state['top']}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
        {list('top')}
      </SwipeableDrawer>



    </div>
  )
}

export default CallMe
