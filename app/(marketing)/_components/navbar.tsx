"use client";

import useScrollTop from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [didUserScroll] = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        didUserScroll && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <Button variant="ghost" size="sm">
          Login
        </Button>
        <Button variant="ghost" size="sm">
          Register
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
