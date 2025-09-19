"use client";
import React, { useEffect, useState } from 'react'
import Button from '../base/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '../base/sheet';
import { Menu } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";


export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];


export default function Header() {

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // close sidebar when route changes
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);


  return (
    <div className='bg-white sticky top-0 z-[100]'>
      <div className='py-6 theme-container md:py-8 px-4 lg:px-0   flex justify-between items-center'>
        <div className='ml-8'>
          <div className='h-10 w-10'>
            <Link href={"/"}>
              <Image
                src={"/assets/logo.png"}
                alt="logo"
                className="scale-[3]"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
        <div className='hidden md:flex gap-4 md:gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-gray-600 hover:text-orange-600 hover:font-bold px-2 py-1 rounded-full",
                pathname === link.href && "font-bold text-orange-600 bg-orange-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className='flex gap-2'>
          <Link href={"tel:9482658028"} className='w-full'>
            <Button color={"blue"} className={"text-white !rounded px-8 py-2"}>Call now</Button>
          </Link>

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-6">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-gray-600 hover:text-orange-600 hover:font-bold px-2 py-1 rounded-full",
                        pathname === link.href && "font-bold text-orange-600 bg-orange-100"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
}
