"use client";

import Image from "next/image";

import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${URL}/get-all-assignments`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);

  const get_assignments = async () => {};
  return (
    <div className="min-h-screenBLIC_N8N_URL bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open-icon lucide-book-open"
                >
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-slate-100">
                Canvas Assignment Dashboard
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 text-sm font-medium mb-1">Total</p>
              {/*edit with real data later*/}
              <p className="text-3xl font-bold text-slate-100">8</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <p className="text-green-400 text-sm font-medium mb-1">Done</p>
              {/*  edit with real data later */}
              <p className="text-3xl font-bold text-green-500">2</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
              <p className="text-amber-400 text-sm font-medium mb-1">Pending</p>
              {/*  edit with real data later */}
              <p className="text-3xl font-bold text-amber-500">2</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <p className="text-red-400 text-sm font-medium mb-1">Not Done</p>
              {/*  edit with real data later */}
              <p className="text-3xl font-bold text-red-500">2</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-blue-500"
              placeholder="Search assignments by name..."
            />
          </div>
          <button
            type="button"
            role="combobox"
            aria-controls="radix-_r_0_"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            className="flex h-10 items-center justify-between rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full md:w-[180px] bg-slate-800 border-slate-700 text-slate-100"
          >
            <span style={{ pointerEvents: "none" }}>All status</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down h-4 w-4 opacity-50"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            role="combobox"
            aria-controls="radix-_r_0_"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            className="flex h-10 items-center justify-between rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full md:w-[180px] bg-slate-800 border-slate-700 text-slate-100"
          >
            <span style={{ pointerEvents: "none" }}>Due Date</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down h-4 w-4 opacity-50"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
        <div className="mb-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <p className="text-blue-400 text-sm">
            {" "}
            <strong className="text-xl text-red-500">Note: </strong>Drag and
            drop files directly onto any assignment row to add them. Once you've
            added files, click the "Submit All" button to submit all files at
            once.{" "}
          </p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 overflow-hidden mb-6">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors data-[state=selected]:bg-muted border-slate-700 hover:bg-slate-700/50">
                  <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-slate-300 font-semibold">
                    Subject
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-slate-300 font-semibold">
                    Id
                  </th>

                  <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-slate-300 font-semibold">
                    Name
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-slate-300 font-semibold">
                    Description
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-slate-300 font-semibold">
                    Created
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-slate-300 font-semibold">
                    Due Date
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-slate-300 font-semibold">
                    Status
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-slate-300 font-semibold">
                    Type
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-slate-300 font-semibold">
                    Files
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&:has([role=checkbox])]:pr-0 text-slate-300 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                <tr className="border-b data-[state=selected]:bg-muted border-slate-700 transition-colors hover:bg-slate-700/30">
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-slate-100">
                    Code Review
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-slate-100">
                    Code Review
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-slate-100">
                    Code Review
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-slate-100">
                    Code Review
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-slate-100">
                    Code Review
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-slate-100">
                    Code Review
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-slate-100">
                    Code Review
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-slate-100">
                    Code Review
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <div className="flex flex-col gap-2 min-w-[200px]">
                      <div className="flex items-center gap-2 text-slate-500 text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-upload-icon lucide-upload"
                        >
                          <path d="M12 3v12" />
                          <path d="m17 8-5-5-5 5" />
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        </svg>
                        <span>Drop files here</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-slate-100">
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-_r_2_"
                      data-state="closed"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash2-icon lucide-trash-2"
                      >
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M3 6h18" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-cloud-download-icon lucide-cloud-download"
            >
              <path d="M12 13v8l-4-4" />
              <path d="m12 21 4-4" />
              <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
            </svg>{" "}
            Get Assignments
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send-icon lucide-send"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
            Submit All
          </button>
        </div>
      </div>
    </div>
  );
}
