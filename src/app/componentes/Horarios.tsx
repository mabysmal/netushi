'use client'
import { useState, useEffect } from "react";
import type { BusinessHours, BusinessHour } from "../types/menu";

const BusinessHours = () => {
  const [schedule, setSchedule] = useState<BusinessHours | null>(null);
  const [currentDay, setCurrentDay] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch('/api/business-hours');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSchedule(data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  useEffect(() => {
    if (!schedule) return;

    const now = new Date();
    const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] as const;
    const currentDayName = dayNames[now.getDay()];
    const currentSchedule = schedule[currentDayName];
    const currentTime = now.toTimeString().slice(0, 5);

    setCurrentDay(currentDayName);

    if (
      currentSchedule.isOpen &&
      currentSchedule.openTime &&
      currentSchedule.closeTime &&
      currentTime >= currentSchedule.openTime &&
      currentTime <= currentSchedule.closeTime
    ) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [schedule]);

  if (loading) {
    return <div className="text-center p-4">Cargando horarios...</div>;
  }

  if (!schedule) {
    return <div className="text-center p-4">Error al cargar los horarios</div>;
  }

  const diasEnEspanol: { [key: string]: string } = {
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miércoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sábado",
    sunday: "Domingo"
  };

  return (
    <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Estatus:{" "}
        <span className={isOpen ? "text-green-400" : "text-red-400"}>
          {isOpen ? "Abierto" : "Cerrado"}
        </span>
      </h2>
      <ul className="space-y-2">
        {(Object.entries(schedule) as [string, BusinessHour][]).map(([day, daySchedule]) => (
          <li
            key={day}
            className={`${
              day === currentDay ? "font-bold text-blue-400" : ""
            } text-center`}
          >
            {diasEnEspanol[day]}:{" "}
            {daySchedule.isOpen ? `${daySchedule.openTime} - ${daySchedule.closeTime}` : "Cerrado"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessHours;