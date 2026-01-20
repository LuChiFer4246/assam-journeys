export function SkeletonCard() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-[4/3] bg-muted" />
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 bg-muted rounded" />
          <div className="h-4 w-20 bg-muted rounded" />
        </div>
        <div className="h-6 w-3/4 bg-muted rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted rounded" />
          <div className="h-4 w-2/3 bg-muted rounded" />
        </div>
        <div className="pt-4 border-t border-border flex gap-4">
          <div className="h-4 w-20 bg-muted rounded" />
          <div className="h-4 w-16 bg-muted rounded" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="h-[90vh] bg-muted animate-pulse relative">
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom">
          <div className="max-w-xl space-y-6">
            <div className="h-8 w-40 bg-muted-foreground/20 rounded-full" />
            <div className="h-16 w-full bg-muted-foreground/20 rounded" />
            <div className="h-6 w-3/4 bg-muted-foreground/20 rounded" />
            <div className="flex gap-4 pt-4">
              <div className="h-12 w-40 bg-muted-foreground/20 rounded-xl" />
              <div className="h-12 w-36 bg-muted-foreground/20 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonList() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex gap-4 p-3 animate-pulse">
          <div className="w-20 h-20 bg-muted rounded-xl" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-3/4 bg-muted rounded" />
            <div className="h-3 w-full bg-muted rounded" />
            <div className="h-3 w-1/2 bg-muted rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
