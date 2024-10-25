import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "./css/dark-theme.css";

const localizer = momentLocalizer(moment);

// Ejemplo de eventos, que puedes reemplazar con los eventos de tus proyectos
const myEventsList = [
  {
    id: 1,
    title: "Project 1",
    start: new Date(2024, 9, 20, 10, 0), // Octubre 20, 2024, 10:00 AM
    end: new Date(2024, 9, 20, 12, 0), // Octubre 20, 2024, 12:00 PM
    allDay: false,
  },
  {
    id: 2,
    title: "Project 2",
    start: new Date(2024, 9, 21, 9, 0),
    end: new Date(2024, 9, 21, 11, 0),
    allDay: false,
  },
  {
    id: 3,
    title: "Project 3",
    start: new Date(2024, 9, 21, 9, 0),
    end: new Date(2024, 9, 25, 11, 0),
    allDay: false,
  },
];

const Calendario = () => {
  const [events] = useState(myEventsList);

  return (
    <div className="h-screen bg-gray-900 text-white">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="h-full bg-gray-900 text-white"
        defaultView="month"
        views={["month", "week", "day"]}
        selectable={true}
        popup
      />
    </div>
  );
};

export default Calendario;
