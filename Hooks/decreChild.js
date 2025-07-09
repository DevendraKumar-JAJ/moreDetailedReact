function Decre(props) {
  return <div>
    <h1>Count After Decrementing 2nd Child {props.counts}</h1>
    <button onClick={() => props.setState(props.counts -1)}>Decrement</button>
  </div>
}

export default Decre;