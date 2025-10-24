import List from "./List.jsx";

function main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  function Submit(event) {
    event.preventDefault();
    console.log("jasik");
    console.log({ ingredients });
    ingredients.push("jack");
  }

  return (
    <main>
      <form className="genre-form" onSubmit={Submit}>
        <input type="text" placeholder="favourite Genre..." name="Gener" />
        <button>Add</button>
      </form>
      <List />
    </main>
  );
}

export default main;
