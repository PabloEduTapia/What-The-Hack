import React from "react";

const Hours = () => {
    const shelterHours = [
        { day: "Monday", open: "9:00", close: "16:00" },
        { day: "Tuesday", open: "9:00", close: "16:00" },
        { day: "Wednesday", open: "9:00", close: "16:00" },
        { day: "Thursday", open: "9:00", close: "16:00" },
        { day: "Friday", open: "9:00", close: "16:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
        { day: "Sunday", open: "10:00", close: "20:00" },
    ];

    // Obtener el día actual sin tener en cuenta la zona horaria
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });

    // Encontrar las horas de hoy
    const todayHours = shelterHours.find(day => day.day === today);

    return (
        <div id="hours">
            <h2>Today's Hours</h2>
            <p>{`${todayHours.day}: ${todayHours.open} - ${todayHours.close}`}</p>
        </div>
    );
};

export default Hours;