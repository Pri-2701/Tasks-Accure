


function StatCard({ title, value, percent, subtitle, icon, color }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-[0_0_2rem_rgba(136,152,170,0.15)]">
      
      {/* LEFT CONTENT */}
      <div>
        <p className="text-xs font-semibold uppercase text-slate-400">
          {title}
        </p>

        <h3 className="mt-1 text-2xl font-bold text-slate-800">
          {value}
        </h3>

        <p className="mt-2 text-sm">
          <span
            className={`font-medium ${
              percent.startsWith('-')
                ? 'text-rose-500'
                : 'text-emerald-500'
            }`}
          >
            {percent}
          </span>
          <span className="ml-1 text-slate-400">
            {subtitle}
          </span>
        </p>
      </div>

      {/* ICON */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg ${color}`}
      >
        {icon}
      </div>
    </div>
  );
}

export default StatCard;