import { PropsWithChildren } from "react";
import { NavBar } from "./NavBar";

export default async function AppLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="mx-auto max-w-5xl">{children}</div>
      <footer className="flex justify-center items-center py-8 print:hidden">
        <span className="text-xs">
          {new Date().getFullYear()} &#169; All Rights Reserved
        </span>
      </footer>
    </main>
  );
}
