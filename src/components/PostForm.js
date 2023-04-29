import { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import PostsContext from '../Context/PostsContext';

export default function PostForm() {
  const state = useSelector((state) => state)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { data, setData } = useContext(PostsContext)

  const handleCreate = () => {
    const { user: { username } } = state;
    const id = Math.floor(Math.random() * 8888);
    const created_datetime = new Date().toISOString();
    const newData = [ {title, content, username, created_datetime, id}, ...data]
    setData(newData)
    setContent('');
  }

  return (
    <div
      id='form-section'
    >
      <Modal.Dialog>
        <h2>What's on your mind?</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          >
          <Form.Label>
            Title
          </Form.Label>
          <Form.Control type="email" placeholder="Hello world" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            Content
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Content Here"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </Form.Group>
        <Button
          style={{
            width: '120px',
            position: 'relative',
            alignSelf: 'flex-end',
            backgroundColor: '#7695EC',
            border: '1px solid #7695EC',
            borderRadius:'8px',
          }}
          onClick={handleCreate}
        >Create
        </Button>
      </Modal.Dialog>
    </div>
  );
}
