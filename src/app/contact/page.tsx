import { permanentRedirect } from "next/navigation";

/** Greek contact content has one canonical home at /epikoinonia. */
export default function ContactPage() {
  permanentRedirect("/epikoinonia");
}
