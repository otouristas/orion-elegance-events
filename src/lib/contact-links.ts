/**
 * Outbound contact links.
 *
 * Centralised so the mobile menu, the floating contact button and the footer
 * all send people to the same places with the same pre-filled text. The mobile
 * number is the one that carries WhatsApp and Viber; the landline is for calls.
 */

/** Mobile line, in international format without punctuation (wa.me wants this). */
export const WHATSAPP_NUMBER = '306981889560' as const;

export const MOBILE_TEL = '+306981889560' as const;
export const LANDLINE_TEL = '+302299068812' as const;

/** Display forms, grouped the way Greek numbers are normally read aloud. */
export const LANDLINE_DISPLAY = '22990 68812' as const;
export const MOBILE_DISPLAY = '698 188 9560' as const;

const DEFAULT_MESSAGE_EL =
  'Γεια σας! Θα ήθελα πληροφορίες και διαθεσιμότητα για εκδήλωση στο Κτήμα Ωρίων.';
const DEFAULT_MESSAGE_EN =
  'Hello! I would like information and availability for an event at Ktima Orion.';

/**
 * A WhatsApp deep link with the first message already written.
 *
 * Pre-filling matters: the opening message is the point most people abandon,
 * and a prompt naming the event type gets a far more useful first reply than
 * an empty thread.
 */
export function whatsappUrl(message?: string, lang: 'el' | 'en' = 'el'): string {
  const text = message ?? (lang === 'en' ? DEFAULT_MESSAGE_EN : DEFAULT_MESSAGE_EL);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function viberUrl(): string {
  return `viber://chat?number=${encodeURIComponent(MOBILE_TEL)}`;
}

/** Pre-filled openers for the event types the venue actually sells. */
export const WHATSAPP_PRESETS_EL = {
  wedding:
    'Γεια σας! Ενδιαφέρομαι για γάμο στο Κτήμα Ωρίων. Θα ήθελα διαθεσιμότητα και τιμές.',
  baptism:
    'Γεια σας! Ενδιαφέρομαι για βάπτιση στο Κτήμα Ωρίων. Θα ήθελα πακέτα και τιμές.',
  corporate:
    'Γεια σας! Ενδιαφέρομαι για εταιρική εκδήλωση στο Κτήμα Ωρίων.',
} as const;
