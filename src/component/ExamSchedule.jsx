import React from "react";
import './Exam.css'
const classes = [
  {
    id: 1,
    title: "Class 1 - Mathematics",
    date: "2024-08-15",
    startTime: "09:00 AM",
    endTime: "12:00 PM",
  },
  {
    id: 1,
    title: "Class 1 - English",
    date: "2024-08-16",
    startTime: "10:00 AM",
    endTime: "01:00 PM",
  },
  {
    id: 2,
    title: "Class 2 - Science",
    date: "2024-08-17",
    startTime: "09:30 AM",
    endTime: "12:30 PM",
  },
  {
    id: 2,
    title: "Class 2 - History",
    date: "2024-08-18",
    startTime: "11:00 AM",
    endTime: "02:00 PM",
  },
  {
    id: 3,
    title: "Class 3 - Geography",
    date: "2024-08-19",
    startTime: "01:00 AM",
    endTime: "04:00 PM",
  },
  {
    id: 3,
    title: "Class 3 - Physics",
    date: "2024-08-20",
    startTime: "02:00 AM",
    endTime: "05:00 AM",
  },
  {
    id: 4,
    title: "Class 4 - Chemistry",
    date: "2024-08-21",
    startTime: "03:00 AM",
    endTime: "06:00 AM",
  },
  {
    id: 5,
    title: "Class 5 - Mathematics",
    date: "2024-08-22",
    startTime: "09:00 AM",
    endTime: "12:00 AM",
  },
  {
    id: 5,
    title: "Class 5 - English",
    date: "2024-08-23",
    startTime: "10:00 AM",
    endTime: "01:00 AM",
  },
  {
    id: 6,
    title: "Class 6 - Science",
    date: "2024-08-24",
    startTime: "09:30 AM",
    endTime: "12:30 AM",
  },
  {
    id: 6,
    title: "Class 6 - History",
    date: "2024-08-25",
    startTime: "11:00 AM",
    endTime: "02:00 AM",
  },
  {
    id: 7,
    title: "Class 7 - Geography",
    date: "2024-08-26",
    startTime: "01:00 AM",
    endTime: "04:00 AM",
  },
  {
    id: 7,
    title: "Class 7 - Physics",
    date: "2024-08-27",
    startTime: "02:00 AM",
    endTime: "05:00 AM",
  },
  {
    id: 8,
    title: "Class 8 - Chemistry",
    date: "2024-08-28",
    startTime: "03:00 AM",
    endTime: "06:00 AM",
  },
  {
    id: 9,
    title: "Class 9 - Mathematics",
    date: "2024-08-29",
    startTime: "09:00 AM",
    endTime: "12:00 AM",
  },
  {
    id: 9,
    title: "Class 9 - English",
    date: "2024-08-30",
    startTime: "10:00 AM",
    endTime: "01:00 AM",
  },
  {
    id: 10,
    title: "Class 10 - Science",
    date: "2024-08-31",
    startTime: "09:30 AM",
    endTime: "12:30 AM",
  },
  {
    id: 10,
    title: "Class 10 - History",
    date: "2024-09-01",
    startTime: "11:00 AM",
    endTime: "02:00 AM",
  },
  {
    id: 10,
    title: "Class 10 - Geography",
    date: "2024-09-02",
    startTime: "01:00 AM",
    endTime: "04:00 AM",
  },
  {
    id: 10,
    title: "Class 10 - Physics",
    date: "2024-09-03",
    startTime: "02:00 AM",
    endTime: "05:00 AM",
  },
];

const ClassSchedule = () => {
  return (
    <div className="container">
      {classes.map((classItem) => (
        <div key={classItem.id} className="class-card">
          <h2>{classItem.title}</h2>
          <p><strong>Date:</strong> {classItem.date}</p>
          <p><strong>Start Time:</strong> {classItem.startTime} | <strong>End Time:</strong> {classItem.endTime}</p>
          <button className="details-button">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default ClassSchedule;