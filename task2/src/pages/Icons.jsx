

export default function Icons() {
  const icons = [
    { name: "ni ni-air-baloon", label: "Air Balloon" },
    { name: "ni ni-album-2", label: "Album" },
    { name: "ni ni-app", label: "App" },
    { name: "ni ni-atom", label: "Atom" },
    { name: "ni ni-badge", label: "Badge" },
    { name: "ni ni-bell-55", label: "Bell" },
    { name: "ni ni-books", label: "Books" },
    { name: "ni ni-box-2", label: "Box" },
    { name: "ni ni-calendar-grid-58", label: "Calendar" },
    { name: "ni ni-camera-compact", label: "Camera" },
    { name: "ni ni-chart-bar-32", label: "Chart" },
    { name: "ni ni-circle-08", label: "User" },
  ];

  return (
    <div>
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Icons</h1>

      {/* Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
        Icons
        </h2>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border rounded-lg p-4 hover:bg-gray-100 cursor-pointer"
            >
              <i className={`${icon.name} text-3xl text-blue-500 mb-2`}></i>
              <span className="text-xs text-gray-600 text-center">
                {icon.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
