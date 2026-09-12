/**
 * The churches near the venue — single source of truth.
 *
 * These figures were previously duplicated across `Churches.tsx`,
 * `NearbyChurches.tsx`, the per-church landing pages, `llms.txt` and the
 * homepage FAQ, and had drifted apart: the site variously claimed four, five
 * and six churches, and listed Άγιος Αλέξανδρος at both "3,8 χλμ / 8′" and
 * "5,2 χλμ / 10′". Contradictory facts are quoted back by answer engines, so
 * every surface now reads from here.
 *
 * The list is the five churches that have their own page on the site. Distances
 * follow the per-church pages and llms.txt, which agreed with each other.
 */
export interface Church {
  readonly name: string;
  /** Settlement or landmark, as it is referred to locally. */
  readonly location: string;
  /** Driving distance from the venue, in Greek notation (comma decimal, χλμ). */
  readonly distance: string;
  /** Driving time in minutes, without a unit — the UI adds it. */
  readonly minutes: number;
  readonly href: string;
  /** Extra detail worth surfacing, where one is known. */
  readonly note?: string;
}

export const churches: readonly Church[] = [
  {
    name: 'Παναγία Γκαρικά',
    location: 'Κερατέα',
    distance: '3,1 χλμ',
    minutes: 6,
    href: '/el/ekklisies/panagia-gkarika',
  },
  {
    name: 'Αγία Τριάδα',
    location: 'Είσοδος Κερατέας',
    distance: '5 χλμ',
    minutes: 10,
    href: '/el/ekklisies/agia-triada',
  },
  {
    name: 'Άγιος Αλέξανδρος',
    location: 'Δασκαλειό',
    distance: '5,2 χλμ',
    minutes: 10,
    href: '/el/ekklisies/agios-alexandros-daskaleio',
    note: 'Παραθαλάσσιο, έως 170 άτομα',
  },
  {
    name: 'Άγιος Παντελεήμονας',
    location: 'Κακή Θάλασσα Κερατέας',
    distance: '8,6 χλμ',
    minutes: 13,
    href: '/el/ekklisies/agios-panteleimonas-keratea',
  },
  {
    name: 'Προφήτης Ηλίας',
    location: 'Θορικό',
    distance: '8,8 χλμ',
    minutes: 11,
    href: '/el/ekklisies/profitis-ilias-thoriko',
    note: 'Ιδανικό για ολιγομελείς τελετές 40–50 ατόμων',
  },
];

/** Used in copy and FAQ answers so the count can never drift again. */
export const CHURCH_COUNT = churches.length;

/** Driving-time range across the list, e.g. "6–13". */
export const CHURCH_MINUTES_RANGE = `${Math.min(
  ...churches.map((c) => c.minutes),
)}–${Math.max(...churches.map((c) => c.minutes))}`;
