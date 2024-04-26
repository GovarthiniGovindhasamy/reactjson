const fs = require('fs').promises; 
async function readLocalEmployeeData() {
  try {
    const data = await fs.readFile('employees.json', 'utf-8'); // Replace with your file name
    return JSON.parse(data); 
  } catch (error) {
    console.error('Error reading employee data:', error);
  }
}

readLocalEmployeeData().then((data) => {
  console.log(data); 
});