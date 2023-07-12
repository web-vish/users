import './App.scss';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <header>
          <h1>Users</h1>
        </header>
        <sections>
          <UserList/>
        </sections>
      </div>
    </div>
  );
}

export default App;