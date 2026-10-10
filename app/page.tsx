export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1
          className="text-6xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Phase 1 Checkpoint
        </h1>
        <p
          className="text-neutral-400"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          $ npm run dev — OK
        </p>
        <p style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
          ▍ accent color
        </p>
      </div>
    </main>
  );
}
