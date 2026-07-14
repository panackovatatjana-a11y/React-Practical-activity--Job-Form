import Header from "./component/Header";
import Footer from "./component/Footer";

import JobForm  from "./component/JobForm";

import "./App.css";

export function App() {
  return (
    <div className="App">
      <Header/>
      <JobForm/>
      <Footer/>

    </div>
  );
}

export default App;