import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Student.css';
import Header from '../../components/Header/Header';

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the student data!', error);
      });
  }, []);

  return (
    <div>
      <Header/>
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.username}</td>
              <td>{student.email}</td>
              <td>{student.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
