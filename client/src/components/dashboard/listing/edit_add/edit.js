//lib
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';

// comp tool
import { AdminTitle } from '../../../../utils/tools';
import { errorHelper, Loader } from '../../../../utils/tools';
import { validation, formValues } from './validationSchema';

//redux
import { useDispatch, useSelector } from 'react-redux';
//import { addListing } from '../../../../store/actions/listings';

//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import InputLabel from '@mui/material/InputLabel';
import AddIcon from '@mui/icons-material/Add';
//import { visuallyHidden } from '@mui/utils';

//comp
import PicUpload from './upload';
import PicViewer from './picViewer';
import { getAdminListing, updateListing } from '../../../../store/actions/listings';

const EditListing = () => {
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState(formValues)
    //redux

    const dispatch = useDispatch();

    const { articleId } = useParams();  // the destructure name must same with route one.

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: formData,
        validationSchema:validation,
        onSubmit:(values)=>{
           dispatch(updateListing({values, articleId}))
        }

    })

    const handlePicValue = (pic) => {
        const picArray = formik.values.images;  // mk copy of existing pic in this listing.
        picArray.push(pic.url);
        formik.setFieldValue('images',picArray)
    }

    const deletePic = (index) => {
        const picArray = formik.values.images; 
        picArray.splice(index,1);
        formik.setFieldValue('images',picArray);
    }

    //edit
    useEffect(()=>{
        dispatch(getAdminListing(articleId))
        .unwrap()
        .then(response => {
            setLoading(false);
            setFormData(response);
        })
    },[articleId])


    //edit

    return(
        <>
            <AdminTitle title="Edit Listing"/>
            { loading ?
                <Loader/>
             :
             <>                 
            <PicViewer 
                formik={formik}
                deletePic={(index)=> deletePic(index)}
            />
            <PicUpload 
                picValue={(pic)=> handlePicValue(pic)}
            />
            <Divider className='mt-3 mb-3'/>
            <form className='mt-3 article_form' onSubmit={formik.handleSubmit}>

                <div className='form-group'>
                    <TextField 
                        style={{ width:'100%' }}
                        name="propName"
                        label="Enter your property name"
                        variant='outlined'
                        {...formik.getFieldProps('propName')}
                        {...errorHelper(formik,'propName')}
                    />

                </div>

                <div className='mt-3'>
                    <FormControl fullWidth>
                        <InputLabel>Select a type of property</InputLabel>
                        <Select
                            name="typeOfProp"
                            label="Select a type of property"
                            {...formik.getFieldProps('typeOfProp')}
                            error={ formik.errors.typeOfProp && formik.touched.statypeOfProptus ? true:false }
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="Condo"><em>Condo</em></MenuItem>
                            <MenuItem value="Landed"><em>Landed</em></MenuItem>
                            <MenuItem value="Apartment"><em>Apartment</em></MenuItem>
                        </Select>
                        {
                            formik.errors.typeOfProp && formik.touched.typeOfProp ?
                                <FormHelperText error={true}>
                                    { formik.errors.typeOfProp }
                                </FormHelperText>
                            :null
                        }

                    </FormControl>
                </div>

                <div className='form-group'>
                    <TextField 
                        style={{ width:'100%' }}
                        name="size"
                        label="Enter your size(Sq ft)"
                        variant='outlined'
                        {...formik.getFieldProps('size')}
                        {...errorHelper(formik,'size')}
                    />
                    
                </div>

                <div className='form-group'>
                    <TextField 
                        style={{ width:'100%' }}
                        name="description"
                        label="Enter your description"
                        variant='outlined'
                        {...formik.getFieldProps('description')}
                        {...errorHelper(formik,'description')}
                        multiline
                        rows={10}
                    />

                </div>

                <div className='form-group'>
                    <TextField 
                        style={{ width:'100%' }}
                        name="floor"
                        label="Enter which floor"
                        variant='outlined'
                        {...formik.getFieldProps('floor')}
                        {...errorHelper(formik,'floor')}
                    />

                </div>

                <div className='form-group'>
                    <TextField 
                        style={{ width:'100%' }}
                        name="unitNumber"
                        label="Enter unit number"
                        variant='outlined'
                        {...formik.getFieldProps('unitNumber')}
                        {...errorHelper(formik,'unitNumber')}
                    />

                </div>

                <div className='form-group'>
                    <TextField 
                        style={{ width:'100%' }}
                        name="rental"
                        label="Enter rental amount(MYR)"
                        variant='outlined'
                        {...formik.getFieldProps('rental')}
                        {...errorHelper(formik,'rental')}
                    />

                </div>

                <div className='form-group'>
                    <TextField 
                        style={{ width:'100%' }}
                        name="numberBedRooms"
                        label="Enter number of rooms"
                        variant='outlined'
                        {...formik.getFieldProps('numberBedRooms')}
                        {...errorHelper(formik,'numberBedRooms')}
                    />

                </div>

                <div className='form-group'>
                    <TextField 
                        style={{ width:'100%' }}
                        name="phoneNumber"
                        label="Enter phone number"
                        variant='outlined'
                        {...formik.getFieldProps('phoneNumber')}
                        {...errorHelper(formik,'phoneNumber')}
                    />
                

                </div>

                <div className='mt-3'>
                    <FormControl fullWidth>
                        <InputLabel>Select a furnishing status</InputLabel>
                        <Select
                            name="furnishing"
                            label="Select a furnishing status"
                            {...formik.getFieldProps('furnishing')}
                            error={ formik.errors.furnishing && formik.touched.furnishing ? true:false }
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="none-furnished"><em>none-furnished</em></MenuItem>
                            <MenuItem value="partially-furnished"><em>partially-furnished</em></MenuItem>
                            <MenuItem value="fully-furnished"><em>fully-furnished</em></MenuItem>
                        </Select>
                        {
                            formik.errors.furnishing && formik.touched.furnishing ?
                                <FormHelperText error={true}>
                                    { formik.errors.furnishing }
                                </FormHelperText>
                            :null
                        }

                    </FormControl>
                </div>


                <div className='mt-3'>
                    <FormControl fullWidth>
                        <InputLabel>Select a Status</InputLabel>
                        <Select
                            name="status"
                            label="Select a status"
                            {...formik.getFieldProps('status')}
                            error={ formik.errors.status && formik.touched.status ? true:false }
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="pending"><em>Pending</em></MenuItem>
                            <MenuItem value="approved"><em>Approve</em></MenuItem>
                        </Select>
                        {
                            formik.errors.status && formik.touched.status ?
                                <FormHelperText error={true}>
                                    { formik.errors.status }
                                </FormHelperText>
                            :null
                        }

                    </FormControl>
                </div>

                <Divider className='mt-3 mb-3'/>

                <Button 
                    variant='contained'
                    color='primary'
                    type="submit"
                >
                    Edit listing
                </Button>

                
            </form>
        </>
        }
        </>
    )
}

export default EditListing;