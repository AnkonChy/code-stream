/*
AdminDashboard.jsx
React + Tailwind (no TypeScript)

Install:
  npm install react-icons recharts

Usage:
  - Ensure Tailwind is configured in your project (Create React App / Vite / Next.js + Tailwind)
  - Drop this file into your components folder and import <AdminDashboard /> in App.jsx
*/

import React, { useState } from "react";
import {
  FiUsers,
  FiClipboard,
  FiClock,
  FiCheckCircle,
  FiHome,
  FiSettings,
  FiList,
  FiMenu,
} from "react-icons/fi";
import { Link } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const sampleData = [
  { name: "Jan", tasks: 40, pending: 10, delivered: 30 },
  { name: "Feb", tasks: 30, pending: 8, delivered: 22 },
  { name: "Mar", tasks: 50, pending: 15, delivered: 35 },
  { name: "Apr", tasks: 45, pending: 12, delivered: 33 },
  { name: "May", tasks: 60, pending: 20, delivered: 40 },
];

const pieData = [
  { name: "Pending", value: 18 },
  { name: "Delivered", value: 82 },
];
const COLORS = ["#FF6B6B", "#4CAF50"];

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FiMenu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 min-h-screen bg-gray-800 text-white p-6 
    transform transition-transform duration-300 z-40
    ${menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Admin</h1>
          <p className="text-sm text-gray-300">Overview</p>
        </div>

        <nav>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              <FiHome size={18} />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              <FiUsers size={18} />
              <span>Users</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              <FiList size={18} />
              <Link to="/task">Task</Link>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              <FiSettings size={18} />
              <span>Settings</span>
            </li>
          </ul>
        </nav>

        <div className="mt-auto pt-6 text-sm text-gray-400 hidden lg:block">
          © {new Date().getFullYear()} Your Company
        </div>
      </aside>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0  bg-transparent z-30 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 mt-12 lg:mt-0 w-full">
        <header className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Dashboard Overview
          </h2>
          <div className="text-sm text-gray-600">Welcome back, Admin</div>
        </header>

        {/* Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <div className="p-3 rounded-md bg-indigo-50 text-indigo-600">
              <FiUsers size={22} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-xl sm:text-2xl font-bold">1,240</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <div className="p-3 rounded-md bg-blue-50 text-blue-600">
              <FiClipboard size={22} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Tasks</p>
              <p className="text-xl sm:text-2xl font-bold">3,500</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <div className="p-3 rounded-md bg-yellow-50 text-yellow-600">
              <FiClock size={22} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Tasks</p>
              <p className="text-xl sm:text-2xl font-bold">120</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <div className="p-3 rounded-md bg-green-50 text-green-600">
              <FiCheckCircle size={22} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Delivered Tasks</p>
              <p className="text-xl sm:text-2xl font-bold">3,380</p>
            </div>
          </div>
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
            <h3 className="font-semibold mb-4">Tasks Overview (Monthly)</h3>
            <div className="flex justify-center min-w-[300px]">
              <BarChart width={300} height={240} data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="tasks" fill="#8884d8" />
              </BarChart>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
            <h3 className="font-semibold mb-4">Pending vs Delivered</h3>
            <div className="flex justify-center min-w-[300px]">
              <LineChart width={300} height={240} data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="pending"
                  stroke="#FF6B6B"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="delivered"
                  stroke="#4CAF50"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
            <h3 className="font-semibold mb-4">Task Distribution</h3>
            <div className="flex justify-center min-w-[300px]">
              <PieChart width={300} height={240}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
