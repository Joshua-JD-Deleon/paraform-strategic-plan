import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontSize: {
  			xs: [
  				'0.8125rem',
  				{
  					lineHeight: '1.25rem'
  				}
  			],
  			sm: [
  				'0.9375rem',
  				{
  					lineHeight: '1.5rem'
  				}
  			],
  			base: [
  				'1.0625rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			lg: [
  				'1.1875rem',
  				{
  					lineHeight: '1.875rem'
  				}
  			],
  			xl: [
  				'1.3125rem',
  				{
  					lineHeight: '2rem'
  				}
  			],
  			'2xl': [
  				'1.5625rem',
  				{
  					lineHeight: '2.25rem'
  				}
  			],
  			'3xl': [
  				'1.9375rem',
  				{
  					lineHeight: '2.5rem'
  				}
  			],
  			'4xl': [
  				'2.375rem',
  				{
  					lineHeight: '3rem'
  				}
  			],
  			'5xl': [
  				'3.125rem',
  				{
  					lineHeight: '3.75rem'
  				}
  			]
  		},
  		colors: {
  			navy: {
  				'50': '#f8fafc',
  				'100': '#f1f5f9',
  				'200': '#e2e8f0',
  				'300': '#cbd5e1',
  				'400': '#94a3b8',
  				'500': '#64748b',
  				'600': '#475569',
  				'700': '#334155',
  				'800': '#1e293b',
  				'900': '#0f172a'
  			},
  			amber: {
  				'50': '#fffbeb',
  				'100': '#fef3c7',
  				'200': '#fde68a',
  				'300': '#fcd34d',
  				'400': '#fbbf24',
  				'500': '#f59e0b',
  				'600': '#d97706',
  				'700': '#b45309',
  				'800': '#92400e',
  				'900': '#78350f'
  			},
  			emerald: {
  				'50': '#ecfdf5',
  				'100': '#d1fae5',
  				'200': '#a7f3d0',
  				'300': '#6ee7b7',
  				'400': '#34d399',
  				'500': '#10b981',
  				'600': '#059669',
  				'700': '#047857',
  				'800': '#065f46',
  				'900': '#064e3b'
  			},
  			stone: {
  				'50': '#fafaf9',
  				'100': '#f5f5f4',
  				'200': '#e7e5e4',
  				'300': '#d6d3d1',
  				'400': '#a8a29e',
  				'500': '#78716c',
  				'600': '#57534e',
  				'700': '#44403c',
  				'800': '#292524',
  				'900': '#1c1917'
  			},
  			// Paraform Brand Colors
  			paraform: {
  				blue: '#5074F6',
  				'blue-light': '#7B9AF8',
  				'blue-dark': '#3D5BD9',
  				snow: '#F5F8F6',
  				gray: '#1A1A1A',
  				yellow: '#DCEA22',
  				purple: '#8B5CF6',
  			},
  			brand: {
  				primary: '#5074F6',
  				accent: '#DCEA22',
  				dark: '#3D5BD9',
  				'dark-secondary': '#2D4BC9',
  				light: '#7B9AF8',
  				text: '#1A1A1A'
  			},
  			phase: {
  				'30': '#5074F6',
  				'60': '#7B9AF8',
  				'90': '#3D5BD9'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};
export default config;
