function UserProfile() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full bg-sky-400 flex items-center justify-center text-white text-4xl font-bold">
            PC
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              Priyanka Chaudhari
            </h2>
            <p className="text-gray-500">Frontend developer</p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">
                  priyankachaudhari2701@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">+91 96730 92782</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Pune, India</p>
              </div>

              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
  
export default UserProfile;
