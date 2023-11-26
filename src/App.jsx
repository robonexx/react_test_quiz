import './App.scss';
import Header from './components/Header/Header';
import Quiz from './components/quiz/Quiz';

function App() {
  return (
    <div className='App'>
      <Header title='Code Quiz' />
      <h1>Quiz Game</h1>
      <Quiz />
    </div>
  );
}

export default App;
