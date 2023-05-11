import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";



function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => {
    setCurrentPage(page); // 클릭된 페이지로 현재 페이지 업데이트
  };
  const RenderPage = () => {
    switch (currentPage) {
      case "Home":
      default:
        return <Home />;
      case "About":
        return <About />;
      case "Work":
        return <Work />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
    }
  };

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
     
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {RenderPage()}
    </div>
  );
}

export default App;
