import "./App.css";
import Card from "./components/card";
function App() {
  let object1 = {
    userName: "Himansu Gami",
    password: "Himansu@21",
  };
  let object2 = {
    userName: "Disha Gami",
    password: "Disha@16",
  };
  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">
        TailwindTest
      </h1>
      <Card
        name="Himanshu Gami"
        myObj={object1}
        arr={myArr}
        btnText="Himanshu"
      />
      <Card myObj={object2} btnText="Dishu" />
    </>
  );
}

export default App;
