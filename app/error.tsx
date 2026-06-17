"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
        <button
          onClick={reset}
          className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
