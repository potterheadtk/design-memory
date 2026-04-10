export default function HomePage() {
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">
        Design Memory
      </h1>

      <p className="mt-4 text-lg">
        Personal system of record for hotel guestroom lighting
        and energy management design decisions.
      </p>

      <div className="mt-8 space-y-4">
        <div className="p-4 rounded border bg-white">
          📌 Track evolving RFIs
        </div>
        <div className="p-4 rounded border bg-white">
          🧠 Preserve design intent
        </div>
        <div className="p-4 rounded border bg-white">
          🛡️ Defensible record of decisions
        </div>
      </div>
    </main>
  );
}
