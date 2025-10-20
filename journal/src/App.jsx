import Header from "./Components/Header";
import Entry from "./Components/Entry";
import journalData from "./journalData";

function App() {
  const journalEntry = journalData.map((item) => {
    return (
      <Entry
        item={item}
      />
    );
  });

  return (
    <>
      <Header />
      {journalEntry}
    </>
  );
}

export default App;
