import { Dispatch, Fragment, SetStateAction } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import { Dialog, Transition } from "@headlessui/react";

import ThemeSwitch from "@/components/utility/theme-switch";
import { type NavbarProps } from "@/layout/navbar";
import { classNames } from "@/utility/classNames";

export interface MobileMenuProps extends NavbarProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
  openMenu,
  routes,
  setOpenMenu,
}: MobileMenuProps) {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = (href: string) => {
    setOpenMenu(false);
    router.push(href);
  };

  return (
    <Transition show={openMenu} as={Fragment}>
      <Dialog as="div" className="z-50" onClose={setOpenMenu}>
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full" 
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 flex w-[80%] max-w-xs flex-col bg-black text-white shadow-xl">
            <div className="flex h-full flex-col items-start gap-8 p-6">
              <div className="flex w-full justify-end">
                <button
                  onClick={() => setOpenMenu(false)}
                  className="text-accent focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-6 text-xl">
                {routes.map((link, i) => (
                  <button
                    key={i}
                    className="relative py-2 text-xl font-medium w-full text-left"
                    onClick={() => handleClick(link.href)}
                  >
                    <span
                      className={classNames(
                        pathName === link.href ? "w-full" : "w-0",
                        "absolute bottom-0 left-0 h-1 rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"
                      )}
                    ></span>
                    {link.title}
                  </button>
                ))}
              </div>
              <div className="mt-auto">
                <ThemeSwitch setClose={setOpenMenu} />
              </div>
              <div className="absolute bottom-6 text-center w-full">
                ©2024 Gauresh G Pai
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
