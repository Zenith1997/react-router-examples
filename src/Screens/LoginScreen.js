import React from 'react';
import Button from 'react-bootstrap/Button';
import history  from '../Utilities/history';
import {Navigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const LoginScreen=()=>
{
    const navigate = useNavigate();
    return(
        <>
            Login screen
            <Button variant='primary' className='mt-4' onClick={()=>navigate('/dashboard')}>Login</Button>
        </>
    );
}

export default LoginScreen;