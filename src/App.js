import './App.css';
import SearchBar from './components/SearchBar/searchBar';
import Post from './components/Post/post';
import Subreddit from './components/Subreddit/subreddit';

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
