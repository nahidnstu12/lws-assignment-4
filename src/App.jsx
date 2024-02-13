import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/News";
import NewsProvider from "./context/newsContext";

function App() {
  return (
    <NewsProvider>
      <Header />
      <News />
      <Footer />
    </NewsProvider>
  );
}

export default App;
