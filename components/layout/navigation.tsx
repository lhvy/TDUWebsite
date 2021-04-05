import { container, item } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";

export default function Navigation() {
  const router = useRouter();
  const [isActive, setisActive] = useState(false);
  useEffect(() => {
    setisActive(false);
  }, [router]);

  const items: Array<any> = [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/team",
      label: "The Team",
    },
    {
      url: "/blog",
      label: "Blog",
    },
    {
      url: "/outreach",
      label: "Outreach",
    },
    {
      url: "/robots",
      label: "Robots",
    },
  ];

  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="/images/logo.svg" width="28" height="28" alt="logo" />
            </a>
          </Link>

          <a
            onClick={(e) => {
              e.preventDefault();
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="nav-menu"
            id="nav-toggle"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="nav-menu"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <motion.div
            className="navbar-start"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {items.map((navitem) => (
              <NavItem url={navitem.url} variants={item} key={navitem.url}>
                {navitem.label}
              </NavItem>
            ))}
          </motion.div>

          <div className="navbar-end">
            <div className="navbar-item has-text-centered ">
              <div className="buttons is-centered">
                <Link href="/contact">
                  <a className="button is-primary">
                    <strong>Contact us</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
