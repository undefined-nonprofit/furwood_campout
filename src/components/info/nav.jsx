export default () => {
    const navItems = [
        { label: "General", link: "/info/general" },
        { label: "Map", link: "/info/map" },
        { label: "Sponsors", link: "/info/sponsors" }
    ]
        .map(item => (<li><a href={item.link}>{item.label}</a></li>))

    return (
        <ul
            class="menu text-2xl w-full bg-amber-100/80 text-gray-900 justify-around rounded-box lg:menu-horizontal"
        >
            {navItems}
        </ul>
    )



}
