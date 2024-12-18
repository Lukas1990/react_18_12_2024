import AddToDo from './AddToDo';
import ListToDo from './ListToDo';

import {useState, useEffect} from 'react'

function ToDoApp(props) {
  const {phrase} = props

  let savedItems = JSON.parse(localStorage.getItem("savedItems"))
  if (savedItems == null) { savedItems = [] }

  const [items, setItems] = useState(savedItems)

  const handleItemSubmit = (item) => {
    setItems([...items, item])
  }

  const handleDeleteItem = (id) => {
    const new_items = items.filter((item, index) => index != id)
    setItems(new_items)
  }

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items))
  }, [items])

  return (
    <div className="kontajner" id="zoznam_uloh">
      <ListToDo items={items} onDeleteItem={handleDeleteItem} phrase={phrase} />
      <AddToDo onItemSubmit={handleItemSubmit} phrase={phrase} />
    </div>
  );
}

export default ToDoApp;
