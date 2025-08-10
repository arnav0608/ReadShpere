import books from "../data/books";
import BookCard from "../components/BookCard";

export default function Home() {
  return (
    <div>
      <h1>Library Books</h1>
      <div className="book-grid">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
}