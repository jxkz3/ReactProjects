function List(props) {
  return (
    <>
      {props.best.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

export default List;
