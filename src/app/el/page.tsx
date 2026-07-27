import { permanentRedirect } from "next/navigation";

/** The Greek homepage lives at the root; keep this legacy URL from competing with it. */
export default function ElHomePage() {
  permanentRedirect("/");
}
