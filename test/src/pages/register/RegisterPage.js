import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import './LoginPage.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData'
function RegisterPage() {

    const [usernameReg, setUserNameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [idReg, setidReg] = useState('');

    const register = () => {
        Axios.post("http://localhost:9000/register", { id: idReg, username: usernameReg, password: passwordReg, email: emailReg }).then((responce) => {
            console.log(responce);
        }).catch((e) => {
            console.log(e);
        })
    };


    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover":
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="loginPage" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | Login Form</title>
            </Helmet>
            <div className="loginPage-header" style={{ backgroundColor: theme.primary }}>
                <Link to="/">
                    <AiOutlineHome className={classes.home} />
                </Link>
                <h1 style={{ color: theme.secondary }}>Register page</h1>
            </div>
            <div className="loginPage-container">
                <Grid className="loginPage-grid" container direction="row" alignItems="center" justifyContent="center">
                    <div>
                        <label style={{ color: theme.loginColors }}>ID</label>
                        <input id='id'
                            type='text'
                            onChange={(e) => {
                                setidReg(e.target.value);
                            }} />
                        <br />
                        <label style={{ color: theme.loginColors }}>Username</label>
                        <input id='username'
                            type='text'
                            onChange={(e) => {
                                setUserNameReg(e.target.value);
                            }} />
                        <br />
                        <label style={{ color: theme.loginColors }}>Password</label>
                        <input type='password' id='password'
                            onChange={(e) => {
                                setPasswordReg(e.target.value);
                            }}
                        /><br />
                        <label style={{ color: theme.loginColors }}>Email</label>
                        <input type='email' id='email'
                            onChange={(e) => {
                                setEmailReg(e.target.value);
                            }} />
                        <br />
                        <button id='register' onClick={register}>Register</button>
                    </div>
                </Grid>
            </div>
        </div>
    )
}


export default RegisterPage
