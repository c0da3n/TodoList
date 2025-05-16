import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
};

export default App;
