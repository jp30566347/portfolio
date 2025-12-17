import { PropsWithChildren } from "react";
import { NavBar } from "./NavBar";

export default async function AppLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <NavBar />
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1">
        {children}
      </div>
      <footer className="flex justify-center items-center py-8 print:hidden border-t border-primary-200 bg-primary-50 mt-16">
        <span className="text-sm text-primary-600">
          {new Date().getFullYear()} &#169; All Rights Reserved
        </span>
      </footer>
    </main>
  );
}
