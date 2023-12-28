export function ListSkeleton() {
  return (
    <div
      role="status"
      className="space-y-4 border border-green-500/35 divide-y divide-green-500/35 rounded shadow animate-pulse  px-5 py-[22px] mb-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="h-2.5 bg-green-500/25 rounded-full w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-green-500/35 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-green-500/20 rounded-full w-12"></div>
      </div>
    </div>
  );
}