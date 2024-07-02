import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import SzymView from "./pages/AboutUsView"
import ToDoListView from "./pages/ToDoListView"
import CalendarView from "./pages/CalendarView"


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
              <CalendarView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ToDoList"
          element={
            <ProtectedRoute>
              <ToDoListView/>
            </ProtectedRoute>
          }
        />
        <Route path="/login" 
          element={<Login />} />
        <Route path="/logout" 
          element={<Logout />} />
        <Route path="/register" 
          element={<RegisterAndLogout />} />
        <Route path="AboutUsView"
          element={<SzymView/>} />
        <Route path="*"
         element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
