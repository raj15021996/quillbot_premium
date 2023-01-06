import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import Zoom from '@mui/material/Zoom';


const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    width: 200,
    fontSize: '1.5rem',
    backgroundColor: 'black'
  },
});

export default function InfoTooltips({ title, about }) {
  return (
    <>
      <CustomWidthTooltip
        title={<span>
          <p style={{ color: '#d59603', fontSize: '2rem' }}>{title}</p>
          <p>{about}</p>
        </span>}
        placement='bottom-end'
        TransitionComponent={Zoom}
        arrow
        Interactive
      >
        <IconButton>
          <InfoIcon sx={{
            fontSize: { xs: 12, sm: 15, md: 20 },
            color: 'gray',
            "&:hover": {
              backgroundColor: "transparent",
              color: '#d59603',
              cursor: "default"
            }
          }} />
        </IconButton>
      </CustomWidthTooltip>
    </>
  )
}
