import { Carousel } from "flowbite-react";

export default ({ children }) => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-fit">
            <Carousel leftControl={<></>} rightControl={<></>}>
                {children}
            </Carousel>
        </div>
    );
}
