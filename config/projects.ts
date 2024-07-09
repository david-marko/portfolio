import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Zidallie',
    slug: 'zidallie',
    banner:
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1714723940/03_bdivsh.webp',
    website: 'http://zidallie.co.ke',
    description:
      'Ride hailing platform for Students in Kenya; Inclusive of a Driver Application, Parents App and School Dashboard.',
    shortDescription: 'Ride hailing platform for Students',
    repository: '',
    stack: [
      Stack.react,
      Stack.typescript,
      Stack.postgres,
      Stack.docker,
      Stack.flask,
      Stack.flutter,
    ],
    dimensions: [350, 160],
    screenshots: [
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1714723939/01_gv1d9d.webp',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1714723939/02_s7z5dz.webp',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1714723940/03_bdivsh.webp',
    ],
    deployment: {
      web: 'https://zidallie.co.ke',
      android:
        'https://play.google.com/store/apps/details?id=com.zidallie.parents&pcampaignid=web_share',
    },
    subProjects: [],
  },
  {
    title: 'Mwanza',
    slug: 'mwanza',
    banner:
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698921/Screenshot_2023-08-22_at_13.08.13_lb196a.png',
    website: 'N/A',
    description:
      'Freelance Mobile platform to provide a marketplace for service providers and clients; with tons of intuitive features and capabilities. It integrates realtime chat, notifications, payment support via PesaPal and flutterwave, Impressions and views tracking, advanced state management and so much more.',
    shortDescription: 'Service Marketplace (Link Available Soon)',
    repository: '',
    stack: [
      Stack.flutter,
      Stack.python,
      Stack.postgres,
      Stack.aws,
      Stack.redis,
    ],
    dimensions: [350, 160],
    screenshots: [
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698926/WhatsApp_Image_2023-08-22_at_13.05.35_eicn0f.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698926/WhatsApp_Image_2023-08-22_at_13.05.36_1_bwxkxa.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698926/WhatsApp_Image_2023-08-22_at_13.05.37_1_sq5pgj.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698926/WhatsApp_Image_2023-08-22_at_13.05.37_avrna4.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698926/WhatsApp_Image_2023-08-22_at_13.05.36_ccb2h1.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698926/WhatsApp_Image_2023-08-22_at_13.05.37_2_mchgp4.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698925/WhatsApp_Image_2023-08-22_at_13.05.36_2_h96c17.jpg',
    ],
    deployment: {
      web: 'N/A',
    },
    subProjects: [],
  },
  {
    title: 'GogoPlay',
    slug: 'gogoplay',
    banner:
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698044/WhatsApp_Image_2023-08-01_at_13.23.23_kv3ono.jpg',
    website: 'N/A',
    description:
      'Music Streaming and Ticket Purchasing Cross Platform Mobile Application. Support for various payment platforms, Redis powered stats and impressions tracking and various supporting serverless applications.',
    shortDescription: 'Music Streaming',
    repository: '',
    stack: [
      Stack.python,
      Stack.typescript,
      Stack.postgres,
      Stack.flutter,
      Stack.aws,
      Stack.redis,
    ],
    dimensions: [350, 160],
    screenshots: [
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698003/Screenshot_1692006091_quk65l.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698002/Screenshot_1692006200_mc35u2.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698011/Screenshot_1692185303_lyosam.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698014/Screenshot_1692185291_vmhire.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698016/Screenshot_1692185281_x3edpl.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698022/Screenshot_1692185418_c2pevp.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698020/Screenshot_1692185230_tv5qzn.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698024/Screenshot_1692185251_q3ptq0.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692698032/Screenshot_1692006143_excqnc.png',
    ],
    deployment: {
      web: 'https://gogoplayssd.com',
    },
    subProjects: [],
  },
  {
    title: 'HerHive',
    slug: 'herhive',
    banner:
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697402/Screenshot_2023-08-22_at_12.43.05_sjjkgk.png',
    website: 'https://herhive.space',
    description:
      'Womens Health and Wellness Platform to track medications, events, and provide mentorship services around East Africa. This project is a cross platform mobile application that i built from start to finish in collaboration with a PM and several NGO consultants',
    shortDescription: 'Women Empowerment, Education and Mentorship',
    repository: '',
    stack: [
      Stack.python,
      Stack.typescript,
      Stack.react,
      Stack.flutter,
      Stack.docker,
    ],
    dimensions: [350, 160],
    screenshots: [
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697187/WhatsApp_Image_2023-06-25_at_10.39.55_w1uswq.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697187/WhatsApp_Image_2023-06-25_at_10.39.55_1_hapgqn.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697187/WhatsApp_Image_2023-06-25_at_10.39.55_4_y8f4tk.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697186/WhatsApp_Image_2023-06-25_at_10.39.55_2_dldzap.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697186/WhatsApp_Image_2023-06-25_at_10.39.55_3_h4acib.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697186/WhatsApp_Image_2023-06-25_at_10.39.55_6_ccuckr.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697186/WhatsApp_Image_2023-06-25_at_10.39.55_9_rwnrhy.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697186/WhatsApp_Image_2023-06-25_at_10.39.55_10_baiysi.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697186/WhatsApp_Image_2023-06-25_at_10.39.55_8_gf53e4.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697186/WhatsApp_Image_2023-06-25_at_10.39.55_5_qb9wyc.jpg',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692697185/WhatsApp_Image_2023-06-25_at_10.39.55_7_kqloia.jpg',
    ],
    deployment: {
      web: 'https://herhive.space',
    },
    subProjects: [],
  },
  {
    title: 'Youtube Transcripts',
    slug: 'ytd-transcripts',
    banner:
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692699465/Screenshot_2023-08-22_at_13.17.28_jmqfom.png',
    website: 'https://github.com/david-marko/youtube-transcript-to-db',
    description:
      'This is a quick weekend project i was tasked to do. It is a simple python script that fetches transcripts from a youtube video and uploads them onto a database or file for further analytics.',
    shortDescription: 'Youtube Transcriptions to Database',
    repository: 'https://github.com/david-marko/youtube-transcript-to-db',
    stack: [Stack.python, Stack.aws],
    dimensions: [350, 160],
    screenshots: [],
    deployment: {
      web: 'https://github.com/david-marko/youtube-transcript-to-db',
    },
    subProjects: [],
  },
  {
    title: 'Tracking Kenya Tech Eco System',
    slug: 'kenya tech',
    banner:
      'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/ZJEKICY5EXY/upload/53db08ec30f5cc6be903ba2bd98a6462.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    website: 'https://davemarko.com/blog/data-analysis-kenya',
    description:
      'I came across a report on the start-up ecosystem in Kenya graciously provided by DisruptAfrica https://disrupt-africa.com. By the end of the article, I hope to get a few insights into the Kenyan Startup Ecosystem in 2022. This project was set up to help me write an article on the topic',
    shortDescription: 'Kenya Tech',
    repository: 'https://github.com/david-marko/youtube-transcript-to-db',
    stack: [Stack.python, Stack.pandas, Stack.jupyter],
    dimensions: [650, 350],
    screenshots: [
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1673266243475/15e211ce-ee68-4603-8ab9-15ac2be0063f.png',
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1673268018944/33f4710d-8dd4-4e33-8be6-d66fbb8e9957.png',
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1673268033610/f62b9d7c-c4e6-4038-bffc-c9ab5211b5bb.png',
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1673268063472/9fc450be-1235-416a-99d9-824d7af69202.png',
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1673268476603/d7427e08-eac2-4a23-9843-4765eb10025b.png',
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1673268449914/874a38cd-4cd0-4a40-bc2f-786e4ff939bc.png',
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1673268582648/4de2425b-d76d-4caa-b0a1-6d081934627c.png',
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1673269043933/359c5ae6-b0fe-4033-aff7-3b6d0398afaf.png',
    ],
    deployment: {
      web: 'https://github.com/david-marko/Introduction-to-data-analytics---7th-Jan-2023',
    },
    subProjects: [],
  },
  {
    title: 'Eversend Payments Gateway Python',
    slug: 'eversend unofficial',
    banner:
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692700470/eversend_x0qjik.webp',
    website: 'https://github.com/david-marko/eversend-unofficial',
    description: 'A tiny library to connect and use the Eversend Business API',
    shortDescription: 'Unofficial SDK for Eversend Business Platform',
    repository: 'https://github.com/david-marko/eversend-unofficial',
    stack: [Stack.python],
    dimensions: [650, 350],
    screenshots: [],
    deployment: {
      web: 'https://github.com/david-marko/Introduction-to-data-analytics---7th-Jan-2023',
    },
    subProjects: [],
  },
  {
    title: 'Telegram Movie Bot with Flutterwave Subscriptions',
    slug: 'python bot',
    banner:
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692702895/telegram_rpycex.jpg',
    website: 'https://github.com/david-marko/ugflix',
    description:
      'A project for a client to host and manage a Telegram bot that also has support for subscription and free trials. The bot allows 3 days free trial and then collects a monthly subscription of via MPesa, VISA, Crypto and more. It also supports download and search and movies continuations',
    shortDescription: 'Telegram Bot',
    repository: 'https://github.com/david-marko/ugflix',
    stack: [Stack.python, Stack.aws, Stack.flask, Stack.postgres, Stack.redis],
    dimensions: [850, 350],
    screenshots: [],
    deployment: {
      web: 'https://github.com/david-marko/ugflix',
    },
    subProjects: [],
  },
  {
    title: 'WitnessLaw',
    slug: 'website',
    banner:
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692701310/Screenshot_2023-08-22_at_13.45.49_w9dhij.png',
    website: 'https://witnesslaw.com',
    description: 'Website for a Law firm',
    shortDescription: 'Website for a Law firm',
    repository: 'https://witnesslaw.com',
    stack: [Stack.bootstrap],
    dimensions: [850, 350],
    screenshots: [
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692701310/Screenshot_2023-08-22_at_13.45.49_w9dhij.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692701312/Screenshot_2023-08-22_at_13.46.40_bg7lkz.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692701323/Screenshot_2023-08-22_at_13.46.10_miqoj7.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692701309/Screenshot_2023-08-22_at_13.47.39_e1lqvw.png',
    ],
    deployment: {
      web: 'https://witnesslaw.com',
    },
    subProjects: [],
  },
  {
    title: 'Nilotech Website',
    slug: 'website',
    banner:
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692700860/Screenshot_2023-08-22_at_13.36.44_yylmcj.png',
    website: 'https://nilotech.com.ss',
    description: 'Website for a tech solutions agency',
    shortDescription: 'Website for a tech solutions agency',
    repository: 'https://nilotech.com.ss',
    stack: [Stack.python, Stack.bootstrap, Stack.tailwindcss, Stack.aws],
    dimensions: [850, 350],
    screenshots: [
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692700877/Screenshot_2023-08-22_at_13.40.09_pxdrvx.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692700868/Screenshot_2023-08-22_at_13.40.26_nbwayc.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692700883/Screenshot_2023-08-22_at_13.40.42_tmx8hx.png',
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692700867/Screenshot_2023-08-22_at_13.40.34_ywpup9.png',
    ],
    deployment: {
      web: 'https://nilotech.com.ss',
    },
    subProjects: [],
  },
  {
    title: 'Twitter Scrapping with Python',
    slug: 'python and tweepy',
    banner:
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692701951/twitter-python-logos.width-808_lmh7cf.jpg',
    website: 'https://github.com/david-marko/ssot_scrapper',
    description: 'Scrapper Bot for SSOT Using Python Tweepy and MySQL',
    shortDescription: 'Scrapper Bot for SSOT Using Python Tweepy and MySQL',
    repository: 'https://github.com/david-marko/ssot_scrapper',
    stack: [
      Stack.python,
      Stack.aws,
      Stack.postgres,
      Stack.pandas,
      Stack.pandas,
    ],
    dimensions: [850, 350],
    screenshots: [],
    deployment: {
      web: 'https://github.com/david-marko/ssot_scrapper',
    },
    subProjects: [],
  },
  {
    title: 'Python Custom Requests Wrapper',
    slug: 'python',
    banner:
      'https://res.cloudinary.com/dlvvvnsoq/image/upload/v1692701684/pythonfeature_nmi6ig.png',
    website: 'https://github.com/david-marko/pyreq_library',
    description:
      'I was looking for a low level approach to managing python requests and simple to implement. Python Requests is by far the most popular and easiest to use. It always works as intended but can prove unreliable in terms of performance. PyCURL is a great wrapper for the Curl library for Unix systems and it provides access and control of requests. It has greater performance compared to Python Requests but isnt easy to implement. It also provides support for other protocols like FTP / SSH and more',
    shortDescription: 'Wrapper Function for PyCURL with Requests Syntax',
    repository: 'https://github.com/david-marko/pyreq_library',
    stack: [Stack.python, Stack.pandas],
    dimensions: [850, 350],
    screenshots: [],
    deployment: {
      web: 'https://github.com/david-marko/pyreq_library',
    },
    subProjects: [],
  },
];
