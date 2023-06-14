/* eslint-disable react/prop-types */
import { FaMapMarker, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  footerNavLinkData,
  footerSocialLinkData,
} from "../../data/footerLInkData";
import logo from "../../assets/logo-2.png";

function Footer() {
  return (
    <footer className="">
      {/* Top */}
      <div className="spacing-x py-20 flex flex-col items-center lg:items-start justify-center lg:flex-row lg:justify-between gap-16">
        {/* Top left */}
        <div className="left max-w-md lg:flex-1">
          <div className="w-[200px]">
            <img src={logo} className="w-full" alt="logo" />
          </div>
          <p className="mb-8">The new Propety Market Technology...</p>
          <ul className="flex flex-col gap-4 font-semibold">
            <li className="flex items-center gap-6">
              <FaMapMarker />
              <span>
                Bilge Tatli Street, Ozankoy road.Girne(Kyrenia),Cyprus
              </span>
            </li>
            <li className="flex items-center gap-6">
              <FaPhoneAlt />
              <span>(+90) 553 - 822 - 4771</span>
            </li>
            <li className="flex items-center gap-6">
              <FaEnvelope />
              <span>Contact@Homigram.com</span>
            </li>
          </ul>
        </div>
        {/* Top middle */}
        <div className="middle max-w-md lg:flex-1">
          <h2 className="text-xl font-semibold mb-8">Our Location</h2>
          <div className="h-[200px] w-full border"></div>
        </div>
        {/* Top Right */}
        <ul className="right max-w-md lg:flex-1">
          <li className="heading">
            <h2 className="text-xl font-semibold mb-8">About</h2>
          </li>
          <div className="flex flex-col gap-2">
            {footerNavLinkData.map((item) => {
              return <FooterNavLink key={item.name} item={item} />;
            })}
          </div>
        </ul>
      </div>
      {/* Bottom */}
      <div className="spacing-x bg-color-primary-dark-2 flex items-center flex-col gap-6 md:flex-row justify-center md:justify-between py-6">
        {/* Bottom Left */}
        <ul className="flex text-lg items-center gap-8">
          {footerSocialLinkData.map((item) => (
            <FooterSocialLink key={item.name} item={item} />
          ))}
        </ul>
        {/* Bottom Right */}
        <p className="right">Copyright 2023 Homigram.com with</p>
      </div>
    </footer>
  );
}

export default Footer;

function FooterSocialLink({ item }) {
  return (
    <li>
      <a
        href={item.link}
        className=" text-[#d2d2d2] hover:text-color-white duration-300"
      >
        <item.Icon />
      </a>
    </li>
  );
}
function FooterNavLink({ item }) {
  return (
    <li>
      <a href={item.link} className="">
        {item.name}
      </a>
    </li>
  );
}
