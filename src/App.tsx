import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import BootstrapComponent from "./components/BootstrapComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import FetchComponent from "./components/FetchComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ClassComponent title="welcome everybody" />
                <ClassComponent title="here we go again" subtitle="we have another day of TS" />
              </>
            }
          />
          <Route path="/functional/:randomId" element={<FunctionalComponent title="Epicode is awesome" />} />
          <Route path="/bootstrap" element={<BootstrapComponent />} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/fetch" element={<FetchComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
