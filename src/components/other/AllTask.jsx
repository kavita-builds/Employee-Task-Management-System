import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { employees } = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-1 h-48 rounded">
      <div className="bg-red-400 py-2 px-4 flex rounded mb-2 justify-between">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto">
        {employees.map((emp, idx) => (
          <div key={idx} className="bg-green-500 py-2 px-4 flex rounded mb-2 justify-between">
            <h2 className="w-1/5 text-white">{emp.firstName}</h2>
            <h3 className="w-1/5">{emp.taskNumbers?.newTask || 0}</h3>
            <h5 className="w-1/5">{emp.taskNumbers?.active || 0}</h5>
            <h5 className="w-1/5">{emp.taskNumbers?.completed || 0}</h5>
            <h5 className="w-1/5">{emp.taskNumbers?.failed || 0}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
