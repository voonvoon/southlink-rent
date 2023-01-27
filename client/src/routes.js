import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from './store/actions/users';
import { Loader } from './utils/tools';
import { useEffect, useState } from 'react';


import MainLayout from './hoc/mainLayout';
import Header from './components/navigation/header';
import Home from './components/home';
import Auth from './components/auth';
import Listing from './components/listings/listing';
import AccountVerify from './components/auth/verification';
import Contact from './components/dashboard/contact';

import Dashboard from './components/dashboard';
import AdminListings from './components/dashboard/listing';
import AdminProfile from './components/dashboard/profile';
import DashboardMain from './components/dashboard/main';
import AddListing from './components/dashboard/listing/edit_add/add';
import EditListing from './components/dashboard/listing/edit_add/edit';
import OwnerAddLising from '../src/components/dashboard/listing/edit_add/ownerAdd';
import OwnerUpload from './components/dashboard/ownerUpload';

import AuthGuard from './hoc/authGuard';
import PreventSignIn from './hoc/preventSignIn';

const Router = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const users = useSelector(state=> state.users)

    useEffect(()=>{
      dispatch(isAuth())
    },[])

    // auth =  true if hv token ; false if no ; null when app started
    useEffect(()=>{
      if(users.auth !== null){
        setLoading(false)
      }
    },[users])

  return(
    <BrowserRouter>
    { loading ?
      <Loader/>
      :
      <>
      <Header/>
      <MainLayout>
        <Routes>
          <Route path='/dashboard' element={
            <AuthGuard>
              <Dashboard/>
            </AuthGuard>
          }>
             <Route index element={<DashboardMain/>}/> 
             <Route path='profile' element={<AdminProfile/>}/>
             <Route path='listings' element={<AdminListings/>}/>
             <Route path='listings/add' element={<AddListing/>} />
             <Route path='listings/edit/:articleId' element={<EditListing/>} />
             <Route path='owner/listing/add' element={<OwnerAddLising/>}/>   
          </Route>

          {/* <Route path='/dashboard/owner/listing/add' element={<OwnerAddLising/>}/> */}
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/ownerupload' element={<OwnerUpload/>}/>
          <Route path='/verification' element={<AccountVerify/>}/>
          <Route path='/listings/listing/:id' element={<Listing/>} />
          <Route path='/auth' element={
            <PreventSignIn>
          <Auth/>
          </PreventSignIn>
          }/> 
          <Route path='/' element={<Home/>}/> 
        </Routes>
      </MainLayout>
      </>
    }
    </BrowserRouter>
  )
}

export default Router;