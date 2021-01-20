import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import { NotesContextProvider } from "./contexts/NoteContext";

function App() {
  return (
    <NotesContextProvider>
      <Header />
      <div className="App">
        <CreateArea />
        <Note />
        <Footer />
      </div>
    </NotesContextProvider>
  );
}

export default App;
