// Closer....................



function First() {
  let b=20;

  function Second() {
    console.log(b);
  }
  return Second;
}

let a=First();
a();