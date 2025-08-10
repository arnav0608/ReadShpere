export default function AddBook() {
  return (
    <div className="form-container">
      <h1>Add a New Book</h1>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <textarea placeholder="Description"></textarea>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}