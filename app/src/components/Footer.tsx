import React from "react";
import { Gamepad2, Copyright } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-950 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Gamepad2 className="h-6 w-6 text-gaming-accent mr-2" />
            <span className="text-lg font-display font-bold tracking-wide">
              LION DUBAI
            </span>
          </div>

          <div className="flex items-center text-secondary-400 text-sm">
            <Copyright className="h-4 w-4 mr-1" />
            <span>
              {new Date().getFullYear()} Lion Dubai Gaming. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
