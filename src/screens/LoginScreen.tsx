import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FormContainer } from '../components/FormContainer/FormContainer';
import Loader from '../components/Loader/Loader';
import { Message } from '../components/Message/Message';
import { Link, useHistory } from 'react-router-dom';
import { RootState } from '../redux/store';
import { login } from '../redux/User/userActions';

const LoginScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch()
    const history = useHistory();
    const userLogin = useSelector((state: RootState) => state.userLogin)
    const {loading, error, userInfo} = userLogin

    const submitHandle = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(login(email,password))
    }

    useEffect(()=>{
        if(userInfo != null){
            history.push('/')
        }
    },[history, userInfo]);

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandle}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" required placeholder="Enter Email" value={email} onChange={e=> setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required placeholder="Enter Password" value={password} onChange={e=> setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">Sign In</Button>
            </Form>
            <Row className="py-3" >
                <Col>
                    Don't have an account? <Link to={`/register`}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen
