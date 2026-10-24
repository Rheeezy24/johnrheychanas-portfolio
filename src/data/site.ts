// ==========================================================
// Your details live here. Edit this file to update the site —
// you don't need to touch the design files.
// '#' means "link not added yet".
// ==========================================================

export const site = {
  name: 'John Rhey Chanas',
  role: 'Mechatronics Engineering student · University of Waikato',
  location: 'Hamilton, New Zealand',
  email: 'john.chanas24@gmail.com',
  cv: '/john-chanas-cv.pdf', // the PDF lives in the public/ folder
  url: 'https://johnrheychanas-portfolio.vercel.app',
  description:
    'Mechatronics Engineering student in Hamilton, New Zealand. Robots, embedded systems and apps — with full build logs.',
};

export const socials = {
  linkedin: 'https://www.linkedin.com/in/johnchanas',
  github: 'https://github.com/Rheeezy24',
  instagram: 'https://instagram.com/17_jajaa',
  instagramHandle: '@17_jajaa',
  tiktok: 'https://www.tiktok.com/@17_jajaa',
  tiktokHandle: '@17_jajaa',
};

// "Right now" card on the homepage
export const now = [
  { label: 'Interning', value: 'Gallagher' },
  { label: 'Building', value: 'Tandem' },
  { label: 'Next', value: 'Robotic arm' },
  { label: 'Graduating', value: 'Early 2029' },
];

// Experience timeline — the first item gets the orange "current" dot
export const experience = [
  { title: 'Engineering Intern — Gallagher', when: '2026–27', detail: 'Production Engineering · jigs, assembly, CAD, 3D printing' },
  { title: 'BE Mechatronics — Waikato', when: '→ 2029', detail: 'Second year' },
  { title: 'Crew Cook — Burger King', when: '2024–25', detail: 'Taupō' },
  { title: 'Food & Beverage Assistant — Millennium Hotel', when: '2022–23', detail: 'Taupō' },
];

export const toolbox = [
  { group: 'Hardware', items: ['Arduino', 'Embedded C++', 'I²C · PWM', 'Soldering', 'Oscilloscope', '3D printing'] },
  { group: 'Design & analysis', items: ['Fusion 360', 'LTSpice', 'SAP2000', 'Mathcad Prime'] },
  { group: 'Software', items: ['C#', 'Python', 'MATLAB', 'React Native · Expo', 'Supabase'] },
];
