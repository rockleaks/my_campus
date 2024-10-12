import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Attendance.css';

const Attendance = () => {
    const [classes, setClasses] = useState([]);
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/attendance')
            .then(response => {
                setClasses(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the class data!', error);
            });
    }, []);

    // Function to handle class click
    const handleClassClick = (className) => {
        axios.get(`http://localhost:5000/attendance/${className}`)
            .then(response => {
                setAttendanceData(response.data);
            })
            .catch(error => {
                console.error(`Error fetching attendance data for class ${className}!`, error);
            });
    };

    // Function to handle toggle switch change
    const handleToggleChange = (studentId, status) => {
        // Update the status in the attendance data
        const updatedAttendanceData = attendanceData.map(item =>
            item.id === studentId ? { ...item, status: status } : item
        );
        setAttendanceData(updatedAttendanceData);

        // Send update to backend
        axios.put(`http://localhost:5000/attendance/${studentId}`, { status: status })
            .then(response => {
                console.log('Attendance status updated successfully:', response.data);
            })
            .catch(error => {
                console.error('Error updating attendance status:', error);
            });
    };

    return (
        <div>
            <h1>Class List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map(Class => (
                        <tr key={Class.id} onClick={() => handleClassClick(Class.class)}>
                            <td>{Class.id}</td>
                            <td>{Class.class}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Display attendance data */}
            {attendanceData.length > 0 && (
                <div>
                    <h2>Attendance Data for {attendanceData[0].class}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceData.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={item.status === 'present'}
                                                onChange={(e) => handleToggleChange(item.id, e.target.checked ? 'present' : 'absent')}
                                            />
                                            Present
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Attendance;
