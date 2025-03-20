export const FetchEmplyees = async () => {
  try {
    const result = await fetch("/src/database/employees.json");
    const data = await result.json();
    return data;
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};
