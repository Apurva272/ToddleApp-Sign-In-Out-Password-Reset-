
import React, {useRef, useState} from 'react'
import {Form, Button,Alert, Card, FormGroup} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {BrowserRouter as Router,Link} from "react-router-dom"

export default function ForgotPassword() {
    const emailRef = useRef()
    
    
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message,setMessage]=useState('')
    const [loading,setLoading] = useState(false)
    
    async function handleSubmit(e){
        e.preventDefault()
        
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your mail inbox')
            
        }catch{
            setError('Failed to reset')

        }
        setLoading(false)
    }
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-3">Reset Password</h2>
                
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref ={emailRef} required />
                    </Form.Group>
                    
                   
                    <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                </Form>
                <div className="w-100 text-center mt-2">
                    <Link to="/login">Log In</Link>
                </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            New to Apurva's App? <Link to="/signup">Sign Up</Link>
        </div>
            
        </>
    )
}
