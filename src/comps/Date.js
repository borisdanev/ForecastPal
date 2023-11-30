import { useEffect, useState } from "react";
const Date = () => {
  const [currentDate, setCurrentDate] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  useEffect(() => {
    const currentDate = new window.Date();
    const currentDay = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const currentMonth = currentDate.toLocaleDateString("en-US", {
      month: "long",
    });
    setCurrentDate(currentDate.getDate());
    setCurrentDay(currentDay);
    setCurrentMonth(currentMonth);
  }, []);
  return <p>{`${currentDay} ${currentDate} ${currentMonth}`}</p>;
};
export default Date;
