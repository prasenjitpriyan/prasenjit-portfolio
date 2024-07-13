"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href={"/projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects" />
        </Link>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
