const registrations = [
  {
    name: "John Doe",
    email: "john@example.com",
    program: "Computer Science",
    status: "Pending",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    program: "Business Administration",
    status: "Approved",
  },
];

const AdminDashboard = () => {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Admin Dashboard</h2>
        <div className="space-y-6">
        <div>
            <h3 className="text-xl font-semibold mb-2">Quick Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800">Total Applications</h4>
                <p className="text-3xl font-bold text-blue-600">152</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800">Approved</h4>
                <p className="text-3xl font-bold text-green-600">89</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-800">Pending</h4>
                <p className="text-3xl font-bold text-yellow-600">63</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Recent Pre-Registrations</h3>
            <table className="min-w-full bg-white border border-gray-300 hidden md:table">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Program</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">John Doe</td>
                  <td className="py-2 px-4 border-b">john@example.com</td>
                  <td className="py-2 px-4 border-b">Computer Science</td>
                  <td className="py-2 px-4 border-b">Pending</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Jane Smith</td>
                  <td className="py-2 px-4 border-b">jane@example.com</td>
                  <td className="py-2 px-4 border-b">Business Administration</td>
                  <td className="py-2 px-4 border-b">Approved</td>
                </tr>
              </tbody>
            </table>
            <div className="space-y-4 md:hidden">
            {registrations.map((registration) => (
              <div key={registration.email} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900">{registration.name}</h4>
                <p className="text-gray-600">{registration.email}</p>
                <p className="text-gray-600">{registration.program}</p>
                <p className={
                  `inline-block px-3 py-1 rounded-lg font-semibold text-sm mt-2 ${
                    registration.status === "Approved" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                  }`
                }>
                  {registration.status}
                </p>
              </div>
            ))}
          </div>
          </div>
          
        </div>
      </div>
    )
  }
  
  export default AdminDashboard
  
  