"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowsPointingOutIcon,
  Bars3Icon,
  BoltIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  HeartIcon,
  SparklesIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import Link from "next/link";

const genres = [
  {
    name: "Action",
    description:
      "High-energy narratives filled with excitement, conflict, and dynamic sequences.",
    href: "#",
    icon: BoltIcon,
    bghoverColor: "bg-teal-50",
    hoverColor: "group-hover:text-teal-500",
  },
  {
    name: "Romance",
    description:
      "Heartfelt stories of love and relationships that capture the complexities of the human heart.",
    href: "/genre/romance",
    icon: HeartIcon,
    bghoverColor: "bg-red-50",
    hoverColor: "group-hover:text-pink-500",
  },
  {
    name: "Fantasy",
    description:
      "Enchanting tales set in worlds where magic and mythical beings exist.",
    href: "#",
    icon: SparklesIcon,
    bghoverColor: "bg-red-50",
    hoverColor: "group-hover:text-purple-500",
  },
  {
    name: "Slice of Life/Drama",
    description:
      "Realistic narratives that explore the everyday lives and emotional journeys of characters.",
    href: "#",
    icon: FaceFrownIcon,
    bghoverColor: "bg-red-50",
    hoverColor: "group-hover:text-blue-300",
  },
  {
    name: "Comedy",
    description:
      "Light-hearted tales infused with humor to entertain and amuse.",
    href: "#",
    icon: FaceSmileIcon,
    bghoverColor: "bg-red-50",
    hoverColor: "group-hover:text-yellow-500",
  },
  {
    name: "Boys Love",
    description:
      "Romantic and emotional stories focusing on relationships between male characters.",
    href: "#",
    icon: HeartIcon,
    bghoverColor: "bg-red-50",
    hoverColor: "group-hover:text-red-500",
  },
  {
    name: "View All",
    description: "View all Genre's'",
    href: "#",
    icon: ArrowsPointingOutIcon,
    bghoverColor: "bg-red-50",
    hoverColor: "group-hover:text-blackberry-300",
  },
];

const callsToAction = [
  { name: "New Releases", href: "#", icon: PlayCircleIcon },
  { name: "Reach Us", href: "#", icon: PhoneIcon },
  { name: "View All Novels and Comics", href: "#", icon: RectangleGroupIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="isolate z-10 backdrop-blur-sm bg-white bg-opacity-80 w-full py-4 2xl:px-32 xl:px-32 lg:px-12 fixed top-0 border-b-1">
      <nav className="flex w-full items-center" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Pinya</span>
            <svg
              width="95"
              height="24"
              viewBox="0 0 95 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7225 7.51161C18.7225 10.7696 15.8542 13.7837 12.04 14.6703C10.3252 15.0692 8.58523 15.2743 6.85155 14.9141C6.0698 14.7535 6.0635 15.1303 6.01307 15.518C5.86807 16.6096 5.77351 17.7011 5.65372 18.7927C5.54656 19.8177 5.4646 20.8428 5.3133 21.8623C5.06742 23.4912 2.9807 24.4609 1.26592 23.7793C0.339191 23.4081 -0.0958056 22.6048 0.0176719 21.6905C0.295062 19.5129 0.522017 17.3299 0.780493 15.1468C1.07049 12.6701 1.3668 10.1934 1.6694 7.71663C1.81441 6.53643 1.87744 5.34516 2.18005 4.18713C2.87982 1.52755 4.41177 0.369527 7.5261 0.048161C11.605 -0.37848 16.6737 2.08717 18.1552 5.15677C18.5397 5.94911 18.7856 6.75807 18.7225 7.51161ZM8.91935 10.4039C10.1865 10.4039 11.2015 10.1878 12.0715 9.72793C13.7674 8.83587 13.9817 7.26228 12.5948 6.04884C11.5483 5.14015 10.2622 4.6858 8.8374 4.50296C7.82241 4.36999 7.19197 4.81324 7.08481 5.71639C6.94611 6.91875 6.88937 8.12664 6.74437 9.32899C6.66872 9.9828 6.85785 10.2986 7.67741 10.3153C8.08089 10.3263 8.50328 10.3984 8.91935 10.4039Z"
                fill="#807CCC"
              />
              <path
                d="M21.0134 19.2099C21.3617 14.1761 21.7222 9.35505 22.3088 4.55073C22.4188 3.67823 22.4677 2.79455 22.651 1.93883C22.9871 0.367215 25.0585 -0.477319 26.6045 0.28332C27.4784 0.713976 27.7655 1.41309 27.6739 2.26321C27.515 3.80687 27.3195 5.34492 27.1667 6.88299C26.9223 9.34387 26.684 11.8104 26.4702 14.2768C26.3295 15.8876 26.2624 17.5096 26.1341 19.1203C26.0301 20.4235 24.7591 21.4023 23.3171 21.3295C21.8383 21.2512 20.9644 20.3676 21.0011 19.2043L21.0134 19.2099Z"
                fill="#E55456"
              />
              <path
                d="M42.6549 11.0499C43.4411 8.00004 44.1203 4.96103 44.5983 1.89503C44.8185 0.502373 45.5544 -0.0644056 47.0575 0.00576695C48.479 0.0705416 49.7872 1.11233 49.7306 2.29447C49.6803 3.37945 49.4538 4.46443 49.2463 5.5386C48.3971 9.98107 47.4161 14.402 46.3027 18.8012C45.9694 20.1183 45.0448 20.82 43.548 20.8308C42.441 20.8363 41.7366 20.4368 41.2964 19.5623C40.3592 17.7163 39.4283 15.8756 38.4849 14.0349C38.3717 13.8189 38.3214 13.5652 38.0321 13.3872C37.3717 15.7945 36.7552 18.1804 36.2521 20.5879C35.9754 21.9104 35.4156 22.4609 34.1766 22.6391C32.4784 22.8875 30.7174 21.4137 31.0381 19.9725C32.0822 15.2171 33.3086 10.4939 34.818 5.83009C35.164 4.75591 36.1641 4.09737 37.4408 4.04879C38.6484 4.0002 39.3026 4.43204 39.8811 5.58179C40.7931 7.40627 41.7366 9.21996 42.6612 11.0391L42.6549 11.0499Z"
                fill="#EDA406"
              />
              <path
                d="M62.7019 13.996C61.3161 14.3337 60.0297 14.4677 58.7558 14.2319C55.6921 13.6583 53.952 11.9108 53.2996 9.35926C52.6408 6.79165 53.1193 4.28836 54.2379 1.8762C54.878 0.482501 56.3521 -0.374638 57.8063 0.161398C59.2915 0.708155 59.6196 2.24606 59.023 3.62368C58.3767 5.10313 57.8609 6.61476 58.2151 8.22822C58.5445 9.73449 59.9054 10.3348 61.5025 9.65408C62.795 9.10197 63.777 8.22822 64.3859 7.13472C64.852 6.29849 64.7278 5.31218 64.8956 4.39557C65.0446 3.5647 65.1069 2.72313 65.2435 1.88692C65.461 0.536105 66.5547 -0.144662 68.1581 0.0429511C69.5811 0.209122 70.5382 1.32944 70.3765 2.56232C70.0285 5.24786 69.7925 7.94413 69.2269 10.6029C68.5992 13.5725 67.6423 16.4349 65.2498 18.7775C64.2679 19.7369 63.0871 20.482 61.7448 21.0395C60.3094 21.6345 59.054 21.3129 58.4015 20.1925C57.6868 18.9651 58.1032 17.6303 59.4704 17.046C60.8499 16.4564 61.8567 15.5933 62.5154 14.4087C62.5713 14.3123 62.6086 14.2051 62.7019 13.9907V13.996Z"
                fill="#01B27E"
              />
              <path
                d="M89.3944 16.1061C89.3944 17.4508 89.3944 18.8009 89.3944 20.1455C89.3944 21.4901 88.4678 22.3553 86.9015 22.46C85.3941 22.5592 84.1282 21.7161 83.9846 20.41C83.8671 19.3464 83.8606 18.2664 83.8671 17.1973C83.8671 16.7179 83.6779 16.5801 83.1166 16.5745C81.7593 16.5636 80.4019 16.5195 79.0512 16.4313C78.4834 16.3983 78.2811 16.5856 78.1963 17.0044C77.9287 18.2608 77.6286 19.5117 77.3675 20.7683C77.0673 22.19 76.1668 22.8017 74.5745 22.6419C73.0671 22.4876 71.7879 21.2697 72.0295 20.0684C72.8321 16.04 73.7718 12.0337 75.7556 8.27539C77.0543 5.82311 78.627 3.5086 81.0219 1.67352C81.9094 0.990195 82.8948 0.433611 84.0629 0.141542C85.6161 -0.24421 86.8493 0.158073 87.639 1.35391C88.5591 2.74812 88.781 4.29664 88.8854 5.84516C89.1138 9.26181 89.2247 12.684 89.3878 16.1116L89.3944 16.1061ZM83.704 6.47337C83.5995 6.45684 83.4951 6.44032 83.3908 6.42379C81.942 7.95577 80.8718 9.6696 80.0496 11.5047C79.906 11.8243 80.043 11.9125 80.3955 11.918C81.2894 11.929 82.1835 11.929 83.071 11.9731C83.5604 11.9951 83.717 11.8794 83.7104 11.4496C83.6779 9.79084 83.6975 8.13211 83.6975 6.47337H83.704Z"
                fill="#00A4B8"
              />
            </svg>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <Popover.Button className="hover:opacity-90 text-blackberry-300 flex text-base font-quicksand font-bold items-center gap-x-1 leading-6">
              Genre's
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 -z-10 pt-14 shadow-lg ring-1 ring-gray-900/5 bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {genres.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white`}
                      >
                        <item.icon
                          className={`h-6 w-6 text-gray-600 ${item.hoverColor}`}
                          aria-hidden="true"
                        />
                      </div>
                      <a
                        href={item.href}
                        className="mt-6 block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-t border-gray-900/5">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="flex h-[.5px] w-full">
                      <div className="w-full flex-none blur-none h-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#807CCC,#23c986_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-6px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#807CCC,#23c986_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href={"/novels"}
            className="hover:opacity-90 text-blackberry-300 text-base font-quicksand font-bold leading-6"
          >
            Novels
          </Link>
          <Link
            href={"/novels"}
            className="hover:opacity-90 text-blackberry-300 text-base font-quicksand font-bold leading-6"
          >
            Originals
          </Link>
          <Link
            href={"https://www.studiopinya.com"}
            className="hover:opacity-90 text-blackberry-300 text-base font-quicksand font-bold leading-6"
          >
            Studio
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <Link
            href={"/artist-form"}
            className="text-white font-quicksand font-semibold rounded-md bg-blackberry-300 px-3.5 py-2.5 text-base shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Upload Works
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.8153 0H5.18472C2.32128 0 0 2.32128 0 5.18472V44.8153C0 47.6787 2.32128 50 5.18472 50H44.8153C47.6787 50 50 47.6787 50 44.8153V5.18472C50 2.32128 47.6787 0 44.8153 0Z"
                  fill="#231F44"
                />
                <path
                  d="M36.133 20.0525C36.133 23.5894 32.743 26.8616 28.2354 27.8239C26.2088 28.257 24.1524 28.4795 22.1035 28.0886C21.1796 27.9142 21.1721 28.3232 21.1125 28.7443C20.9411 29.9292 20.8294 31.1141 20.6879 32.2991C20.5612 33.4119 20.4643 34.5247 20.2855 35.6314C19.995 37.3999 17.5288 38.4526 15.5022 37.7127C14.407 37.3097 13.8929 36.4374 14.027 35.445C14.3548 33.081 14.623 30.7111 14.9285 28.3413C15.2712 25.6524 15.6214 22.9638 15.9791 20.2751C16.1505 18.9938 16.2249 17.7007 16.5825 16.4434C17.4096 13.5562 19.2201 12.2991 22.9006 11.9502C27.7213 11.4871 33.7116 14.1638 35.4624 17.4961C35.917 18.3563 36.2075 19.2344 36.133 20.0525ZM24.5473 23.1924C26.0448 23.1924 27.2443 22.9578 28.2726 22.4585C30.2768 21.4901 30.5302 19.7818 28.891 18.4645C27.6542 17.478 26.1343 16.9848 24.4504 16.7863C23.2509 16.642 22.5058 17.1231 22.3792 18.1036C22.2152 19.4089 22.1482 20.7202 21.9768 22.0255C21.8874 22.7352 22.111 23.078 23.0794 23.0961C23.5563 23.1082 24.0556 23.1864 24.5473 23.1924Z"
                  fill="white"
                />
              </svg>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="font-quicksand font-bold flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-50">
                        Genres
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...genres].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="font-quicksand font-bold block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block font-quicksand font-bold rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Novels
                </a>
                <a
                  href="#"
                  className="font-quicksand font-bold -mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Originals
                </a>
              </div>
              <div className="py-6">
                <a
                  href=""
                  className="font-quicksand font-bold -mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Studio
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
