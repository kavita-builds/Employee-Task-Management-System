import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";




function TaskList({data}) {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full rounded-xl flex items-center gap-5 py-5 overflow-x-auto whitespace-nowrap"
    >
{data.tasks.map((elem, index) => {
  if (elem.failed) {
    return <FailedTask key={index} task={elem} data={elem}/>;
  }

  if (elem.completed) {
    return <CompleteTask key={index} task={elem}  data={elem}/>;
  }

  if (elem.newTask) {
    return <NewTask key={index} task={elem} data={elem} />;
  }

  if (elem.active) {
    return <AcceptTask key={index} task={elem}  data={elem}/>;
  }

  return null;
})}

    </div>
  );
}

export default TaskList;
