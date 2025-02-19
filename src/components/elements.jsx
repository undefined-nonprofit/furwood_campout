
export const Heading1 = ({ children }) => (
    <h1
        className="mb-4 text-med font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-xl lg:text-3xl"
    >{children}</h1>
)

export const P = ({ children }) => (
    <p
        className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48"
    >{children}</p>
)