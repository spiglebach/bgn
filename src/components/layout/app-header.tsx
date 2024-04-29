'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import {Link} from "@/navigation";


export default function AppHeader() {

  return (
    <Navbar>
      <NavbarContent justify="center" className="mx-auto">
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit">BGN</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  )
}
