import { useState } from "react";
import "./App.css";
import PrefetchExample from "./components/PrefetchExample";
import ReduxExample from "./components/ReduxExample";
import UseMutationExample from "./components/UseMutationExample";
import UseQueryExample from "./components/UseQueryExample";

const menuItems = [
  {
    title: "Redux",
    component: <ReduxExample />
  },
  {
    title: "UseQuery",
    component: <UseQueryExample />
  },
  {
    title: "UseMutation",
    component: <UseMutationExample />
  },
  {
    title: "Prefetch",
    component: <PrefetchExample />
  },
];

function App() {
  const [selectedKey, setSelectedKey] = useState(0);

  return (
    <main className="main">
      <div className="sidebar">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            {item.title}
            <button onClick={() => setSelectedKey(index)}>View</button>
          </div>
        ))}
      </div>
      <div className="content">{menuItems[selectedKey].component}</div>
    </main>
  );
}

export default App;
