import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Generate random dataset similar to the image
const generateData = (numBars = 10) => {
  const colors = ["#f4c542", "#2a9df4", "#73c475", "#e63946", "#dfeeea"];
  return Array.from({ length: numBars }, (_, index) => ({
    name: `Bar ${index + 1}`,
    category1: Math.floor(Math.random() * 50),
    category2: Math.floor(Math.random() * 50),
    category3: Math.floor(Math.random() * 50),
    category4: Math.floor(Math.random() * 50),
    category5: Math.floor(Math.random() * 50),
  }));
};

const data = generateData(20);

const StackedBarGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="category1" stackId="a" fill="#f4c542" />
        <Bar dataKey="category2" stackId="a" fill="#2a9df4" />
        <Bar dataKey="category3" stackId="a" fill="#73c475" />
        <Bar dataKey="category4" stackId="a" fill="#e63946" />
        <Bar dataKey="category5" stackId="a" fill="#dfeeea" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarGraph;
