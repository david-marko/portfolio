export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@0xdvvid',
  site: 'davemarko.com',
  calendly: 'https://calendly.com/davidmarko',
  links: {
    github: 'https://github.com/david-marko',
    linkedin: 'https://linkedin.com/in/david-marko-b9896b228/',
    twitter: 'https://twitter.com/0xdvvid',
    youtube: 'https://www.youtube.com/c/UCjemanZ7ka3u7GG8wX4QFyA',
    email: 'mailto:markodave46@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/davidmarko',
  },
};
