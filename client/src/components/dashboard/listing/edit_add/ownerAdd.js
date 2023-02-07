//lib
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

// comp tool
import { AdminTitle } from '../../../../utils/tools';
import { errorHelper, Loader } from '../../../../utils/tools';
import { validation, formValues } from './validationSchema';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { addListing } from '../../../../store/actions/listings';

//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import InputLabel from '@mui/material/InputLabel';
//import { visuallyHidden } from '@mui/utils';

//comp
import PicUpload from './upload';
import PicViewer from './picViewer';

const OwnerAddLising = () => {
    //redux
    const listings = useSelector(state=>state.listings);
    const user = useSelector(state=>state.users);
    const dispatch = useDispatch();

    let navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: formValues,
        validationSchema:validation,
        onSubmit:(values)=>{
            dispatch(addListing(values))
            .unwrap()
            .then(()=>{
                navigate('/dashboard')
            })
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

    //console.log(formik.values);
    return(
        
        <>
            <AdminTitle title="Owner add Listing"/>
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

                <Divider className='mt-3 mb-3'/>

                { listings.loading ?
                    <Loader/>
                :
                <Button 
                    variant='contained'
                    color='primary'
                    type="submit"
                >
                    Add listing
                </Button>
                }
                
            </form>
        </>
    )
}

export default OwnerAddLising;