import { FAQ } from '@/components/FAQ';
export const FAQEn = ({items,title='Frequently Asked Questions'}:{items:{question:string;answer:string}[];title?:string}) => <FAQ items={items} title={title} />;
