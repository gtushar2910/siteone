import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { Image } from "@nextui-org/react";
import Link from 'next/link';
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { useSession, signIn, signOut } from "next-auth/react";
import { ArrowRightCircleIcon, ArrowRightOnRectangleIcon, HomeIcon, KeyIcon, NewspaperIcon, PencilIcon, PhoneIcon, PresentationChartBarIcon, SparklesIcon, Square3Stack3DIcon, TableCellsIcon, TrophyIcon } from "@heroicons/react/24/solid";

function SideNavbar({ staff }) {

  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === 'loading';
  console.log("Session:", staff);
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-2 w-1/2 bg-green z-20  -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-center item-center">
            <div className="flex justify-center">
              <Image
                width={150}
                alt="NextUI hero Image"
                src={staff.photo}
              />
            </div>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <HomeIcon className="h-6 w-6 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  <Link href={`/Staff/${staff.email}`} size="sm">
                    Home
                  </Link>
                </h3>
              </div>

              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <Square3Stack3DIcon className="h-6 w-6 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                <Link href={`/Staff/subjects/${staff.email}`} size="sm">
                  Subjects
                  </Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <TableCellsIcon className="h-6 w-6 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                <Link href={`/Staff/timetables/${staff.email}`} size="sm">
                  Time Tables
                </Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <PencilIcon className="h-6 w-6 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  <Link href={`/Staff/profile/${staff.email}`} size="sm">
                    Publications
                  </Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <SparklesIcon className="h-6 w-6 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  <Link href={`/Staff/ews/${staff.email}`} size="sm">
                    Profile
                  </Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <PhoneIcon className="h-6 w-6 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                <Link href={`/Staff/contact/${staff.email}`} size="sm">
                  Contact
                  </Link>
                </h3>
              </div>
              {user ? (<> <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <KeyIcon className="h-6 w-6 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                <Link href={`/Staff/changepwd`} size="sm">
                  Change Password
                  </Link>
                </h3>
              </div></>) : (<></>)}
              {user ? (<> <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ArrowRightOnRectangleIcon className="h-6 w-6 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold" onClick={signOut}>
                  Sign Out
                </h3>
              </div></>) : (<> <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ArrowRightCircleIcon className="h-6 w-6 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold " onClick={signIn}>
                  Sign In
                </h3>
              </div></>)}
            </div>
            {/* setting  */}

            {/* logout */}

          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;