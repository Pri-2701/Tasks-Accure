function Maps() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800">Maps</h1>

      {/* Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Google Map</h2>

        {/* Map iframe */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden border">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Pune,India&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default Maps;
  