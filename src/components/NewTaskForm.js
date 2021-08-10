import React, {useState}from "react";

function NewTaskForm(props) {
  const [listOfCategories,setListofCategories]=useState("Code")
  const [inputState,setInputState]=useState("")


  function categoryOptions(e){
    e.preventDefault();
    setInputState(e.target.value);
  }

  function selectChange(e) {
    setListofCategories(e.target.value);
  }
  const optionsCategory = props.categories.filter((cat)=> cat !== "All").map((cat)=> {
    return <option key={cat}>{cat}</option>
  })
  return (
    <form className="new-task-form" onSubmit={(e)=> {
      e.preventDefault();
      const newTask = {
        text: inputState,
        category: listOfCategories
      };
      props.onTaskFormSubmit(newTask);
      setListofCategories("Code")
      setInputState("")}}>
      <label>
        Details
        <input type="text" name="text" onChange={categoryOptions}value={inputState}/>
      </label>
      <label>
        Category
        <select name="category" onChange={selectChange} value={listOfCategories}>
          {optionsCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
