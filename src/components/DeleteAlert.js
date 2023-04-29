import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeleteContext from '../Context/DeleteContext';
import EditOrDeleteContext from '../Context/EditOrDeleteContext';
import PostsContext from '../Context/PostsContext';

export default function DeleteAlert() {
  const { setDeleteMode } = useContext(DeleteContext)
  const { data, setData } = useContext(PostsContext);
  const { editOrDelete } = useContext(EditOrDeleteContext)

  const handleDelete = () => {
    const newData = data.filter((post) => post.content !== editOrDelete);
    setData(newData)
    setDeleteMode(false)
  }

  return (
    <div
      id='delete-alert-div'
    >
      <Card
        style={{
          width: '680px',
          height: '150px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          zIndex: '9'
        }}
      >
        <Card.Body>
          <Card.Title>
            Are you sure you want to delete this item?
          </Card.Title>
          <div
            style={{
              position: 'absolute',
              padding: '24px',
              bottom: 0,
              right: 0,
              borderRadius: '16px',
            }}
          >
            <Button
              style={{
                width: '120px',
                marginRight: '10px',
              }}
              variant="outline-secondary"
              onClick={() => setDeleteMode(false)}
            >
              Cancel
            </Button>
            <Button
              style={{
                width: '120px',
              }}
              variant="danger"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
