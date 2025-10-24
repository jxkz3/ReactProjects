function List(props) {
  const items = ["Chicken", "Oregano", "Tomatoes"];

  const fruits = items.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return <ul>{fruits}</ul>;
}

export default List;
