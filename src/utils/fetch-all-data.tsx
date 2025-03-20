export const FetchEmplyees = async () => {
  try {
    const result = await fetch("/database/employees.json");
    const data = await result.json();
    return data;
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};
