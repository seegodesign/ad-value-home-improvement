/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  corePlugins: {
    // Disable preflight — the project has its own CSS reset in base.css
    preflight: false,
  },
  safelist: [
    // Presets require a size suffix: -sm (5% translate), -md (25%), -lg (100%)
    'motion-preset-fade-md',
    'motion-preset-slide-up-sm',
    'motion-preset-slide-up-md',
    'motion-duration-500',
    'motion-duration-700',
    'motion-delay-150',
    'motion-delay-300',
    'motion-delay-500',
    'motion-delay-700',
  ],
  plugins: [require('tailwindcss-motion')],
};
