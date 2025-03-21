export const FetchEmplyees = async () => {
  try {
    const result = await fetch("/database/employees.json");
    let data = await result.json();
    const storedEmployees =
      JSON.parse(localStorage.getItem("employees") || "[]") || [];
    data = [...data, ...storedEmployees];
    return data;
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};
