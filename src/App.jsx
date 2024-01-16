import Button from "./components/ui/Button/Button";

function App() {
  return <div>
    <p>STG site</p>
    <Button>Button dark</Button>
    <Button className={"border-red-400"} type="submit" theme='light'>Button light</Button>
  </div>;
}

export default App;
