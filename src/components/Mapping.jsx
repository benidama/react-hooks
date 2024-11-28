function Car(props) {
  return <h1>I am {props.try}</h1>;
}

function Mapping() {
  const array = ["John", "Benimana", "Damascene"];
  return (
    <>
      <ul>
        {array.map((ek) => (
          <Car try={ek} />
        ))}
      </ul>
    </>
  );
}

export default Mapping;
