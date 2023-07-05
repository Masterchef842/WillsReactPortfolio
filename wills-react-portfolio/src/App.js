import PageHeader from "./components/Header/Header";
import Pagefooter from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Hanalei&family=Maven+Pro:wght@400;500&display=swap"
        rel="stylesheet"
      ></link>
      <PageHeader />
      <div id="content"></div>
      <Pagefooter />
    </div>
  );
}

export default App;
