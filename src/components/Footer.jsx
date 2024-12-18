import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Built by{" "}
            <span className="underline text-blue">
              <a href="https://www.linkedin.com/in/issacsamalex">
                Issac Sam Alex
              </a>
            </span>{" "}
            The source code is available on{" "}
            <span className="underline text-blue">
              <a href="https://github.com/issacsamalex">GitHub</a>
            </span>
          </p>
          <p className="font-semibold text-gray text-xs">
            This webpage is a clone of the Apple iPhone 15 page, created solely
            for educational purposes. It is not affiliated with or endorsed by
            Apple Inc.
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024. This project is a non-commercial replica created
            for learning purposes.
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{" "}
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
