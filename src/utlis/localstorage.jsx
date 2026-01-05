const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      total: 1,
      active: 2,
      newTask: 3,
      completed: 4,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Create UI Layout",
        taskDescription: "Design homepage hero section",
        taskDate: "2025-01-10",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix responsive issues",
        taskDescription: "Navbar not aligned on mobile view",
        taskDate: "2025-01-12",
        category: "frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Submit wireframe",
        taskDescription: "Wireframe for login page",
        taskDate: "2025-01-05",
        category: "design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstName: "riya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 5,
      newTask: 6,
      completed: 7,
      failed: 8
    },
    tasks: [
      {
        taskTitle: "Backend API setup",
        taskDescription: "Create user authentication API",
        taskDate: "2025-01-08",
        category: "backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Database schema",
        taskDescription: "Design employee task schema",
        taskDate: "2025-01-09",
        category: "database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Fix login bug",
        taskDescription: "Incorrect password validation",
        taskDate: "2025-01-11",
        category: "bugfix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Optimize APIs",
        taskDescription: "Improve response time for tasks API",
        taskDate: "2025-01-13",
        category: "backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstName: "Karan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      total: 9,
      active: 10,
      newTask: 11,
      completed: 12,
      failed: 13
    },
    tasks: [
      {
        taskTitle: "Design icons",
        taskDescription: "Make 5 icons for dashboard",
        taskDate: "2025-01-14",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Color palette",
        taskDescription: "Choose 3 theme color palettes",
        taskDate: "2025-01-04",
        category: "design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Fix SVG bug",
        taskDescription: "SVG not scaling properly",
        taskDate: "2025-01-06",
        category: "frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      total: 14,
      active: 15,
      newTask: 16,
      completed: 17,
      failed: 18
    },
    tasks: [
      {
        taskTitle: "Write documentation",
        taskDescription: "Create readme for API usage",
        taskDate: "2025-01-09",
        category: "documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Setup GitHub CI",
        taskDescription: "Add automatic build pipeline",
        taskDate: "2025-01-10",
        category: "devops",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix build error",
        taskDescription: "Build failing due to lint issue",
        taskDate: "2025-01-07",
        category: "bugfix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Add unit tests",
        taskDescription: "Write tests for login function",
        taskDate: "2025-01-11",
        category: "testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      total: 19,
      active: 20,
      newTask: 21,
      completed: 22,
      failed: 23
    },
    tasks: [
      {
        taskTitle: "Check UI spacing",
        taskDescription: "Fix inconsistent padding in card",
        taskDate: "2025-01-12",
        category: "frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update assets",
        taskDescription: "Replace old images with new ones",
        taskDate: "2025-01-03",
        category: "design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Test dashboard",
        taskDescription: "Check dashboard load time",
        taskDate: "2025-01-10",
        category: "testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix alignment issues",
        taskDescription: "Flexbox alignment breaking on mobile",
        taskDate: "2025-01-05",
        category: "frontend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = {
  id: 1,
  firstName: "Suresh",
  email: "admin@example.com",
  password: "123"
};



// utils/localstorage.js

export const getLocalStorage = () => {
  const data = localStorage.getItem("employees");
  return data ?  employees: JSON.parse(data) };


export const setLocalStorage = (employees) => {
  localStorage.setItem("employees", JSON.stringify(employees));

};
