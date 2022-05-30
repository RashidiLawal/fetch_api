import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";
import './index.css';

function App() {

const API_URL = 'https://jsonplaceholder.typicode.com/';

const endPoints = ['posts', 'comments', 'users']

const handleUsers = () => {
  const reqUrl = `${API_URL}/${endPoints[``]}`
 
}; 

const handlePosts = () => {

}; 

const handleComments = () => {

}; 

  return (
    <header className="App">
     <Users handleUsers = {handleUsers}/>
     <Posts handlePosts = {handlePosts}/>
     <Comments handleComments = {handleComments}/>
    </header>
  );
}

export default App;
