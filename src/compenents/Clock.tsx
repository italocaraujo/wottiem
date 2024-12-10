import { useState, useEffect } from "react";
import styles from "@/styles/Clock.module.css";

const Clock = () => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const today = new Date();

    // Obter o dia, mês e ano
    const day = today.getDate();
    const month = today.getMonth() + 1; // Meses vão de 0 a 11, por isso somamos 1
    const year = today.getFullYear();

    // Formatar a data como DD/MM/YYYY
    const date =
      (day < 10 ? "0" : "") +
      day +
      "/" +
      (month < 10 ? "0" : "") +
      month +
      "/" +
      year;

    setFormattedDate(date); // Define a data formatada no estado
  }, []); // Executa apenas na montagem do componente

  return (
    <div className={styles.headerDate}>
      <span id={styles.currentDate}>{formattedDate}</span>
    </div>
  );
};

export default Clock;
