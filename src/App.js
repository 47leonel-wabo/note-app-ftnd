import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AddNote from "./components/AddNote";
import NavBar from "./components/NavBar";
import NotesList from "./components/NotesList";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={NotesList} />
          <Route exact path="/add" component={AddNote} />
          <Route path="*" component={NotFound} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
