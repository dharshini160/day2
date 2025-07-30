<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Employee Management Example</title>
</head>
<body>
<script>
  let employees = [];

  function addEmp(id, name, salary) {
    employees.push({ id, name, salary });
    console.log("Employees added", employees);
  }

  addEmp(1, "dharsh", 35000);
  addEmp(2, "dheekshi", 45000);
  addEmp(3, "swathika", 5000);

  function updateEmp(id, newDetail) {
    const emp = employees.find(e => e.id === id);
    if (emp) {
      Object.assign(emp, newDetail);
      console.log("Updated", employees);
    } else {
      console.log("Employee not found");
    }
  }

  updateEmp(3, { name: "varshika" });

  function removeEmp(id) {
    const index = employees.findIndex(e => e.id === id);
    if (index !== -1) {
      employees.splice(index, 1);
      console.log("Employee removed", employees);
    } else {
      console.log("Employee not found");
    }
  }

  removeEmp(2);

  function totalSalary() {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    console.log("Total salary is", total);
  }

  totalSalary();
</script>
</body>
</html>
