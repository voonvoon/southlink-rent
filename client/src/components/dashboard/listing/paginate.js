import { Table, Pagination } from 'react-bootstrap';
import { Loader } from '../../../utils/tools';
import Moment from 'react-moment';
//import listings from '../../../store/reducers/listings';

const PaginateComponent = ({
    listings,
    goToPrevPage, 
    goToNextPage,
    goToEdit,
    handleStatusChange,
    handleShow
}) => {
    return(
        <>
           { listings && listings.docs ?
           <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Created At</th>
                            <th>Property name</th>
                            <th>Unit</th>
                            <th>Rental</th>
                            <th>Furnishing</th>
                        </tr>
                    </thead>
                    <tbody>
                        { listings.docs.map(item => (
                            <tr key={item._id}>
                                <td><Moment to={item.date}></Moment></td>
                                <td>{item.propName}</td>
                                <td>{item.unitNumber}</td>
                                <td>RM{item.rental}</td>
                                <td>{item.furnishing}</td>
                                <td className='action_btn remove_btn'
                                    onClick={()=> handleShow(item._id)}
                                >
                                    Remove
                                </td>

                                <td className='action_btn edit_btn'
                                    onClick={()=>goToEdit(item._id)}
                                >
                                    Edit
                                </td>
                                <td className='action_btn status_btn '
                                    onClick={()=> handleStatusChange(item.status, item._id)}
                                >
                                    {item.status}
                                </td>
                            </tr>
                        )) }
                    </tbody>

                </Table>
                <Pagination>
                    { listings.hasPrevPage ?
                        <>
                            <Pagination.Prev
                                onClick={()=> goToPrevPage(listings.prevPage)}
                            />
                            <Pagination.Item
                                 onClick={()=> goToPrevPage(listings.prevPage)}
                            >
                                {listings.prevPage}
                            </Pagination.Item>
                        </>
                    :null
                    }
                    <Pagination.Item active>{listings.page}</Pagination.Item>
                    { listings.hasNextPage ? 
                        <>
                            <Pagination.Item
                                 onClick={()=> goToNextPage(listings.nextPage)}
                            >
                                {listings.nextPage}
                            </Pagination.Item>
                            <Pagination.Next 
                                onClick={()=> goToNextPage(listings.nextPage)}
                            />
                        </>
                    :null

                    }

                </Pagination>
           </>
            :
            <Loader/>
            }
        </>
    )
}

export default PaginateComponent;