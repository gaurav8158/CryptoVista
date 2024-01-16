import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoudedIcon from '@mui/icons-material/Menu';
import { IconButton, Switch } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}>
            <MenuRoudedIcon className="Link"/>
          </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className="drawer-links">
        <Link to="/"><p className="Link">Home</p></Link>
        <Link to="/compare"><p className="Link">Compare</p></Link>
        <Link href="/watchlist"><p className="Link">Watchlist</p></Link>
        <span className="Link">Theme</span><Switch {...label} defaultChecked />   
      </div>
          </Drawer>
    
        </div>
  );
}
