import { Colors } from './colors';

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,

  // Frontend
  react,
  reactnative,
  flutter,
  bootstrap,
  tailwindcss,

  // Backend
  graphql,
  node,
  django,
  flask,

  // Cloud
  aws,
  gcp,

  // Messaging
  nats,
  kafka,

  // Databases
  arangodb,
  redis,
  postgres,
  mongo,

  // Tools
  docker,
  kubernetes,
  terraform,
  pandas,
  jupyter,
}

export const WorkStack = [
  Stack.go,
  Stack.typescript,
  Stack.python,
  Stack.flutter,
  Stack.aws,
  Stack.docker,
  Stack.graphql,
  Stack.postgres,
  Stack.redis,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.go]: {
    value: 'Go',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.tailwindcss]: {
    value: 'TailwindCSS',
    color: Colors.graphql,
  },
  [Stack.bootstrap]: {
    value: 'Bootstrap',
    color: Colors.aws,
  },
  [Stack.flask]: {
    value: 'Flask',
    color: Colors.gcp,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },
  [Stack.flutter]: {
    value: 'Flutter',
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.nats]: {
    value: 'NATS',
    color: Colors.nats,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },
  [Stack.arangodb]: {
    value: 'ArangoDB',
    color: Colors.arangodb,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.terraform]: {
    value: 'Terraform',
    color: Colors.terraform,
  },
  [Stack.pandas]: {
    value: 'Pandas',
    color: Colors.python,
  },
  [Stack.jupyter]: {
    value: 'Jupyter',
    color: Colors.terraform,
  },
};
