const Task = (value) => {
  return <li>{value}</li>;
};

const array = ['jogar', 'comer', 'dormir', 'assistir', 'dormir dnv'];

function App() {
  return (
  <ul>
    {array.map(Task)}
  </ul>
  );
}

export default App;
