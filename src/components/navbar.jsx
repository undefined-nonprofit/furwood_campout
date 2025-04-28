import telegramIcon from "../../assets/telegram.svg";

export default () => {

  const navItems = [
    { label: "Volunteer", link: "/volunteer" },
    { label: "Info", link: "/info" },
    { label: "Tickets", link: "/tickets" },
    { label: "Schedule", link: "/schedule" },
  ].map(item => (
    <li><a href={item.link}>{item.label}</a></li>
  ))

  return (
    <div className={`navbar shadow-sm rounded-xl text-gray-900 px-5 wood-bg min-h-24`} >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content glass rounded-box z-1 mt-3 w-52 p-2 shadow ">
            {navItems}
          </ul>
        </div>
        <a href="/" className="font-quicksand font-bold lg:text-5xl text-2xl drop-shadow-2xl text-nowrap nav-shadow">Furwood Campout</a>
      </div>
      <div className="navbar-end gap-4">
        <ul className="menu menu-horizontal px-1 hidden lg:flex uppercase underline font-amitic font-bold text-3xl">
          {navItems}
        </ul>
        <a href="https://t.me/+P9zbj7ikXyljYjRh" target="_blank"><img src={telegramIcon.src} className="w-8"></img></a>
      </div>
    </div>


  )
}