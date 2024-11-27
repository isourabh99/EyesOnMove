import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className='relative h-[95vh] w-full bg-[url("https://static.wixstatic.com/media/f1c650_10e77c413342412685841ff5dd6d1a45~mv2.jpg/v1/fill/w_1861,h_898,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Anzo%20Contact%20Background.jpg")] rounded-3xl bg-center bg-cover my-10'>
      <nav className="text-gray-200 flex px-8 py-4 items-center justify-between">
        <section>
          <img
            src="https://static.wixstatic.com/media/f1c650_cfcf7a440ecb42638673a332bedeb40b~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Me%20Branded%20Pic.png"
            className="w-[5vw]"
          />
        </section>
        <section className="gap-6 flex">
            <Link className="text-[3vw] hover:text-white font-bold" to="/">#</Link>
            <Link className="text-[3vw] hover:text-white font-bold" to="/">@</Link>
            <Link className="text-[3vw] hover:text-white font-bold" to="/">$</Link>
        </section>
      </nav>
      {/* center image */}
      <div className="w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="https://static.wixstatic.com/media/f1c650_cfcf7a440ecb42638673a332bedeb40b~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Me%20Branded%20Pic.png"
          className="w-[30vw]"
        />
      </div>
      {/* Links */}
      <div className="text-white text-lg font-bold absolute bottom-20 left-20 flex flex-col">
        <Link
          to="/contact"
          className="hover:text-gray-200 transition-colors duration-200"
        >
          <span className="text-gray-300 mr-2"># </span>+91 12561235566
        </Link>
        <Link
          to="/email"
          className="hover:text-gray-200 transition-colors duration-200"
        >
          <span className="text-gray-300 mr-2">@ </span>lorem.lorem.co.in
        </Link>
        <Link
          to="/website"
          className="hover:text-gray-200 transition-colors duration-200"
        >
          <span className="text-gray-300 mr-2">$ </span> lorem.studio
        </Link>
      </div>

      {/* Tag */}
      <div className=" text-white absolute right-20 bottom-60">
        <h1 className="uppercase text-[6vw] text-gray-400 font-semibold tracking-tighter leading-none">
          lorem
        </h1>
        <h1 className="uppercase text-[3vw] right-0 absolute mt-4 font-semibold tracking-tighter leading-none">
          [lorem]
        </h1>
      </div>
    </div>
  );
}

export default Contact;
