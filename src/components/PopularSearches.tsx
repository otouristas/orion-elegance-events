import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
interface SearchLink { label:string; href:string; }
export const PopularSearches=({links}:{links:SearchLink[]})=><section className="border-t border-border bg-cream py-10"><div className="container-max"><h2 className="mb-5 font-heading text-2xl">Συνεχίστε τον σχεδιασμό</h2><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{links.filter((link,index,items)=>items.findIndex(item=>item.href===link.href)===index).map(link=><Link href={link.href} key={link.href} className="flex min-h-14 items-center justify-between gap-4 border-b border-brand-main/25 py-3 text-sm"><span>{link.label}</span><ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>)}</div></div></section>;
