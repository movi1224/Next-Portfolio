export const allProjects = [
  {
    title: 'Facipe Web App',
    titleStyle: 'gradient_orange',
    src: '/facipe.webp',
    quote:
      '“Enriches people’s life by providing high-quality recipes that make the most of their limited time and ingredients”',
    content: (
      <p>
        A Progressive Web App(PWA) that tells users the possible dishes they can make in a given
        amount of time. Users would know how to save money and prevent wasting food by entering what
        they have as ingredients. By providing step-by-step instructions visually, Facipe helps
        users cook better.
      </p>
    ),
    tools: <p>Vue, CSS, HTML, Responsive Web Design, Figma, BootStrap, ElementUI</p>,
  },
  {
    title: 'Yelp Camp Web App',
    titleStyle: 'gradient_red',
    src: '/yelpcamp.jpg',
    quote: '“A real-industry-like application in Yelp style”',
    content: (
      <p>
        Designed and Implemented both Frontend and Backend for a Yelp-like website for campgrounds,
        includes search/review/create campgrounds features. Users are able to search desired
        campgrounds by name or location and sort by highest ratings, reviews and prices just like
        Yelp, and also create/edit/remove a campground as the camp owner with all profiles stored.
      </p>
    ),
    tools: (
      <p className="text-red">
        Javascript, HTML, CSS, NodeJS, EJS, Express, MongoDB, Bootstrap, JWT
      </p>
    ),
  },
  {
    title: 'Ford Mobility Product Metrics',
    titleStyle: 'gradient_blue',
    src: '/ford.png',
    quote:
      '“Our platform includes an intuitive, mobile, and easy-to-use chatbots, as well as a web metrics dashboard.”',
    content: (
      <p>
        Users can ask chatbots for information on a variety of topics, including software products
        and website user metrics. Also scheduling regular report to stay up to date on the health
        and overall performance of Ford’s service. For a more comprehensive view, employees can use
        our web dashboard as a monitor of the health of services.
      </p>
    ),
    tools: <p>NodeJS, Azure, BotkitJS, Ajax, HTML, CSS</p>,
  },
  {
    title: 'Assurant E-Commerce ',
    titleStyle: 'gradient_skyblue',
    src: '/assurant.png',
    quote: '“Our global sales platform aims to simplify and humanize the insurance sales funnel.”',
    content: (
      <p>
        A progressive web application, covers end-to-end consumer sales flow from the landing
        homepage to the final sales confirmation. Users are able to choose an insurance plan, make
        purchase, track service status.
      </p>
    ),
    tools: <p>NextJS, React, SCSS, TypeScript, Storybook, Redux</p>,
  },
  {
    title: 'Global Terrorism Visualization',
    titleStyle: 'gradient_purple',
    src: '/d3.png',
    content: (
      <p>
        A dynamic web application of data visualization utilizing the Global Terrorism Database to
        summarize and categorize the terrorism activities all around the world, Users could locate
        anywhere in a dynamic world map to check the information. Besides, an animated comparison
        chart to display different terrorism groups expanding rate by time or location.
      </p>
    ),
    tools: <p>D3.js, HTML, CSS, JavaScript, Python</p>,
  },
]

export const jobs = [
  {
    title: 'Software Engineer',
    company: 'Assurant',
    time: '2021.9 - Present',
    content:
      'Build the E-Commerce Platform as a progressive web application, covers end-to-end consumer sales flow from the landing homepage to the final sales confirmation. Users are able to choose an insurance plan, make purchase, track service status.',
  },
  {
    title: 'Frontend Developer',
    company: 'Kingsoft',
    time: '2020.8 - 2021.8',
    content:
      'Took part in Project Duba.com that helps users to navigate a network of information resources on the Web, collaborated with different companies in multiple areas including news, searching machines, news, and advertisements, made a huge amount of referral traffic.',
  },
  {
    title: 'Software Engineer',
    company: 'Ford Motor Co.',
    time: '2018.8 - 2020.7',
    content:
      'Mobility Products Metrics keeps track of the website and internet service and make sure they are running smoothly, including building new features for the online commerce pages, a web metrics dashboard, and intuitive chatbots for the internal engineers to get up-to-date information on all internal metrics.',
  },
]

export const skills = [
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'TailwindCSS',
  'Express',
  'KOA',
  'MongoDB',
  'SQL',
  'React',
  'Vue',
  'NextJS',
  'NodeJS',
  'Babel',
  'StoryBook',
  'ES6',
  'Jest',
  'Webpack',
  'GIT',
  'GITHUB',
  'JSON',
  'RESTful API',
]
