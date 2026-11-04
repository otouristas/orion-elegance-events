/** All website forms share the validated, same-origin transactional endpoint. */
export const FORMSPREE_FORM_ACTION = '/api/send-email' as const;
export async function submitToFormspree(fields: Record<string, string | undefined>): Promise<Response> {
  const payload = { ...fields, requestId: fields.requestId || crypto.randomUUID(), lang: fields.lang || (window.location.pathname.startsWith('/en') ? 'en' : 'el') };
  return fetch(FORMSPREE_FORM_ACTION, { method:'POST', headers:{ Accept:'application/json', 'Content-Type':'application/json' }, body:JSON.stringify(payload), signal:AbortSignal.timeout(25000) });
}
