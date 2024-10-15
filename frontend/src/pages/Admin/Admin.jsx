import axios from 'axios';
import React, { useState } from 'react';

const Admin = () => {
    const [Name, SetName] = useState("");
    const [RegNo, SetRegNo] = useState("");
    const [RollNo, SetRollNo] = useState("");

    const SubmitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/campus/student/create', {
            name: Name,
            regNumber: RegNo,
            rollNumber: RollNo,
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.error("Error: ", err);
        });
    };

    const handleStudentName = (data) => {
        if (data) {
            SetName(data);
        }
    };
    const handleStudentRegNo = (data) => {
        if (data) {
            SetRegNo(data);
        }
    };
    const handleStudentRollNo = (data) => {
        if (data) {
            SetRollNo(data);
        }
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <div className="admin-panel">
                <h3>Add Student</h3>
                <div className="add-student">
                    <form onSubmit={SubmitForm}>
                        <label htmlFor="name">
                            Name:
                            <input 
                                type="text" 
                                name="name" 
                                onChange={(e) => handleStudentName(e.target.value)} 
                                value={Name} 
                            />
                        </label>
                        <label htmlFor="rollNumber">
                            Roll. No:
                            <input 
                                type="text" 
                                name="rollNumber" 
                                onChange={(e) => handleStudentRollNo(e.target.value)} 
                                value={RollNo} 
                            />
                        </label>
                        <label htmlFor="regNumber">
                            Reg. No:
                            <input 
                                type="text" 
                                name="regNumber" 
                                onChange={(e) => handleStudentRegNo(e.target.value)} 
                                value={RegNo} 
                            />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;