"use client";

import React from "react";
import { CheckSquare } from "lucide-react";
import { Badge } from "@src/shadcn/elements";

const changelogData = [
  {
    version: "Version 0.0.2",
    date: "2024-07-11",
    features: [
      { id: 1, title: "Create User Functionality", badge: "New" },
      { id: 2, title: "Edit User Capability", badge: "New" },
      { id: 3, title: "User Table Display", badge: "New" },
      { id: 4, title: "Card View for Tables", badge: "New" },
    ],
  },
  {
    version: "Version 0.0.1",
    date: "2024-01-01",
    features: [
    ],
  },
];

const ChangelogPage = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl px-4 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-gray-100">Changelog</h1>
        <div className="space-y-6">
          {changelogData.map((version, index) => (
            <div key={index} className="p-4 bg-white rounded-md shadow dark:bg-gray-800">
              <h2 className="text-xl font-semibold text-blue-500 dark:text-blue-300">{version.version} - {version.date}</h2>
              {newFunction(version)}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

function newFunction(version: { version: string, date: string, features: Array<{ id: number, title: string, badge: string }> }) {
  return <ul className="mt-2">
    {version.features.map((feature) => (
      <li key={feature.id} className="flex items-center mt-2 space-x-2">
        <CheckSquare className="w-5 h-5 text-blue-500 dark:text-blue-300" />
        <span className="flex-1 text-gray-700 dark:text-gray-300">{feature.title}</span>
        <Badge className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-200">{feature.badge}</Badge>
      </li>
    ))}
  </ul>;
}

export default ChangelogPage;

