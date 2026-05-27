/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-base':    'var(--bg-base)',
        'bg-elev':    'var(--bg-elev)',
        'bg-card':    'var(--bg-card)',
        'bg-card-2':  'var(--bg-card-2)',
        'green-deep': 'var(--green-deep)',
        'green':      'var(--green)',
        'green-bright':'var(--green-bright)',
        'green-sage': 'var(--green-sage)',
        'gold':       'var(--gold)',
        'gold-soft':  'var(--gold-soft)',
        'swim-blue':  'var(--swim-blue)',
        'd-21k':      'var(--d-21k)',
        'd-10k':      'var(--d-10k)',
        'd-5k':       'var(--d-5k)',
        'text-base':  'var(--text)',
        'text-muted': 'var(--text-muted)',
        'text-dim':   'var(--text-dim)',
      },
      fontFamily: {
        display: ['Oswald', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        num:     ['Oswald', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'site': 'var(--maxw)',
      },
    },
  },
  plugins: [],
};
