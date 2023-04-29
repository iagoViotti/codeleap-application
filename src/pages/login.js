import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { saveUsername } from '../redux/actions';


export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch()
  const [enter, setEnter] = useState(true);
  const [username, setUsername] = useState('')

  const handleClick = () => {
    dispatch(saveUsername(username))
    history.push('/main')
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
    if (e.target.value.length > 0) setEnter(false)
    else setEnter(true)
  }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Welcome to Codeleap network!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Please enter your username.</p>
          <Form.Control type="email" placeholder="John Doe" onChange={(e) => handleChange(e)} />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => handleClick()}
            disabled={enter}
          >ENTER</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}