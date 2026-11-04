import Request from '@/views/greek/Request';
import { buildMetadata } from '@/lib/seo/metadata';
export const metadata = buildMetadata({ title: 'Request a Wedding or Baptism Quote | Ktima Orion', description: 'Tell us your date, guest count and plans. Request a personal quote or arrange a free visit to Ktima Orion in Keratea, Attica. No commitment.', canonicalPath: '/en/request', lang: 'en' });
export default function Page() { return <Request lang="en" />; }
