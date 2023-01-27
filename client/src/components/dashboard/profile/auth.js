import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';

import EmailStepper from './stepper/email';



const AuthProfile = () => {
    const[emailModal, setEmailModal] = useState(false)
    const users = useSelector(state=>state.users);

    const closeModal = () => setEmailModal(false)
    const openModal = () => setEmailModal(true)


    return(
      <div className='mb-3 auth_grid'>
        <Grid container spacing={1} alignItems='flex-end'>
            <Grid item>
                <TextField 
                    value={users.data.email}
                    disabled
                    variant='standard'
                />
            </Grid>
            <Grid item>
                <EditIcon color="primary" onClick={openModal}/>
            </Grid>
        </Grid>

        <Grid container spacing={1} alignItems='flex-end' className='mt-4'>
            <Grid item>
                <TextField 
                    value="********"
                    disabled
                    variant='standard'
                />
            </Grid>
            <Grid item>
                <EditIcon color="primary"/>
            </Grid>
        </Grid>

            <Modal size="lg" centered show={emailModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update your email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EmailStepper
                        user={users}
                        closeModal={closeModal}
                    />
                </Modal.Body>
            </Modal>
      </div>
    )
}

export default AuthProfile;