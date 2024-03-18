import "./App.css";
import { useState, useEffect } from "react";

import Functionality from "./components/SideBar/Functionality/Functionality";
// import LoginMain from "./components/LoginMain/LoginMain";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const [listItems, setListItems] = useState(() => {
    const savedlist = localStorage.getItem("listItems");
    return savedlist
      ? JSON.parse(savedlist)
      : [
          {
            item: "Personal",
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          },
          {
            item: "Work",
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          },
          {
            item: "Work1",
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  const updateListItems = (updatedList) => {
    setListItems(updatedList);
  };

  const [allTasks, setAllTasks] = useState(() => {
    const savedTasks = localStorage.getItem("allTasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: Date.now() + "" + Math.floor(Math.random() * 78),
            goal: "Reserch content ideas",
            description: "good",
            list: "Personal",
            dueDate: "2024-06-28",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
  }, [allTasks]);

  const updateAllTasks = (updatedTasks) => {
    setAllTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Functionality
        allTasks={allTasks}
        updateAllTasks={updateAllTasks}
        listItems={listItems}
        updateListItems={updateListItems}
      />
    </div>
  );
}

export default App;
