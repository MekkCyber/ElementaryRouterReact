import Dogs from "./components/Dogs";
import Header from './components/Header'
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import DogItem from './components/DogItem'
function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path='/*' exact element={<Dogs/>}/>
      <Route path='/:name'exact element={<DogItem/>}/>
    </Routes>
    </div>
  );
}

export default App;
