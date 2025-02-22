import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoreProvider from './redux/store'; // Redux Store Provider
import HomePage from './pages/HomePage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import AddBookPage from './pages/AddBookPage';
import BookDetailsPage from './pages/BookDetailsPage';  // Import Book Details Page
import NotFoundPage from './pages/NotFoundPage'; // Import 404 Page

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BrowseBooksPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          {/* Dynamic route for book details */}
          <Route path="/book-details/:id" element={<BookDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
