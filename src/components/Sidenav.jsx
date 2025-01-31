import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import gsap from "gsap";

function Sidenav() {
    const [open, setOpen] = useState(true);
    const sideNav = useRef(null);

    // Effect for GSAP animation
    useEffect(() => {
        gsap.to(sideNav.current, {
            x: open ? 0 : -sideNav.current.clientWidth,
            duration: 1,
            opacity: open ? 1 : 0.1,
            ease: "power4",
        });
    }, [open]);

    // Adding event listener once and removing it on component unmount
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (e.clientX < 80 && !open) {
                setOpen(true);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove); // Cleanup
    }, [open]); // Only re-run if `open` changes

    const closeSidenav = () => setOpen(false);

    return (
        <div
            className="fixed z-10 top-0 left-0 bg-neutral-900 text-neutral-300 h-screen w-full sm:w-1/2 md:w-[40vw] xl:w-[25vw] px-2 py-4"
            ref={sideNav}
        >
            <div className="flex justify-end">
                <IoMdClose size={35} onClick={closeSidenav} />
            </div>
            <Link
                className="bg-neutral-800 flex items-center justify-center gap-4 text-center py-3 text-2xl hover:bg-neutral-700 rounded my-4 transition-all ease-linear duration-200 focus-within:bg-neutral-500 "
                to={"/"}
            >
                <IoHomeOutline />
                Home
            </Link>
            <Link
                className="bg-neutral-800 flex items-center justify-center gap-4 text-center py-3 text-2xl hover:bg-neutral-700 rounded my-4 transition-all ease-linear duration-200 focus-within:bg-neutral-500 "
                to={"/create"}
            >
                <FaRegPlusSquare />
                Create
            </Link>
            <Link
                className="bg-neutral-800 flex items-center justify-center gap-4 text-center py-3 text-2xl hover:bg-neutral-700 rounded my-4 transition-all ease-linear duration-200 focus-within:bg-neutral-500 "
                to={"/"}
            >
                <MdOutlineExplore />
                Explore
            </Link>
            <Link
                className="bg-neutral-800 flex items-center justify-center gap-4 text-center py-3 text-2xl hover:bg-neutral-700 rounded my-4 transition-all ease-linear duration-200 focus-within:bg-neutral-500 "
                to={"/"}
            >
                <IoMdNotificationsOutline />
                Notifications
            </Link>
        </div>
    );
}

export default Sidenav;
