import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { delete_vector, edit_vector } from '../imgs';
import { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import DeleteContext from '../Context/DeleteContext';
import EditOrDeleteContext from '../Context/EditOrDeleteContext';
import EditContext from '../Context/EditContext';

export default function PostCard({ title, content, username, created_datetime, id }) {
  const state = useSelector((state) => state);
  const [timeAgo, setTimeAgo] = useState();
  const {setDeleteMode} = useContext(DeleteContext)
  const {setEditMode} = useContext(EditContext)
  const { setEditOrDelete } = useContext(EditOrDeleteContext)

  const permissionValidator = () => {
    return username === state.user.username;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const date = moment(created_datetime);
      const timeAgo = date.fromNow();
      setTimeAgo(timeAgo);
    }, 10); 

    return () => clearInterval(interval);
  }, []);
  
  const handleDelete = () => {
    setEditOrDelete(content)
    setDeleteMode(true);
  }
  
  const handleEdit = () => {
    setEditOrDelete(content)
    setEditMode(true);
  }

  return (
    <Card
      style={{
        borderRadius: '16px',
        margin: '12px'
      }}
    >
      <Card.Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#7695EC',
          color: '#FFFFFF',
          lineHeight: '40px',
          borderRadius: '16px 16px 0px 0px',
        }} as='h4'>
        {title}
        {
          permissionValidator()
          &&
          <div>

            <label>
              <img
                className='custom-btn'
                src={delete_vector}
                alt='delete-btn'
                style={{
                  marginLeft: '10px',
                  height: '28px',
                  cursor: 'pointer',
                  alignSelf: 'flex-end'
                }}
              />
              <button
                style={{ display: 'none' }}
                onClick={handleDelete}
              >
              </button>
            </label>
            <label>
              <img
                className='custom-btn'
                src={edit_vector}
                alt='delete-btn'
                style={{
                  marginLeft: '10px',
                  height: '28px',
                  cursor: 'pointer',
                  alignSelf: 'flex-end'
                }}
              />
              <button
                style={{ display: 'none' }}
                onClick={handleEdit}
              >
              </button>
            </label>
          </div>
        }
      </Card.Header>
      <Card.Body>
        <h6>{`@${username}`}</h6>
        <h6
          className='time-ago'
        >{timeAgo}</h6>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}