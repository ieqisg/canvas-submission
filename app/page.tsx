import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
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
              <p className="text-amber-400 text-sm font-medium mb-1">Done</p>
              {/*  edit with real data later */}
              <p className="text-3xl font-bold text-amber-500">2</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <p className="text-red-400 text-sm font-medium mb-1">Done</p>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-down h-4 w-4 opacity-50"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
