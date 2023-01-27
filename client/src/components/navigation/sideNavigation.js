import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';  // use alias cuz Link will conflic with mui Link

import Box from '@mui/material/Box';  // must bring the name at the end.
import Drawer from '@mui/material/Drawer'; 
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DehazeIcon from '@mui/icons-material/Dehaze';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';

const SideDrawer = ({users, signOutUser}) => {
    const [state, setState] = useState(false);

    return(
        <>
            <DehazeIcon className='drawer_btn' onClick={()=>setState(true)}/>

            <Drawer anchor={"top"} open={state} onClose={()=> setState(false)}> 
                <Box sx={{ height:300 }} className='list-item-drawbar'>
                    <List >
                        <ListItem
                            button
                            component={RouterLink}
                            to="/"
                            onClick={()=> setState(false)}
                        >
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>

                        <ListItem
                            button
                            component={RouterLink}
                            to="/contact"
                            onClick={()=> setState(false)}
                        >
                            <ListItemIcon>
                                <MailIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Contact Us"/>
                        </ListItem>

                        <ListItem
                            button
                            component={RouterLink}
                            to="/ownerupload"
                            onClick={()=> setState(false)}
                        >
                            <ListItemIcon>
                                <BusinessIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Owner upload property"/>
                        </ListItem>


                        {  !users.auth ?
                            <ListItem
                            button
                            component={RouterLink}
                            to="/auth"
                            onClick={()=> setState(false)}
                        >
                            <ListItemIcon>
                                <VpnKeyIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Sign in"/>
                        </ListItem>
                        :
                        <ListItem
                            button
                            onClick={()=> {
                                signOutUser()
                                setState(false)}}
                        >
                            <ListItemIcon>
                                <VpnKeyOffIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Sign out"/>
                        </ListItem>
                        }
                        <>
                            <Divider/>
                            { users.auth ? 
                                <ListItem
                                button
                                component={RouterLink}
                                to="/dashboard"
                                onClick={()=> setState(false)}
                            >
                                <ListItemIcon>
                                    <DashboardIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Dashboard"/>
                            </ListItem>
                            : null
                             }
                           
                        </>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default SideDrawer;
