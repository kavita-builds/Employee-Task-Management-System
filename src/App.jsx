import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/admindashboard'
import { AuthContext } from "./context/AuthProvider.jsx"

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const { employees = [] } = useContext(AuthContext)

  // 🔥 RESTORE LOGIN ON REFRESH
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser")

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)

      setUser(parsedUser.role)

      if (parsedUser.role === "employee") {
        setLoggedInUserData(parsedUser.data)
      }
    }
  }, [])

  const handelLogin = (email, password) => {
    // ADMIN LOGIN
    if (email === "admin@example.com" && password === "123") {
      setUser("admin")
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      )
      return
    }

    // EMPLOYEE LOGIN
    const employee = employees.find(
      (e) =>
        e.email.toLowerCase() === email.toLowerCase() &&
        e.password === password
    )

    if (employee) {
      setUser("employee")
      setLoggedInUserData(employee)

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employee
        })
      )
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <>
      {!user && <Login handelLogin={handelLogin} />}

      {user === 'admin' && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === 'employee' && (
        <EmployeeDashboard
          data={loggedInUserData}
          changeUser={setUser}
        />
      )}
    </>
  )
}

export default App
