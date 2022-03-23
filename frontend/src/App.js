import "./App.css";
import Header from "./component/Header";
import NotesListPage from "./Pages/NotesListPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NotePage from "./Pages/NotePage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={NotesListPage} />
          <Route path="/note/:id" component={NotePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
