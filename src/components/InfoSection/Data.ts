const aboutSection = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headLine: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: '/premium-benefits.svg',
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true,
};

const discoverSection = {
  id: 'discover',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Unlimited Access',
  headLine: 'Login to your account at any time',
  description:
    'We have covered no matter where you are located. All you need is an internet connection and a phone or computer',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: '/virtual-offices.svg',
  alt: 'Car',
  dark: false,
  primary: true,
  darkText: false,
};

const signupSection = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Join our Team',
  headLine: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: '/reduce-expenses.svg',
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true,
};

export const sections = [aboutSection, discoverSection, signupSection];
