import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DaoLogo } from "@/components/icons";
import { Menu, Wallet } from "lucide-react";
import Image from "next/image";
import { WalletConnectionPopup } from "@/components/wallet-connection-popup";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#reporting", label: "Reporting" },
  { href: "#governance", label: "Governance" },
  // { href: "#staking", label: "Staking" },
  { href: "#proposals", label: "Proposals" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "/developers", label: "Developers" },
  { href: "#join", label: "Join" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center">
        <div className="mr-2 sm:mr-4 flex items-center">
          <Link href="/" className="mr-3 sm:mr-6 flex items-center space-x-2">
            <DaoLogo className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <Image
              src="/images/crddlogotrans1.png"
              alt="CryptoSI DAO"
              width={100}
              height={20}
              className="hidden sm:inline-block h-5 w-auto sm:h-6 sm:w-auto"
            />
          </Link>
          <nav className="hidden sm:flex space-x-4 md:space-x-6 text-xs sm:text-sm font-medium">
            {navLinks.slice(0, 5).map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-primary whitespace-nowrap"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-1 sm:space-x-2">
          <WalletConnectionPopup>
            <Button size="sm" className="hidden sm:inline-flex text-sm">
              <Wallet className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Connect Wallet</span>
              <span className="sm:hidden">Connect</span>
            </Button>
          </WalletConnectionPopup>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 md:hidden">
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[85vw] md:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center pb-4">
                    <Link href="/" className="flex items-center space-x-3">
                        <DaoLogo className="h-8 w-8 text-primary" />
                        <Image
                          src="/images/crddlogotrans1.png"
                          alt="CryptoSI DAO"
                          width={140}
                          height={28}
                          className="h-7 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex flex-col space-y-3 sm:space-y-4 mt-6 overflow-y-auto flex-1">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-base sm:text-lg font-medium transition-colors hover:text-primary py-2 px-1 rounded-md hover:bg-muted/50"
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <WalletConnectionPopup>
                    <Button className="w-full h-12 text-base">
                      <Wallet className="mr-3 h-5 w-5" />
                      Connect Wallet
                    </Button>
                  </WalletConnectionPopup>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
