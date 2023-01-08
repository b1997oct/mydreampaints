import { GpsFixed, LocationCity, LocationCitySharp, LocationOn, Phone, WhatsApp } from '@mui/icons-material'
import React from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

function CallMe() {

  const actions = [
    { icon: <LocationOn />, name: 'Location' },
    { icon: <WhatsApp />, name: 'Whatsapp' },
    { icon: <Phone />, name: 'Contact us' },
  ];


  return (
    <div
      className='fixed bottom-10 right-10 md:right-15 md:bottom-15 z-20 cursor-pointer'>
      {/* <div className='bg-sky-300 rounded-full w-20 h-20 grid place-content-center'>
        <a href='tel:+919482658028' class='no-underline'>
          <div
            className='bg-gray-200 rounded-full w-[4.5rem] h-[4.5rem]'>
            <div className='flex flex-col items-center mt-[12%] text-green-600'>
              <Phone />
              Call Now
            </div>
          </div>
        </a>
      </div> */}

      <div className='md:flex hidden'>
        <Box sx={{ height: 320, flexGrow: 1 }}>
          <SpeedDial
            title='Contact us'
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<Phone />}

          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={action.act}
              />
            ))}
          </SpeedDial>
        </Box>
      </div>
    </div>
  )
}

export default CallMe
