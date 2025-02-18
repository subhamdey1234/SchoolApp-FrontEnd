
# SchoolFrontend App

This is a modern school management frontend application built with **React.js**, **Vite**, **Recharts**, **DaisyUI**, and **React Router**. The app is designed to provide a simple and intuitive interface for managing school data such as student records, grades, and attendance.

## Technologies Used

- **React.js** - A JavaScript library for building user interfaces.
- **Vite** - A fast development build tool and bundler for modern web apps.
- **Recharts** - A charting library for React to visualize data.
- **DaisyUI** - A plugin for **Tailwind CSS** that provides a set of pre-built UI components.
- **React Router** - A library for routing and navigation in React applications.

## Features

- **Dashboard**: Displays school-related data and visualizations using Recharts.
- **Student Records**: Manage and view student information.
- **Grade Management**: Visualize student grades in charts.
- **Attendance Tracking**: Track and view student attendance.

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) (version 6 or above)

### Steps to Install and Run the Application

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/schoolfrontend.git
   cd schoolfrontend
   ```

2. **Install Dependencies**

   Run the following command to install all the dependencies:

   ```bash
   npm install
   ```

3. **Run the Development Server**

   To start the development server with live reloading:

   ```bash
   npm run dev
   ```

   The application will be running on [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
schoolfrontend/
├── public/
│   └── index.html      # Main HTML file
├── src/
│   ├── assets/         # Static assets (images, fonts, etc.)
│   ├── components/     # React components
│   ├── pages/          # React pages (e.g., Dashboard, Student, etc.)
│   ├── App.js          # Main app file
│   ├── index.js        # Entry point
│   └── styles/         # CSS/SCSS or Tailwind configuration
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration file
```

## Routing

The application uses **React Router** for navigation between different pages. Below are the routes used in the application:

- `/` - Home / Dashboard
- `/students` - Student records page
- `/grades` - Grades visualization
- `/attendance` - Attendance tracking

To add new routes, update the `App.js` file as follows:

```javascript
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Grades from './pages/Grades';
import Attendance from './pages/Attendance';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## Styling with DaisyUI and Tailwind CSS

This app uses **DaisyUI** components for UI elements, which are styled using **Tailwind CSS**. For example:

```jsx
<button className="btn btn-primary">Primary Button</button>
```

Make sure to install the required packages:

```bash
npm install daisyui tailwindcss
```

And configure Tailwind in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("daisyui")],
}
```

## Charts with Recharts

For data visualization, this app uses **Recharts**. You can integrate charts like this:

```javascript
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Tue', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Wed', uv: 2000, pv: 9800, amt: 2290 },
  // ... more data
];

const MyChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);
```

## Scripts

- **`npm run dev`**: Starts the Vite development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build locally.

## Contributing

We welcome contributions to improve the SchoolFrontend app! If you have suggestions or want to add new features, feel free to create a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your fork (`git push origin feature-branch`).
5. Open a pull request.




### Key Points:
- React Router for navigation
- Recharts for data visualization
- DaisyUI for styling (with TailwindCSS)
- Vite for fast development build and bundling

