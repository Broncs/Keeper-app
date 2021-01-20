import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import { NotesContextProvider } from "./contexts/NoteContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <NotesContextProvider>
      <ThemeContextProvider>
        <Header />
        <div className="App">
          <CreateArea />
          <Note />
          <Footer />
        </div>
      </ThemeContextProvider>
    </NotesContextProvider>
  );
}

export default App;
