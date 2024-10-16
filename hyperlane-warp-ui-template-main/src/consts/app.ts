import { Space_Grotesk } from 'next/font/google';

import { Color } from '../styles/Color';

export const MAIN_FONT = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'SHEO BRIDGE ';
export const APP_DESCRIPTION = 'Fast bridge powered by hyperlane, welcome to SHEO bridge';
export const APP_URL = 'hyperlane-sheo.vercel.app';
export const BRAND_COLOR = Color.primary;
export const BACKGROUND_COLOR = Color.primary;
export const BACKGROUND_IMAGE = 'url(/backgrounds/main.svg)';
export const PROXY_DEPLOYED_URL = 'https://proxy.hyperlane.xyz';
