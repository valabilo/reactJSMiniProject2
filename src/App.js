import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

function App() {
  const nametest = 'Peter';

  const handleNameChanges = () => {
    const names = ['Bob', 'Juan', 'Peter'];
    const int =  Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
