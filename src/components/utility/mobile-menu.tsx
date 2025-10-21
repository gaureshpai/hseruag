import { Dispatch, Fragment, SetStateAction } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import ThemeSwitch from "@/components/utility/theme-switch";

export default function MobileMenu() {
  const router = useRouter();

  return (
    <Transition as={Fragment}>
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
              <div className="mt-auto">
                <ThemeSwitch />
              </div>
              <div className="absolute bottom-6 text-center w-full">
                ©2024 Gauresh G Pai
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
    </Transition>
  );
}
