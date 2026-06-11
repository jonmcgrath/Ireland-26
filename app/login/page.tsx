export default function LoginPage({
  searchParams,
}: {
  searchParams: { from?: string; error?: string }
}) {
  const from = searchParams.from && searchParams.from.startsWith('/') ? searchParams.from : '/'

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4">
      <div className="w-full max-w-sm rounded-lg border border-stone-200 bg-white p-8 shadow-sm">
        <h1 className="mb-1 text-xl font-semibold text-gray-900">Ireland Family Trip</h1>
        <p className="mb-6 text-sm text-gray-500">Enter the password to view the itinerary.</p>
        <form method="post" action="/api/login" className="space-y-4">
          <input type="hidden" name="from" value={from} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoFocus
            required
            className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm text-gray-900 focus:border-stone-500 focus:outline-none"
          />
          {searchParams.error && (
            <p className="text-sm text-red-600">Incorrect password, try again.</p>
          )}
          <button
            type="submit"
            className="w-full rounded-md bg-stone-800 px-3 py-2 text-sm font-medium text-white hover:bg-stone-700"
          >
            Enter
          </button>
        </form>
      </div>
    </main>
  )
}
