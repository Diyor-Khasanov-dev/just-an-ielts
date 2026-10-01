export default function DashboardLoading() {
  return (
    <div className='space-y-8 animate-pulse p-1 sm:p-2'>
      {/* Top Banner / Heading Skeleton */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200/80'>
        <div className='space-y-2'>
          <div className='h-8 bg-gray-200 rounded-xl w-64' />
          <div className='h-4 bg-gray-100 rounded-lg w-80' />
        </div>
        <div className='h-10 bg-gray-200 rounded-xl w-36 shrink-0' />
      </div>

      {/* Goal / Status Banner Skeleton */}
      <div className='h-32 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-2xl border border-gray-200/60 shadow-sm' />

      {/* Grid of Skill Cards Skeletons */}
      <div className='space-y-4'>
        <div className='h-5 bg-gray-200 rounded-lg w-40' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className='glass-card rounded-2xl p-5 border border-gray-200/80 bg-white/60 space-y-4'
            >
              <div className='flex justify-between items-start'>
                <div className='w-10 h-10 rounded-xl bg-gray-200' />
                <div className='w-12 h-6 bg-gray-200 rounded-md' />
              </div>
              <div className='space-y-2 pt-2'>
                <div className='h-4 bg-gray-200 rounded w-3/4' />
                <div className='h-3 bg-gray-100 rounded w-1/2' />
              </div>
              <div className='h-3 bg-gray-100 rounded w-full pt-4 border-t border-gray-100' />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Dashboard Columns Skeleton */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4'>
        <div className='lg:col-span-7 h-64 glass-card rounded-2xl p-6 border border-gray-200/80 bg-white/60' />
        <div className='lg:col-span-5 h-64 glass-card rounded-2xl p-6 border border-gray-200/80 bg-white/60' />
      </div>
    </div>
  )
}
