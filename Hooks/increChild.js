function Incre(props) {
  return <div>
    <h1>Count After Incrementing 1st Child. {props.counts}</h1>
    <button onClick={() => props.setState(props.counts + 1)}>Increment</button>
  </div>
}

export default Incre;