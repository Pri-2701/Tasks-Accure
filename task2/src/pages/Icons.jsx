function Icons() {
  const icons = [
    { name: "ni ni-active-40", class: "fa-bolt" },
    { name: "ni ni-air-baloon", class: "fa-hot-air-balloon" },
    { name: "ni ni-album-2", class: "fa-compact-disc" },
    { name: "ni ni-align-center", class: "fa-align-center" },
    { name: "ni ni-app", class: "fa-th-large" },
    { name: "ni ni-archive-2", class: "fa-archive" },
    { name: "ni ni-badge", class: "fa-id-badge" },
    { name: "ni ni-bell-55", class: "fa-bell" },
    { name: "ni ni-box-2", class: "fa-box" },
    { name: "ni ni-briefcase-24", class: "fa-briefcase" },
    { name: "ni ni-building", class: "fa-building" },
    { name: "ni ni-bulb-61", class: "fa-lightbulb" }
  ];

  return (
    <div className="space-y-6">
      {/* TITLE */}
      <h1 className="text-lg font-semibold">Icons</h1>

      {/* ICON GRID */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 hover:text-blue-600 cursor-pointer"
            >
              <i className={`fas ${icon.class} text-2xl`} />
              <span className="text-xs text-gray-500">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Icons;

