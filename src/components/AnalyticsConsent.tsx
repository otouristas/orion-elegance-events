'use client';
import { useEffect,useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { CONSENT_EVENT } from '@/components/CookieConsent';
export function AnalyticsConsent(){const [allowed,setAllowed]=useState(false);useEffect(()=>{try{setAllowed(localStorage.getItem('cookieConsent')==='accepted');}catch{/* Analytics stays disabled without an explicit choice. */}const update=(event:Event)=>setAllowed((event as CustomEvent<string>).detail==='accepted');window.addEventListener(CONSENT_EVENT,update);return()=>window.removeEventListener(CONSENT_EVENT,update);},[]);return allowed?<GoogleAnalytics gaId="G-R3D1HPVZYG" />:null;}
