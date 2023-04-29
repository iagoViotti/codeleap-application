import { Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import MainPage from './pages/mainPage'
import PostsContext from './Context/PostsContext';
import { useState } from 'react';
import DeleteContext from './Context/DeleteContext';
import EditOrDeleteContext from './Context/EditOrDeleteContext';
import EditContext from './Context/EditContext';

function App() {
  const [data, setData] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);
  const [editOrDelete, setEditOrDelete] = useState('');
  const [editMode, setEditMode] = useState(false);
  
  return (
    <EditContext.Provider value={{ editMode, setEditMode }}>
      <EditOrDeleteContext.Provider value={{ editOrDelete, setEditOrDelete }}>
        <PostsContext.Provider value={{ data, setData }}>
          <DeleteContext.Provider value={{ deleteMode, setDeleteMode }}>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/main' component={MainPage} />
            </Switch>
          </DeleteContext.Provider>
        </PostsContext.Provider>
      </EditOrDeleteContext.Provider>
    </EditContext.Provider>
  );
}

export default App;
