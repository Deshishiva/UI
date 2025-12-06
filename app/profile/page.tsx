export default function Profile() {
  return (
    <div className="max-w-[380px] mx-auto p-4 pb-24">
      <h1 className="text-xl font-bold mb-4">Profile</h1>

      {/* Avatar */}
      <div className="flex justify-center">
        <img
          src="/stories/story2.jpg"
          className="w-28 h-28 rounded-full object-cover shadow"
        />
      </div>

      <h2 className="text-center text-xl font-bold mt-2">Lorenzo</h2>
      <p className="text-center text-gray-500 text-sm">Level 4 Learner</p>

      {/* XP */}
      <div className="mt-4 bg-white p-4 rounded-xl shadow">
        <p className="text-sm font-semibold">XP Progress</p>
        <div className="w-full h-2 bg-gray-300 rounded mt-1">
          <div className="w-3/4 h-2 bg-green-500 rounded"></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">242 XP</p>
      </div>

      {/* Settings */}
      <div className="mt-6 bg-white rounded-xl shadow divide-y">
        <button className="w-full text-left px-4 py-3">Edit Profile</button>
        <button className="w-full text-left px-4 py-3">Change Password</button>
        <button className="w-full text-left px-4 py-3 text-red-600 font-semibold">
          Logout
        </button>
      </div>
    </div>
  );
}
