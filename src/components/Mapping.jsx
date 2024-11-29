function Car(props) {
  return <h1>I am {props.try}</h1>;
}

function Mapping() {
  const array = ["John", "Benimana", "Damascene"];
  return (
    <>
      <h1>I am trying to learn react js</h1>
      <ul>
        {array.map((ek) => (
          <Car try={ek} />
        ))}
      </ul>
      <p>
        How to learn react js in a very short time and without using much
        energies in your journey
      </p>
    </>
  );
}

export default Mapping;
