import { useState } from "react";
import Employee from "./components/Employee";
import "./Index.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [employees, setEmployees] = useState([
    {
      name: "Mak",
      role: "developer",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    },
    {
      name: "Mak",
      role: "developer",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    },
    {
      name: "Mak",
      role: "developer",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    },
    {
      name: "Mak",
      role: "developer",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    },
    {
      name: "Mak",
      role: "developer",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    },
    {
      name: "Mak",
      role: "developer",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    },
  ]);
  return (
    <div className="flex flex-wrap justify-center">
      {employees.map((employee) => {
        return (
          <Employee
            key={uuidv4()}
            name={employee.name}
            role={employee.role}
            img={employee.img}
          />
        );
      })}
    </div>
  );
}

export default App;
