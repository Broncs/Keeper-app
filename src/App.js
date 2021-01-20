import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import { notes } from "./notes";

function App() {
  return (
    <div className="App">
      <Header />
      <CreateArea />
      <Note notes={notes} />
      <Footer />
    </div>
  );
}

export default App;
