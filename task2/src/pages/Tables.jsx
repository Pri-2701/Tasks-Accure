function Tables() {
  const users = [
    {
      id: 1,
      name: "John Michael",
      email: "john@example.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: 2,
      name: "Alexa Liras",
      email: "alexa@example.com",
      role: "Developer",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Laurent Perrier",
      email: "laurent@example.com",
      role: "Designer",
      status: "Active",
    },
    {
      id: 4,
      name: "Michael Levi",
      email: "michael@example.com",
      role: "Admin",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800">Tables</h1>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Users Table</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600 uppercase">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-3 font-medium">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {user.email}
                  </td>
                  <td className="px-4 py-3">
                    {user.role}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default Tables;
