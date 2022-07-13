import Btn from "./components/Btn.jsx";

const math = [
  { id:"AC",
    title:"AC"},
    { id:"+-",
    title:"+/-"},
    { id:"%",
    title:"%"},
    { id:"7",
    title:"7"},
    { id:"8",
    title:"8"},
    { id:"9",
    title:"9"},
    { id:"4",
    title:"4"},
    { id:"5",
    title:"5"},
    { id:"6",
    title:"6"},
    { id:"1",
    title:"1"},
    { id:"2",
    title:"2"},
    { id:"3",
    title:"3"},
    { id:"0",
    title:"0"},
    { id:".",
    title:"."},
];

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <p>0</p>
        <Btn math={math} />
      </div>
    </div>
  );
}

export default App;
