import React, { useContext, useState, useEffect } from "react";

const StudentContext = React.createContext();

export function useApi() {
  return useContext(StudentContext);
}

export const StudentProvider = ({ children }) => {
  useEffect(() => {
    studentData();
  }, []);

  const [students, setStudents] = useState([]);

  const studentData = async () => {
    const rawData = await fetch(
      "https://digikids.api.castynet.africa/api/collections/get/JanApril?token=f9cd03c4d7b48d00b88f6e1aae9843"
    );
    const data = await rawData.json();
    console.log(data);
  };

  return (
    <StudentContext.Provider value={{ students }}>
      {children}
    </StudentContext.Provider>
  );
};
