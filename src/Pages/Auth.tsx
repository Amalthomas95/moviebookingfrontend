import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { loginApi, registerApi } from '../Service/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User {
    userName: string;
    email: string;
    password: string;
}

function Auth({ register }: { register?: boolean }) {
    const navigate = useNavigate()
    const [user, setUser] = useState<User>({
        userName: "",
        email: "",
        password: ""
    })
    const [unameValid, setUnameValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)

    const setInputs = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        if (name === 'userName') {
            setUnameValid(!value.match(/^[a-zA-z ]+$/))
        }
        if (name === 'email') {
            setEmailValid(!value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
        }
        if (name === 'password') {
            setPasswordValid(!value.match(/^[0-9a-zA-z@]{3,8}$/))
        }
        setUser({ ...user, [name]: value })
    }

    const handleRegister = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const { userName, email, password } = user
        if (!userName || !email || !password) {
            toast.info('please fill data', { position: "top-center", autoClose: 5000 });
            return;
        }

        try {
            const result: any = await registerApi(user)
            if (result.status === 200 && result.data) {
                toast.success(`${result.data.userName} your account created successfully`, { position: "top-center", autoClose: 5000 });
                setUser({ userName: "", email: "", password: "" })
                navigate("/login")
            } else {
                toast.info(result.response.data, { position: "top-center", autoClose: 3000 });
            }
        } catch (error) {
            toast.error('Failed to create account', { position: "top-center", autoClose: 3000 });
        }
    }

    const handleLogin = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const { email, password } = user
        if (!email || !password) {
            toast.info('please fill data', { position: "top-center", autoClose: 5000 });
            return;
        }

        try {
            const result: any = await loginApi(user)
            if (result.status === 200 && result.data) {
                toast.success("login success", { position: "top-center", autoClose: 5000 });
                localStorage.setItem("token", result.data.token)
                localStorage.setItem("currentUser", JSON.stringify(result.data.user))
                localStorage.setItem("currentId", result.data.user._id)
                setUser({ ...user, email: "", password: "" })
                navigate("/Movies")
            } else {
                toast.info(result.response.data, { position: "top-center", autoClose: 3000 });
            }
        } catch (error) {
            toast.error('Failed to login', { position: "top-center", autoClose: 3000 });
        }
    }

    const isRegisterForm = register ? true : false
    return (
        <div>
            <div className='w-50 container bg-light shadow-lg mb-5 mt-5 p-5'>
                <Row>
                    <Col>
                        <Link to={'/'}
                            className='p-3 fs-5' style={{ textDecoration: 'none' }}><i className="fa-solid fa-backward text-danger fa-beat-fade"></i> Back to Home</Link>
                        <br /><br /><br /><br />
                        <img className='w-100'
                            src={isRegisterForm ? "https://venteskraft.net/wp-content/uploads/2022/02/liz-gross-signup.gif" : "https://cdn.dribbble.com/users/14268/screenshots/5583545/unold_icon1_animation_loop_f.gif"} alt="" />
                    </Col>
                    <Col className='p-3'>
                        <h1 className='text-center'>
                            {isRegisterForm ? 'Sign Up' : 'Sign In'}
                        </h1>
                        <div className='mt-5'>
                            {isRegisterForm &&
                                <>
                                    <FloatingLabel controlId="floatingPassword" label="User Name" className='mb-3'>
                                        <Form.Control value={user.userName} onChange={(e) => setInputs(e)} name='userName' type="text" placeholder="User Name" />
                                    </FloatingLabel>
                                    {unameValid && <p className='text-danger'>include letters only </p>}
                                </>
                            }
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control value={user.email} onChange={(e) => setInputs(e)} name='email' type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            {emailValid && <p className='text-danger'>Email is not valid </p>}
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control value={user.password} onChange={(e) => setInputs(e)} name='password' type="password" placeholder="Password" />
                            </FloatingLabel>
                            {passwordValid && <p className='text-danger'>Invalid password </p>}
                            <div className='text-center mt-3'>
                                {isRegisterForm ?
                                    <Button onClick={(e) => handleRegister(e)} className='btn btn-primary rounded-pill px-4 py-2'>Register</Button> :
                                    <Button onClick={(e) => handleLogin(e)} className='btn btn-primary rounded-pill px-4 py-2'>Login</Button>
                                }
                                <div className='mt-3'>
                                    {isRegisterForm ?
                                        <p>Have An Account?
                                            <Link to={'/login'} style={{ textDecoration: 'none' }}>Login Here</Link> </p> :
                                        <p>New User ?
                                            <Link to={'/register'} style={{ textDecoration: 'none' }}>Register Here</Link></p>
                                    }
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Auth
