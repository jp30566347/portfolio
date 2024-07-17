import { PropsWithChildren } from "react";
import { NavBar } from "./NavBar";

export default async function AppLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="mx-auto max-w-3xl my-12">{children}</div>
      <footer className="flex justify-center items-center">
        <span className="test-xs text-primary/50">
          {new Date().getFullYear()} &#169; All Rights Reserved
        </span>
      </footer>
    </main>
  );
}
