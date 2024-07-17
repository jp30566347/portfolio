import { headers } from "next/headers";

export function getServerPathname() {
    const headerList = headers();
    return headerList.get("x-current-path") ?? "";
}
