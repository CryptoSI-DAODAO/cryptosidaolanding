import Link from "next/link";
import { DaoLogo } from "./icons";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t py-6 sm:py-8 w-full bg-card">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start order-2 md:order-1">
          <Link href="/" className="flex items-center space-x-2 mb-3 sm:mb-4">
            <DaoLogo className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <Image
              src="/images/crddlogotrans1.png"
              alt="CryptoSI DAO"
              width={100}
              height={20}
              className="h-5 w-auto sm:h-6 sm:w-auto"
            />
          </Link>
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} CryptoSI DAO. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end order-1 md:order-2">
          <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Follow Us</h3>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4">
            <Link
              href="https://twitter.com/Crypto_SI"
              className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-muted/50"
              target="_blank" rel="noopener noreferrer"
            >
              Twitter
            </Link>
            <Link
              href="https://www.instagram.com/cryptosi.eth/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-muted/50"
              target="_blank" rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <Link
              href="https://discord.gg/VSPUucsyvn"
              className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-muted/50"
              target="_blank" rel="noopener noreferrer"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
