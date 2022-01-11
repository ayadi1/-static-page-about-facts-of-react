import img from "../assets/images/reactjs-icon.png";
export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-logo">
          <img src={img} alt="" />
          <h1>ReactFacts</h1>
        </div>
        <h2 className="nav-links">React Course - Project 1</h2>
      </nav>
    </header>
  );
}
