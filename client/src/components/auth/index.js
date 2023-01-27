import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import {errorHelper, Loader} from '../../utils/tools';

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

import { registerUser, signInUser } from "../../store/actions/users";


const Auth = () => {
    //component logic
    const [register, setRegister] = useState(false);
    let navigate = useNavigate();
    // redux
    const users = useSelector(state => state.users);
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{email:'',password:''},
        validationSchema: Yup.object({
            email: Yup.string()
            .required('Sorry the email is required')
            .email('Please enter a valid email'),
            password:Yup.string()
            .required('Please enter a password.')
        }),
        onSubmit:(values) => {
            handleSubmit(values)
        }   
    })

    const handleSubmit = (values) => {
        // if register true = to register a user , else opposite
        if(register){
            dispatch(registerUser(values))
        } else {
            dispatch(signInUser(values))
        }
    }

    useEffect(()=>{
        const { global } = notifications
        if(notifications && global.success){
            //redirect
            navigate('/dashboard')
        }
    },[notifications])

    
    return(
        <div className="auth_container">
            <h1>Authenticate</h1>
            { users.loading ?
                <Loader/>
            :
            <Box  //box can be many thing e.g: div, form ...
                sx={{
                    '& .MuiTextField-root': { width:'100%', marginTop:'20px' },   // target children
                }}                 
                component="form"
                onSubmit={formik.handleSubmit}  // link to formik
            >
                <TextField
                    name="email"   // make sure name same as above formik validationShcema
                    label="Enter your email "
                    variant="standard"
                    {...formik.getFieldProps('email')}  // is a hook ,tie the value to formik 
                    {...errorHelper(formik, 'email')}
                />

                <TextField
                    name="password"   // make sure name same as above formik validationShcema
                    label="Enter your password "
                    type="password"
                    variant="standard"
                    {...formik.getFieldProps('password')}
                    {...errorHelper(formik, 'password')}
                />

                <div className="mt-2">
                    <Button variant="contained" color="primary" type="submit" size="large">
                        { register ? 'Register' : 'Login' }
                    </Button>

                    <Button 
                        className="mt-3"
                        variant="outlined" 
                        color="secondary" 
                        size="small"
                        onClick={()=> setRegister(!register)}
                        >
                        Want to { !register ? 'Register':'login' }
                    </Button>

                </div>

            </Box>
            }
             
        </div>
    )
}

export default Auth;