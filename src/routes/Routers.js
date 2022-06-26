import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/homepage/App";
import Navbar from "../pages/nav/navbar";
import TodoList from "../pages/todoList/todoList";
import SignUp from "../pages/signUp/signUp"

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/sign-up" element={<SignUp />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
