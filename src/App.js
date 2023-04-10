import { useState } from "react";
import "./App.css";


function App() {
  let [titles,setTitles] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [likes, setLikes] = useState(0);
  
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {titles.map((title, index) => (
        <div className="list" key={index}>
          <h4>{title}</h4>
          <p>2월 17일 발행</p>
        </div>
      ))}
    <h4> { titles[0] } <span onClick = {()=>likes = likes+1}>👍</span> {likes} </h4>
    </div>
  );
}

export default App;
