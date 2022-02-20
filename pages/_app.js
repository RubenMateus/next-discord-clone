import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Icons from "components/Icons";
import { data } from "data";
import Image from 'next/image'

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen text-gray-100">
          <div className="hidden p-3 space-y-2 overflow-auto bg-gray-900 md:block">
            <NavLink href="/">
              <Icons.Discord className="h-5 w-7" />
            </NavLink>

            <hr className="border-t-white/[.06] border-t-2 rounded mx-2" />

            {data.map((server) => (
              <NavLink
                href={`/servers/${server.id}/channels/${server?.categories[0]?.channels[0]?.id}`}
                active={router.query.sid === server.id}
                key={server.id}
              >
                <Image layout="fill" src={`/servers/${server.img}`} alt="" />
              </NavLink>
            ))}
          </div>

        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

function NavLink({ href, active, children }) {
  let router = useRouter();
  active ||= router.asPath === href;

  return (
    <Link href={href}>
      <a className="relative block group">
        <div className="absolute flex items-center h-full -left-3">
          <div
            className={`${
              active
                ? "h-10"
                : "h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100"
            } w-1 transition-all duration-200 origin-left bg-white rounded-r`}
          ></div>
        </div>

        <div className="group-active:translate-y-px">
          <div
            className={`${
              active
                ? "rounded-2xl bg-brand text-white"
                : "text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white bg-gray-700 rounded-3xl"
            } flex items-center justify-center w-12 h-12 transition-all duration-200 overflow-hidden`}
          >
            {children}
          </div>
        </div>
      </a>
    </Link>
  );
}
