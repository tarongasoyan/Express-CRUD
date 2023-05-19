## Express CRUD
#This project is a Node.js-based RESTful API using Express and MongoDB for managing student and teacher information.
Table of Contents
Installation
Usage
Endpoints
Students
Teachers
Contributing
License
Installation
Clone the repository.
Navigate to the project directory.
Install dependencies using npm install.
Set up your MongoDB database and configure the connection in the .env file.
Usage
Start the application using node server.js
The API will be available at http://127.0.0.1:3000 by default.
Endpoints
Students
Create a Student
Endpoint: POST /students
Description: Create a new student record.
Request Body:
name (string): Name of the student.
email (string): Email address of the student.
telephone (string): Telephone number of the student.
age (number): Age of the student.
school (string): Name of the school the student attends.
classroom (number): Class in which the student is enrolled.
grade (string): Grade of the student.
Get All Students
Endpoint: GET /students
Description: Retrieve all student records.
Response:
Body: JSON array containing all students.
Get a Student by ID
Endpoint: GET /students/:id
Description: Retrieve a specific student by their ID.
Parameters:
id: The unique identifier of the student.
Response:
Body: JSON object representing the student.
Update a Student
Endpoint: PUT /students/:id
Description: Update a specific student by their ID.
Parameters:
id: The unique identifier of the student.
Request Body: Same as the create endpoint.
Response:
Body: JSON object representing the updated student.
Delete a Student
Endpoint: DELETE /students/:id
Description: Delete a specific student by their ID.
Parameters:
id: The unique identifier of the student.
Teachers
Create a Teacher
Endpoint: POST /teachers
Description: Create a new teacher record.
Request Body:
name (string): Name of the teacher.
email (string): Email address of the teacher.
age (number): Age of the teacher.
subject (string): Subject taught by the teacher.
department (string): Department in which the teacher works.
Response:
Body: JSON object representing the created teacher.
Get All Teachers
Endpoint: GET /teachers
Description: Retrieve all teacher records.
Response:
Body: JSON array containing all teachers.
Get a Teacher by ID
Endpoint: GET /teachers/:id
Description: Retrieve a specific teacher by their ID.
Parameters:
id: The unique identifier of the teacher.

