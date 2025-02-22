import React from 'react';
import { useParams, Link } from 'react-router-dom';

const popularBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.', rating: 4.3 },
  { id: 2, title: '1984', author: 'George Orwell', description: 'A dystopian novel about a totalitarian regime that controls everything in society, including thoughts.', rating: 4.6 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A Pulitzer Prize-winning novel about racial injustice and the loss of innocence in the South.', rating: 4.8 },
  { id: 4, title: 'Moby Dick', author: 'Herman Melville', description: 'A sailor’s obsession with hunting the white whale that maimed him.', rating: 4.0 },
  { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A romantic novel that critiques the social hierarchy and the nature of relationships in early 19th century England.', rating: 4.4 },
  { id: 6, title: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'A coming-of-age story about a disenchanted teenager, Holden Caulfield.', rating: 4.2 },
  { id: 7, title: 'War and Peace', author: 'Leo Tolstoy', description: 'A historical novel that interweaves personal and political history against the backdrop of the Napoleonic Wars.', rating: 4.6 },
  { id: 8, title: 'The Odyssey', author: 'Homer', description: 'An epic journey of the hero Odysseus as he struggles to return home after the Trojan War.', rating: 4.5 },
  { id: 9, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', description: 'An epic fantasy adventure about the quest to destroy a powerful artifact to save Middle Earth.', rating: 4.9 },
  { id: 10, title: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'The prequel to The Lord of the Rings, following the journey of Bilbo Baggins.', rating: 4.7 },
  { id: 11, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', description: 'A psychological drama about a young man who commits a crime and the subsequent moral consequences he faces.', rating: 4.5 },
  { id: 12, title: 'Brave New World', author: 'Aldous Huxley', description: 'A futuristic novel about a dystopian society that uses technology to control and pacify its population.', rating: 4.2 },
  { id: 13, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', description: 'A story of vanity, obsession, and the consequences of a self-indulgent life.', rating: 4.4 },
  { id: 14, title: 'Dracula', author: 'Bram Stoker', description: 'A gothic novel about the infamous vampire Count Dracula’s attempt to move from Transylvania to England in order to spread the undead curse.', rating: 4.3 },
  { id: 15, title: 'Frankenstein', author: 'Mary Shelley', description: 'A novel about the consequences of scientific ambition as Victor Frankenstein creates a creature that turns on him.', rating: 4.6 },
  { id: 16, title: 'Les Misérables', author: 'Victor Hugo', description: 'A tale of love, redemption, and social justice set in 19th-century France.', rating: 4.8 },
  { id: 17, title: 'The Grapes of Wrath', author: 'John Steinbeck', description: 'A story of a family’s struggle for survival during the Great Depression as they migrate to California.', rating: 4.5 },
  { id: 18, title: 'The Metamorphosis', author: 'Franz Kafka', description: 'A surreal story about a man who wakes up one morning transformed into an insect, exploring themes of alienation and isolation.', rating: 4.1 },
  { id: 19, title: 'The Stranger', author: 'Albert Camus', description: 'A philosophical novel about a man who seems to live his life with indifference to social conventions and norms.', rating: 4.2 },
  { id: 20, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', description: 'A classic tale of revenge, betrayal, and redemption set in post-Napoleonic France.', rating: 4.7 }
];

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = popularBooks.find((book) => book.id === parseInt(id));

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>by {book.author}</h3>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating} / 5</p>
      <Link to="/books">Back to Browse</Link>
    </div>
  );
};

export default BookDetailsPage;
