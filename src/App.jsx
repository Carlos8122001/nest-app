import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/UseContext";
import UseRouting from "./hooks/useRouting";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div>
          <UseRouting />
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;