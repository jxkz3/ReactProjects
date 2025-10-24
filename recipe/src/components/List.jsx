function List(props) {
  return (
    <ul className="list-genre">
      {props.best.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
