import List from "./List.jsx";

function Main() {
  const genre = ["action", "sc-fi", "Fantasy"];

  function Submit(event) {
    event.preventDefault();
  }

  return (
    <main>
      <form className="genre-form" onSubmit={Submit}>
        <input type="text" placeholder="favourite Genre..." name="Gener" />
        <button>Add</button>
      </form>
      <List best={genre} />
    </main>
  );
}

export default Main;
