import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const BrowseBooksPage = () => {
  // Updated data with 20 books
  const booksCollection = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', description: 'A novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.' },
    { id: 2, title: '1984', author: 'George Orwell', category: 'Sci-Fi', description: 'A dystopian novel about a totalitarian regime that controls everything in society, including thoughts.' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Non-Fiction', description: 'A Pulitzer Prize-winning novel about racial injustice and the loss of innocence in the South.' },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', category: 'Fiction', description: 'A sailor’s obsession with hunting the white whale that maimed him.' },
    { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Fiction', description: 'A romantic novel that critiques the social hierarchy and the nature of relationships in early 19th century England.' },
    { id: 6, title: 'The Catcher in the Rye', author: 'J.D. Salinger', category: 'Fiction', description: 'A coming-of-age story about a disenchanted teenager, Holden Caulfield.' },
    { id: 7, title: 'War and Peace', author: 'Leo Tolstoy', category: 'Non-Fiction', description: 'A historical novel that interweaves personal and political history against the backdrop of the Napoleonic Wars.' },
    { id: 8, title: 'The Odyssey', author: 'Homer', category: 'Fiction', description: 'An epic journey of the hero Odysseus as he struggles to return home after the Trojan War.' },
    { id: 9, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', category: 'Fiction', description: 'An epic fantasy adventure about the quest to destroy a powerful artifact to save Middle Earth.' },
    { id: 10, title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fiction', description: 'The prequel to The Lord of the Rings, following the journey of Bilbo Baggins.' },
    { id: 11, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', category: 'Fiction', description: 'A psychological drama about a young man who commits a crime and the subsequent moral consequences he faces.' },
    { id: 12, title: 'Brave New World', author: 'Aldous Huxley', category: 'Sci-Fi', description: 'A futuristic novel about a dystopian society that uses technology to control and pacify its population.' },
    { id: 13, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', category: 'Fiction', description: 'A story of vanity, obsession, and the consequences of a self-indulgent life.' },
    { id: 14, title: 'Dracula', author: 'Bram Stoker', category: 'Horror', description: 'A gothic novel about the infamous vampire Count Dracula’s attempt to move from Transylvania to England in order to spread the undead curse.' },
    { id: 15, title: 'Frankenstein', author: 'Mary Shelley', category: 'Horror', description: 'A novel about the consequences of scientific ambition as Victor Frankenstein creates a creature that turns on him.' },
    { id: 16, title: 'Les Misérables', author: 'Victor Hugo', category: 'Historical Fiction', description: 'A tale of love, redemption, and social justice set in 19th-century France.' },
    { id: 17, title: 'The Grapes of Wrath', author: 'John Steinbeck', category: 'Non-Fiction', description: 'A story of a family’s struggle for survival during the Great Depression as they migrate to California.' },
    { id: 18, title: 'The Metamorphosis', author: 'Franz Kafka', category: 'Fiction', description: 'A surreal story about a man who wakes up one morning transformed into an insect, exploring themes of alienation and isolation.' },
    { id: 19, title: 'The Stranger', author: 'Albert Camus', category: 'Fiction', description: 'A philosophical novel about a man who seems to live his life with indifference to social conventions and norms.' },
    { id: 20, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', category: 'Adventure', description: 'A classic tale of revenge, betrayal, and redemption set in post-Napoleonic France.' }
  ];

  const { category } = useParams(); // To get the category from the URL
  const [filteredBooks, setFilteredBooks] = useState(booksCollection);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter books by category and search term
  useEffect(() => {
    let filtered = booksCollection;

    if (category) {
      filtered = filtered.filter((book) => book.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((book) => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  }, [category, searchTerm]);

  return (
    <div className="p-4">
      <Navbar />

      <h1 className="text-2xl font-bold text-center mb-4">Browse Books</h1>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="px-4 py-2 w-1/2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Books</h2>
        {filteredBooks.length === 0 ? (
          <p className="text-center">No books found</p>
        ) : (
          <ul className="space-y-4">
            {filteredBooks.map((book) => (
              <li key={book.id} className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold">{book.title}</h3>
                <p className="text-gray-600">by {book.author}</p>
                <p className="text-gray-500 mt-2">{book.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <Link to={`/book-details/${book.id}`} className="text-blue-500 hover:underline">View Details</Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default BrowseBooksPage;
