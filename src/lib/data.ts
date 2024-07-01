import { media } from '@/images/portfolio'
import type { Project, Skill } from '@/types'

export const projectsData: Project[] = [
  {
    pinned: true,
    relevant: true,
    beta: false,
    name: 'Jumpseller Developer - Themes',
    description:
      'Although not a project per se, I have been working on the Jumpseller platform as a developer, creating and maintaining themes and their infrastructure for the platform. Jumpseller is an e-commerce platform that allows users to create their online store without the need for technical knowledge. Collaborated on storefront themes, and developed a Visual Editor and Code Editor for seamless customization as part of the Themes Team. Enhanced storefront themes architecture, driving e-commerce innovation with an adaptable system for theme creation and detailed customization. As you can imagine, the code for this project is private and company-owned.',
    startDate: '2023-10-02',
    endDate: 'present',
    repo: null,
    deployment: 'https://jumpseller.com',
    attachment: 'https://jumpseller.com/support',
    color: 'jumpseller',
    stack: ['Ruby', 'Ruby on Rails', 'React.js', 'Javascript', 'MySQL', 'Liquid', 'AWS S3'],
    media: [
      {
        type: 'image',
        src: media.jumpseller.screenshot,
      },
    ],
  },
  {
    pinned: true,
    relevant: true,
    beta: false,
    name: 'VS Code Theme: Bagger Flow',
    description:
      'Bagger Flow is a Visual Studio Code Theme with a refined color palette combining elements of other popular themes and with a clean and minimal touch of the chef’s personal taste. Contains  carefully customized and exhaustive support for JS/TS, JSX/TSX, HTML/CSS and Ruby. It was a long time coming and now it’s finally here. Currently available on the VSCode Marketplace.',
    startDate: '2024-01-25',
    endDate: 'present',
    repo: 'https://github.com/kiko-g/bagger-flow-vscode',
    deployment: 'https://marketplace.visualstudio.com/items?itemName=kikogoncalves.bagger-flow',
    color: 'purple',
    stack: ['Node.js', 'JSON'],
    media: [
      {
        type: 'image',
        src: media.baggerFlow.screenshot1,
      },
      {
        type: 'image',
        src: media.baggerFlow.screenshot2,
      },
    ],
  },
  {
    pinned: true,
    relevant: true,
    beta: true,
    name: 'BaggerUI',
    description:
      'Vast and growing collection of reusable, copiable and customizable ReactTSX components combined and saved from different projects. Take the code and build the project of your dreams. Inspired by RadixUI, HeadlessUI and TailwindUI.',
    startDate: '2023-07-17',
    endDate: 'present',
    repo: 'https://github.com/kiko-g/bagger-ui',
    deployment: 'https://bagger-ui.vercel.app',
    color: 'teal',
    stack: ['React.js', 'Next.js', 'Typescript', 'Tailwind'],
    media: [
      {
        type: 'image',
        src: media.baggerui.screenshot,
      },
    ],
  },
  {
    pinned: false,
    relevant: true,
    beta: false,
    name: "Analytics and Usability Dashboard for CMF's MES",
    description:
      "Dashboard with customized analyitical insights for web components inside Critical Manufacturing's MES, an application used for managing industrial shop floors. The dashboard presents organized data of user behavior patterns for developers to improve the usability of MES based on the evidence collected over time.",
    startDate: '2023-02-06',
    endDate: '2023-07-01',
    attachment: 'https://kikogoncalves/dissertation.pdf',
    repo: 'https://github.com/kiko-g/usability-dashboard-mes',
    deployment: 'https://usability-dashboard-mes.vercel.app',
    color: 'blue',
    stack: ['FEUP', 'React.js', 'Next.js', 'Typescript', 'Tailwind', 'Angular', 'Docker', 'Matomo', 'MySQL'],
    media: [
      {
        type: 'image',
        src: media.cmfUx.screenshot1,
      },
      {
        type: 'image',
        src: media.cmfUx.screenshot2,
      },
      {
        type: 'image',
        src: media.cmfUx.screenshot3,
      },
      {
        type: 'video',
        src: 'https://user-images.githubusercontent.com/40745490/246076879-659c8170-4f10-42ec-a67f-03f66dc2e3e7.mp4',
      },
    ],
  },
  {
    pinned: true,
    relevant: true,
    beta: false,
    name: 'Finishers Hub',
    description:
      'The place for all finisher related content: chaotic, outrageous, lawless on the fence of criminality. Perfectly unbalanced. As all things should be. The most amusing and most personal project I have ever worked on.',
    startDate: '2022-05-01',
    endDate: '2023-08-01',
    repo: 'https://github.com/kiko-g/finishershub',
    deployment: 'https://finishershub.vercel.app',
    color: 'indigo',
    stack: ['React.js', 'Next.js', 'Typescript', 'Tailwind', 'AWS S3', 'Mongo DB'],
    media: [
      {
        type: 'image',
        src: media.finishersHub.screenshot1,
      },
      {
        type: 'image',
        src: media.finishersHub.screenshot2,
      },
      {
        type: 'video',
        src: 'https://user-images.githubusercontent.com/40745490/230927052-362d6bd0-0abe-495d-9cbf-bd2524354e6e.mp4',
      },
    ],
  },
  {
    pinned: true,
    relevant: true,
    beta: false,
    name: 'Guerner & Irmãos Website',
    startDate: '2023-01-15',
    endDate: '2023-09-28',
    description:
      'Website for Guerner & Irmãos, a textiles, technical fabrics, and building materials company, showcasing their products, mission, history and values.',
    color: 'orange',
    stack: ['React.js', 'Typescript', 'Tailwind', 'Gatsby.js', 'MDX', 'GraphQL'],
    repo: 'https://github.com/kiko-g/guerner',
    deployment: 'https://guerner.vercel.app',
    media: [
      {
        type: 'image',
        src: media.guerner.screenshot,
      },
    ],
  },
  {
    pinned: true,
    relevant: true,
    beta: false,
    name: 'Time Table Selector',
    startDate: '2022-04-05',
    endDate: '2022-08-25',
    description:
      "A schedule planner for the University of Porto students. Plan your semester and course units with ease. Project developed under the Computer Engineering Student's branch and the data is provided by a SIGARRA web scraper.",
    color: 'red',
    stack: ['React.js', 'Typescript', 'Tailwind', 'Docker', 'PostgreSQL'],
    repo: 'https://github.com/NIAEFEUP/tts-revamp-fe',
    deployment: 'https://ni.fe.up.pt/tts',
    media: [
      {
        type: 'image',
        src: media.tts.screenshot,
      },
      {
        type: 'video',
        src: 'https://user-images.githubusercontent.com/40745490/183784200-742c3556-ee0a-4eb7-9994-dcac6dffd440.mp4',
      },
    ],
  },
  {
    pinned: false,
    relevant: false,
    beta: false,
    name: 'Rushing B (2D Game)',
    startDate: '2022-02-15',
    endDate: '2022-04-10',
    description:
      "Endless scroller computer game where a student races across FEUP's main hall trying to get to class on time. On their way, they will face many different kinds of enemies and power-ups which will aid them in their journey.",
    color: 'slate',
    stack: ['FEUP', 'Unity', 'C#'],
    repo: 'https://github.com/kiko-g/rushing-b',
    deployment: 'https://miguelams.itch.io/rushing-b',
    media: [
      {
        type: 'video',
        src: 'https://github.com/kiko-g/rushing-b/assets/40745490/d7493ab1-a4e7-450b-aba6-1b40eb1ef2b1',
      },
    ],
  },
  {
    pinned: false,
    relevant: false,
    beta: false,
    name: 'Time Hopper (2D Game)',
    startDate: '2022-04-15',
    endDate: '2022-07-01',
    description:
      '3rd person shooter horde-like game built with Unity (3D). After a time-space anomaly that got you stuck in a violent loop, you must fight your way through different arenas, located in various locations and eras. Survive as long as you can, master all weapons and unlock all perk upgrades.Team of developers collaborated with graphic designers and sound engineers for a complete game experience. Team of 7 people (4 DEV, 2 SND, 1 GFX)',
    color: 'slate',
    stack: ['FEUP', 'Unity', 'C#'],
    repo: 'https://github.com/kiko-g/time-hopper',
    deployment: 'https://supertommc.itch.io/time-hopper',
    media: [
      {
        type: 'image',
        src: media.timeHopper.screenshot1,
      },
      {
        type: 'image',
        src: media.timeHopper.screenshot2,
      },
      {
        type: 'image',
        src: media.timeHopper.screenshot3,
      },
      {
        type: 'video',
        src: 'https://github.com/kiko-g/time-hopper/assets/40745490/a6b17eea-299a-4fcd-9df4-edb2335778ae',
      },
    ],
  },
  {
    pinned: false,
    relevant: false,
    beta: false,
    name: 'Virtual Assistant for MES',
    startDate: '2022-03-01',
    endDate: '2022-06-15',
    description:
      "A virtual assistant to facilitate navigation and interaction with Critical Manufacturing's MES. Created branding around the adopted project as a small startup named Robin.",
    color: 'slate',
    stack: ['FEUP', 'Gatsby.js', 'Typescript', 'Angular', 'Python', 'SpaCy', 'Docker'],
    repo: 'https://github.com/kiko-g/robin-lgp',
    deployment: 'https://robin-lgp.vercel.app/about#showcase',
    media: [
      {
        type: 'image',
        src: media.robin.screenshot1,
      },
      {
        type: 'image',
        src: media.robin.screenshot2,
      },
      {
        type: 'image',
        src: media.robin.screenshot3,
      },
      {
        type: 'video',
        src: 'https://robin-lgp.vercel.app/static/change-resource-state-auto-0acbdbc8d8cce72094f83810c41c7a4c.mp4',
      },
    ],
  },
  {
    pinned: false,
    relevant: false,
    beta: false,
    name: 'Health Checker',
    startDate: '2021-11-01',
    endDate: '2022-01-21',
    description:
      'A better way to get accurate health information. Users consult medically validated information related to health and diseases.',
    color: 'slate',
    stack: ['FEUP', 'React.js', 'Express', 'Javascript', 'Tailwind', 'SPARQL'],
    repo: 'https://github.com/kiko-g/health-checker',
    deployment: '',
    media: [
      {
        type: 'video',
        src: 'https://user-images.githubusercontent.com/40745490/150367733-d4e5b349-cae0-487e-9a82-685a3e376bd0.mp4',
      },
    ],
  },
  {
    pinned: false,
    relevant: false,
    beta: false,
    name: 'Internet of Everything',
    startDate: '2021-10-25',
    endDate: '2022-01-30',
    description: 'IOT Factory management and maintenance platform for simulations.',
    color: 'slate',
    stack: ['FEUP', 'React.js', 'Tailwind', 'Javascript', 'Java', 'Python', 'MQTT', 'Docker'],
    repo: 'https://github.com/kiko-g/internet-of-everything',
    deployment: null,
    media: [
      {
        type: 'video',
        src: 'https://user-images.githubusercontent.com/40745490/153331805-e36c6bf9-d4c3-4521-aa1d-33d6f3f4a25d.mp4',
      },
    ],
  },
  {
    pinned: false,
    relevant: false,
    beta: false,
    name: 'Mafia in Town',
    startDate: '2020-12-14',
    endDate: '2020-10-12',
    description:
      'Multi-agent system faction game resembling Mafia In Town or Among Us, that simulates a the story with a variable number of AI players.',
    color: 'slate',
    stack: ['FEUP', 'Java', 'JADE', 'SAJaS', 'Repast'],
    repo: 'https://github.com/kiko-g/feup-aiad',
    deployment: null,
    media: [
      {
        type: 'image',
        src: media.mafiaInTown.screenshot,
      },
      {
        type: 'image',
        src: media.mafiaInTown.screenshotAlt,
      },
    ],
  },
  {
    pinned: false,
    relevant: false,
    beta: false,
    name: 'Tech Council',
    startDate: '2021-03-01',
    endDate: '2021-06-18',
    description:
      'Full stack collaborative Q&A app. Users to post questions and share answers for everything tech-related',
    color: 'slate',
    stack: ['FEUP', 'Laravel', 'Bootstrap', 'HTML', 'CSS', 'Javascript', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/kiko-g/tech-council',
    deployment: null,
    media: [
      {
        type: 'video',
        src: 'https://user-images.githubusercontent.com/40745490/139429861-0b86db10-d1d3-46b5-814b-a8b5cc563da3.mp4',
      },
    ],
  },
  {
    pinned: false,
    relevant: false,
    beta: false,
    name: 'Fuse 3D',
    startDate: '2019-09-25',
    endDate: '2020-01-10',
    description:
      'A 3D environment with a board for 2 players to play Fuse. Game logic is done via requests to a Prolog server.',
    color: 'slate',
    stack: ['FEUP', 'Javascript', 'WebGL', 'Prolog'],
    repo: 'https://github.com/kiko-g/feup-laig',
    deployment: 'https://github.com/kiko-g/feup-laig#demo',
    media: [
      {
        type: 'video',
        src: 'https://user-images.githubusercontent.com/40745490/153338727-f14204bd-1ecb-488a-bc70-96896d111150.mp4',
      },
    ],
  },
  {
    pinned: false,
    relevant: false,
    beta: false,
    name: 'Pet Nexus',
    startDate: '2020-10-21',
    endDate: '2020-12-20',
    description: 'Pet adoption website built with all Vanilla technologies.',
    color: 'slate',
    stack: ['FEUP', 'HTML', 'CSS', 'Javascript', 'PHP', 'SQLite'],
    repo: 'https://github.com/kiko-g/pet-nexus',
    deployment: 'https://web.fe.up.pt/~up201704790/ltw/',
    media: [
      {
        type: 'image',
        src: media.petNexus.screenshot,
      },
    ],
  },
  {
    pinned: false,
    relevant: false,
    beta: false,
    name: 'P2P Timeline Twitter Clone',
    startDate: '2021-11-08',
    endDate: '2022-02-05',
    repo: 'https://github.com/kiko-g/feup-sdle/tree/master/p2p_timeline',
    deployment: 'https://github.com/kiko-g/feup-sdle/tree/master#feup-sdle',
    media: [
      {
        type: 'video',
        src: 'https://user-images.githubusercontent.com/40745490/153337905-d65b4866-5cb3-4f9c-b2bd-4ad312c93344.mp4',
      },
    ],
    color: 'slate',
    stack: ['FEUP', 'React.js', 'Tailwind', 'Python', 'Flask', 'Kademlia'],
    description: 'Peer to peer Twitter clone using Kademlia DHT.',
  },
]

export const skills: Skill[] = [
  { name: 'Git', experience: '4y', color: '#f1502f', score: 100 },
  { name: 'HTML', experience: '4y', color: '#e34c26', score: 100 },
  { name: 'CSS', experience: '4y', color: '#1572b6', score: 100 },
  { name: 'JS', experience: '4y', color: '#f7df1e', score: 100 },
  { name: 'TS', experience: '2.5y', color: '#007acc', score: 90 },
  { name: 'React.js', experience: '3y', color: '#61dafb', score: 90 },
  { name: 'NodeJS', experience: '3y', color: '#68a063', score: 80 },
  { name: 'Python', experience: '3y', color: '#3776ab', score: 70 },
  { name: 'Ruby/Rails', experience: '1y', color: '#a01508', score: 60 },
  { name: 'Java', experience: '3y', color: '#007396', score: 50 },
  { name: 'Tailwind', experience: '2y', color: '#38b2ac', score: 100 },
  { name: 'Next.js', experience: '2y', color: '#000000', score: 80 },
  { name: 'Gatsby.js', experience: '2y', color: '#663399', score: 80 },
  { name: 'Vue.js', experience: '1y', color: '#3fb984', score: 60 },
  { name: 'Angular', experience: '0.5y', color: '#dd0031', score: 50 },
  { name: 'PHP', experience: '2y', color: '#4f5b93', score: 50 },
  { name: 'Laravel', experience: '0.5y', color: '#ff2d20', score: 50 },
  { name: 'SQL', experience: '2y', color: '#2255ff', score: 50 },
  { name: 'Docker', experience: '2y', color: '#2496ed', score: 60 },
  { name: 'GraphQL', experience: '1y', color: '#e535ab', score: 30 },
  { name: 'Rust', experience: '0.5y', color: '#a0522e', score: 50 },
  { name: 'React Native', experience: '0.5y', color: '#61dafb', score: 30 },
  { name: 'Flutter', experience: '0.5y', color: '#31b9f6', score: 30 },
  { name: 'C/C++', experience: '3y', color: '#00559c', score: 30 },
]
