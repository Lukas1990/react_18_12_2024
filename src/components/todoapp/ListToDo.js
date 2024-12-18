
function ListToDo(props) {

  const {items, onDeleteItem, phrase} = props

  function deleteItem(evt) {
    evt.preventDefault()

    onDeleteItem(evt.target.dataset.itemid)
  }

  return (
    <div>
      <h2>{phrase["List of all tasks"]}:</h2>
      <table>
        <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td className={item[1] == true ? "strong" : ""}>{item[0]}</td>
            <td> <a href="#" data-itemid={index} onClick={deleteItem}>{phrase["Delete"]}</a> </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListToDo;
