import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import PostsContext from '../Context/PostsContext';
import EditContext from '../Context/EditContext';
import { Form, Modal } from 'react-bootstrap';
import EditOrDeleteContext from '../Context/EditOrDeleteContext';

export default function EditAlert() {
  const { setEditMode } = useContext(EditContext)
  const { data, setData } = useContext(PostsContext);
  const {editOrDelete} = useContext(EditOrDeleteContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  
  const handleEdit = () => {
    const editingArr = data.find((post) => post.content === editOrDelete);
    const filteredArr = data.filter((post) => post.content !== editOrDelete);
    const newArr = {
      title,
      content,
      id: editingArr.id,
      username: editingArr.username,
      created_datetime: editingArr.created_datetime,
    };
    const newData = [newArr ,...filteredArr]
    setData(newData);
    setEditMode(false);
  }

  return (
    <div
      id='edit-alert-div'
    >

      <Modal.Dialog
        style={{
          width: '700px',
          height: '340px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          zIndex: '9',
          padding: '24px',
          borderRadius: '16px',
        }}>
        <h4>Edit item</h4>
        <Form.Group controlId="exampleForm.ControlInput1"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        >
          <Form.Label>
            Title
          </Form.Label>
          <Form.Control type="email" placeholder="Hello world" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
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
        <div
          style={{
            borderRadius: '16px',
            textAlign: 'end',
            marginTop: '20px',
          }}
        >
          <Button
            style={{
              width: '120px',
              marginRight: '10px',
            }}
            variant="outline-secondary"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </Button>
          <Button
            style={{
              width: '120px',
            }}
            variant="success"
            onClick={handleEdit}
          >
            Save
          </Button>
        </div>
      </Modal.Dialog>
    </div>
  );
}
