export default function PageSkeleton() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <div className="relative h-14 w-14">
        <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
        <span className="absolute inset-2 rounded-full bg-accent/60" />
      </div>
      <div className="space-y-2 text-center">
        <div className="mx-auto h-3 w-32 animate-pulse rounded-full bg-white/10" />
        <div className="mx-auto h-2 w-20 animate-pulse rounded-full bg-white/5" />
      </div>
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <div className="space-y-32 py-16">
      {[0, 1, 2].map((i) => (
        <div key={i} className="container-x animate-pulse space-y-6">
          <div className="h-3 w-20 rounded-full bg-white/5" />
          <div className="h-7 w-56 rounded-lg bg-white/[0.06]" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((j) => (
              <div key={j} className="h-28 rounded-2xl bg-white/[0.03]" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
