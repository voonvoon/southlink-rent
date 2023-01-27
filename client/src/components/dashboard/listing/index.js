import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminTitle } from '../../../utils/tools';
import PaginateComponent from './paginate';

import { useDispatch, useSelector } from 'react-redux';
import{ getPaginateListings,changeStatusListing, removeListing } from '../../../store/actions/listings';


import {
    Modal,
    Button,
    ButtonToolbar,
    ButtonGroup,
    InputGroup,
    FormControl
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AdminListings = () => {
    const listings = useSelector(state => state.listings);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [removeAlert, setRemoveAlert] = useState(false);
    //a middleman rmb which id to remove
    const[toRemove, setToRemove] = useState(null);

    const handleClose = () => setRemoveAlert(false);
    const handleShow = (id=null) => {
        //get id to rm
        setToRemove(id)
        //open modal
        setRemoveAlert(true);

    }
    

    ///Start pagination commands
    const goToPrevPage = (page) => {
        dispatch(getPaginateListings({page}))
    }

    const goToNextPage = (page) => {
        dispatch(getPaginateListings({page}))
    }

    const goToEdit = (id) => {
        navigate(`/dashboard/listings/edit/${id}`)
    }

    const handleStatusChange = (status, _id) => {
        let newStatus = status === 'pending' ? 'approved':'pending'; // will swab it.
        dispatch(changeStatusListing({newStatus , _id}));  // pass object X jz pass standalone value
    }

    const handleDelete = () => {
        dispatch(removeListing(toRemove))
        .unwrap()
        .finally(()=>{
            setRemoveAlert(false);
            setToRemove(null);
        })
    }

    ///End pagination commands
    useEffect(()=>{
        dispatch(getPaginateListings({}));  // need pass empty object{} so it will works .
    },[])


    return(
        <>
            <AdminTitle title="Listings"/>
            <div className='articles_table'>
                <ButtonToolbar className='mb-3'>
                    <ButtonGroup className='me-2'>
                        <LinkContainer to="/dashboard/listings/add">
                            <Button variant='secondary'>Add Listing</Button>
                        </LinkContainer>
                    </ButtonGroup>
                    <form>
                        <InputGroup>
                                <InputGroup.Text id="whatever">@</InputGroup.Text>
                                <FormControl 
                                    type='text'
                                    placeholder='Search'
                                />
                        </InputGroup>
                    </form>

                </ButtonToolbar>

                <>
                    <PaginateComponent 
                        listings={listings.adminListings}
                        goToPrevPage={(page)=> goToPrevPage(page)}
                        goToNextPage={(page)=> goToNextPage(page)}
                        goToEdit={(id)=> goToEdit(id)}
                        handleStatusChange={(status,id)=>handleStatusChange(status,id)}
                        handleShow={ (id) => handleShow(id)}
                    />
                </>

                <Modal show={removeAlert} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you really sure you want permanantly delete it?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        There is no going back once you confirm!
                    </Modal.Body>
                    <Modal.Footer>
                            <Button variant='secondary' onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant='danger' onClick={()=>handleDelete()}>
                                Delete 
                            </Button>
                    </Modal.Footer>
                </Modal>


            </div>
        </>
    )
}

export default AdminListings;