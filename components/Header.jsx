const Header = ({ isAdmin, setIsAdmin }) => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">IUEs/Insam - Pre-Inscription</h1>
        <nav>
          <button
            onClick={() => setIsAdmin(!isAdmin)}
            className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-100 transition-colors"
          >
            {isAdmin ? "Switch to Student" : "Admin Login"}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header