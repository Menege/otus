import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TaskDetails from './pages/TaskDetails';
import TaskForm from './pages/TaskForm';
import UserProfile from './pages/UserProfile';
import TagManagement from './pages/TagManagement';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/edit/:id" element={<TaskForm />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/tags" element={<TagManagement />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
