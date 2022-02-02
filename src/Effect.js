import Button from "./Button";
import style from "./App.module.css";
import {useState, useEffect} from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :("); //cleanup func
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onShow = () => {
    setShowing((curr) => !curr);
  }

  console.log("i run all the time");
  useEffect(() => console.log("I run only once."), []);
  
  useEffect(() => {
    if(keyword && keyword.length > 5) {
      console.log("I run when 'keyword' changes");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes");
  }, [keyword, counter]);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search here..."
        value={keyword}
        onChange={onChange}
      />
      <h1 className={style.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <Button text={"Continue"} />
      <button onClick={onShow}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello/> : null}
    </div>
  );
}

export default App;
