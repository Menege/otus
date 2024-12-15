import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskDetails from './pages/TaskDetails';
import TaskForm from './pages/TaskForm';
import UserProfile from './pages/UserProfile';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<TaskForm />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/users/:id" element={<UserProfile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
