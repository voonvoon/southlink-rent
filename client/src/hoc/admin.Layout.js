import { Link as RouterLink } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemText
} from '@mui/material';  // tis is not recommand way import from mui
import { useSelector } from 'react-redux';

const AdminLayout = (props) => {
    const users = useSelector( state => state.users)

    return(
        <div className='main_container'>
            <div className='adminLayout'>
                <nav className=' col-sm-7 col-md-3 col-lg-2 d-md-block sidebar ownstyle'>
                    <div>
                        <List>
                            <ListItem button component={RouterLink} to="/dashboard/profile">
                                <ListItemText primary="Profile"/>
                            </ListItem>

                            {users.data.role === 'admin' ?
                            <>
                                <ListItem button component={RouterLink} to="/dashboard/listings">
                                    <ListItemText primary="Listings"/>
                                </ListItem>
                            </>
                            :
                            null
                            }

                            {users.data.role === 'user' && users.data.verified ?
                            <>
                                <ListItem button component={RouterLink} to="/dashboard/owner/listing/add">
                                    <ListItemText primary="Owner upload listing"/>
                                </ListItem>
                            </>
                            :
                            null
                            }
                     
                        </List>
                    </div>
                </nav>
                <main role="main" className='col-sm-auto col-md-9 col-lg-10 pt-3 px-4'>
                    {props.children}
                </main>
            </div>

        </div>
    )
}

export default AdminLayout;