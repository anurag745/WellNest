import "../style/Home.css"
export default function Header() {
  return (
    <nav>
        <div>
          <h4 href="/" className="nav-head">WellNest</h4>
        </div>
        <div className="navlinks">
          <a href="#about">
            <div className="nav-item">About</div>
          </a>
          <a href="/chatbot">
            <div className="nav-item">ChatBot</div>
          </a>
          <a href="/login" id="button">
            <div className="nav-item">Login</div>
          </a>
        </div>
      </nav>
  )
}
