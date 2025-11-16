export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Dashboard
          </h1>
        </header>
        
        <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Welcome Card */}
          <div className="col-span-full rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-800">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Hello world
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Welcome to your dashboard!
            </p>
          </div>

          {/* Stats Cards */}
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-800">
            <div className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total Users
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              1,234
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-800">
            <div className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Active Sessions
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              567
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-800">
            <div className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Revenue
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              $12.5K
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
