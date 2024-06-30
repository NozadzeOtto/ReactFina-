import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useLocalStorage from './hooks/useLocalStorage';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/themes';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
