import { useContext, useEffect } from "react";
import PostForm from "../components/PostForm";
import axios from "axios";
import PostCard from "../components/PostCard";
import PostsContext from "../Context/PostsContext";
import DeleteAlert from "../components/DeleteAlert";
import DeleteContext from "../Context/DeleteContext";
import EditContext from "../Context/EditContext";
import EditAlert from "../components/EditAlert";

export default function MainPage() {
  const { data, setData } = useContext(PostsContext);
  const {deleteMode} = useContext(DeleteContext);
  const {editMode} = useContext(EditContext);
  // const [data, setData] = useState(null);
  // const dispatch = useDispatch();

  const fetchData = async () => {
    const result = await axios.get('https://dev.codeleap.co.uk/careers/')
    setData(result.data.results)
    // dispatch()
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {deleteMode && <DeleteAlert />}
      {editMode && <EditAlert />}
      <header>
        <h1>CodeLeap Network</h1>
      </header>
      <PostForm />
      <div
        id='post-section'
      >
        {data && data.map((post) => {
          return <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            username={post.username}
            createdDate={post.created_datetime}
          />
        })}
      </div>
    </div>
  );
}