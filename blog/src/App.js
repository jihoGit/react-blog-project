import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';

  function 함수() {
    return 100
  }

  var 스타일 = { color : 'blue', fontSize : '30px'};

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <h4> { posts } </h4>
      <h4> { 함수() } </h4>
      <img src={ logo }/>
      <div style={ 스타일 }>개발 Blog</div>
    </div>
  );
}

export default App;
