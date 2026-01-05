import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { employees, setEmployees } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!assignTo || !taskTitle) return alert("Please fill task and assign to employee!");

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: true,
      failed: false,
      completed: false,
    };

    const updatedEmployees = employees.map((emp) => {
      if (emp.firstName === assignTo) {
        const updatedTasks = [...(emp.tasks || []), newTask];
        return {
          ...emp,
          tasks: updatedTasks,
          taskNumbers: {
            newTask: (emp.taskNumbers?.newTask || 0) + 1,
            active: (emp.taskNumbers?.active || 0) + 1,
            completed: emp.taskNumbers?.completed || 0,
            failed: emp.taskNumbers?.failed || 0,
          },
        };
      }
      return emp;
    });

    setEmployees(updatedEmployees);

    // Reset form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div>
          <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
            type="text"
            placeholder="Make a UI design"
          />
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-1">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
            type="date"
          />
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
          <input
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
            type="text"
            placeholder="Employee name"
          />
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-1">Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
            type="text"
            placeholder="design, dev, etc"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full h-48 text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-400"
              placeholder="Write task description..."
            />
          </div>

          <button className="bg-emerald-500 py-3 px-5 rounded text-sm hover:bg-emerald-600 mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
