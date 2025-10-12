export const RELAY_URL: string = process.env.NEXT_PUBLIC_RELAY_URL!;
export const EXPLORER_URL: string = process.env.NEXT_PUBLIC_EXPLORER_URL!;
export const PAYER_PUBLIC_KEY: string = process.env.NEXT_PUBLIC_PAYER_PUBLIC_KEY!;
export const WORK_PROVIDER_PUBLIC_KEY: string = process.env.NEXT_PUBLIC_WORK_PROVIDER_PUBLIC_KEY!;
export const ELECTRUM_API_URL: string = `${EXPLORER_URL}/api`;
export const IS_ADMIN_MODE: boolean = process.env.NEXT_PUBLIC_ADMIN_MODE === 'true'!;

export const SOCIAL_URLS: Record<string, string> = {
  github: 'https://github.com/fpoolnet',
  x: 'https://x.com/fpool2pow'
};

export const FAQ_LINKS: Record<string, string> = {
  shareNote: 'https://sharenote.xyz',
  nostr: 'https://nostr.com',
  relayGuide: 'https://github.com/nostr-protocol/nostr#relays',
  templateReview: 'https://docs.sharenote.com/template-review',
  wofPaper: 'https://docs.flokicoin.org/wof',
  sharenoteFep: 'https://docs.flokicoin.org/wof/sharenote'
};

// UI/Theme configuration (static values; not env-driven)
export const THEME_PRIMARY_COLOR: string = '#0052d1';
export const THEME_SECONDARY_COLOR: string = '#c2db4e';
export const THEME_PRIMARY_COLOR_1: string = '#74b1e3ff';
export const THEME_PRIMARY_COLOR_2: string = '#ffffff';
export const THEME_PRIMARY_COLOR_3: string = '#aad3f5ff';

export const DARK_MODE_ENABLED: boolean = true;
export const DARK_MODE_FORCE: boolean = false;
export const DARK_MODE_DEFAULT: 'light' | 'dark' = 'light';

// Text colors
export const THEME_TEXT_LIGHT_PRIMARY: string = '#1f1f1f';
export const THEME_TEXT_LIGHT_SECONDARY: string = '#555555';
export const THEME_TEXT_DARK_PRIMARY: string = '#e0e0e0';
export const THEME_TEXT_DARK_SECONDARY: string = '#a6a6a6';

// Charts (area gradient colors)
export const THEME_CHART_AREA_TOP: string = 'rgba(35, 95, 206, 1)';
export const THEME_CHART_AREA_BOTTOM: string = 'rgba(33, 150, 243, 0.0)';

// App behavior (static option)
export const HOME_PAGE_ENABLED: boolean = false;

// Loader behavior
export const LOADER_IDLE_MS: number = 3000;
