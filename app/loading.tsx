function SkeletonCard() {
  return <div className="h-28 animate-pulse rounded-2xl bg-zinc-500/20" />;
}

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <div className="mb-8 h-56 animate-pulse rounded-3xl bg-zinc-500/20" />
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
      <div className="h-72 animate-pulse rounded-2xl bg-zinc-500/20" />
    </main>
  );
}
