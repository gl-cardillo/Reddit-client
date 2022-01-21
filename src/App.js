import './App.css';
import SearchBar from './components/SearchBar';
import Post from './components/Post';
import Subreddit from './components/Subreddit';



function App() {
  return (
    <div>

      <SearchBar/>
      <div className='Homepage'>
      <Subreddit />
      
      <Post />
      </div>
    </div>
    
  );
}

export default App;
