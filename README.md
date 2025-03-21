# GITA REACT Project

## Overview

This is a React-based employee management application developed for the **GITA & New Horizons** program. The application allows users to search, filter, sort, and add employees dynamically.

## Author

- **Developer:** Irakli Ambroladze
- **Instructor:** Sava Nikolov

## Features

- Fetches employee data asynchronously
- Search functionality to filter employees by name
- Filter functionality to sort employees by department
- Sort employees dynamically
- Add new employees with persistence using local storage
- UI components for listing, sorting, searching, and adding employees

## Technologies Used

- React (Hooks: `useState`, `useEffect`)
- JavaScript (ES6+)
- Local Storage for data persistence
- CSS for styling (via `App.css`)

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd gita-react-project
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Project Structure

```
/src
  ├── components/
  │   ├── create-input-component.js
  │   ├── list-employees.js
  │   ├── sort-employees.js
  │   ├── add-employee.js
  │   ├── filter-list.js
  │   ├── search-list.js
  ├── utils/
  │   ├── fetch-all-data.js
  ├── App.js
  ├── App.css
  ├── index.js
```

## Usage

- **Search Employees:** Enter a name in the search bar to find employees by name.
- **Filter by Department:** Enter a department name to filter employees by department.
- **Sort Employees:** Click the sort button to organize employee records.
- **Add Employees:** Click the add button to enter new employee details.

## Data Persistence

- Employee data is stored in **LocalStorage** to maintain state between sessions.
- The application retrieves data from an external fetch function `FetchEmplyees`.

## Live Demo

The project is deployed and available at:
👉 [GITA React Project](https://gita-project-react.vercel.app/)

## Error Handling

- Errors in fetching employees are caught and logged to the console.

## Acknowledgments

- GITA & New Horizons
- Instructor: Sava Nikolov
