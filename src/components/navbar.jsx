import { Button, Navbar } from "flowbite-react";

export default () => {
  return (
    <Navbar fluid rounded className="w-full bg-secondary-50">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Furwood Campout</span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Tickets</Navbar.Link>
        <Navbar.Link href="#">Telegram</Navbar.Link>
        <Navbar.Link href="#">Schedule</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}