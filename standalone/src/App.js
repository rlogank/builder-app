import { PreviewProvider } from "./context/PreviewContext";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <PreviewProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </PreviewProvider>
  );
}

export default App;
