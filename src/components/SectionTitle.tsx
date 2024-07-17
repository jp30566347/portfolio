import { PropsWithChildren } from "react";

export function SectionTitle({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-center text-primary/50">{children}</span>
      <hr className="border-primary w-20 border-secondary" />
    </div>
  );
}
