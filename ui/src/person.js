import PropTypes from 'prop-types';

export const person = {
  basics: {
    name: 'Matt Robinson',
    label: 'Data Scientist',
    picture: './matt_profile.jpg',
    email: 'mthw.wm.robinson@gmail.com',
    phone: null,
    website: 'http://matt.dataflock.io',
    summary: 'Matt is a data scientist who is passionate about using technology and automation to improve business processes.',
    location: {
      address: null,
      postalCode: null,
      city: 'Washington',
      countryCode: 'USA',
      region: 'DC',
    },
    profiles: [
      {
        network: 'GitHub',
        username: 'mthwrobinosn',
        url: 'https://www.github.com/mthwrobinson',
      },
      {
        network: 'Facebook',
        username: 'mthwrobinson',
        url: 'https://www.facebook.com/profile.php?id=100011667909074',
      },
    ],
  },
  work: [
    {
      company: 'US Government',
      position: 'Data Scientist',
      website: '',
      startDate: '2016-05-01',
      endDate: '',
      summary: ' Built and deployed natural language processing, entity resolution and network analysis models. Project lead for a team consisting of seven data scientists, web developers and engineers. Member of the board responsible for defining data science tradecraft standards. Implemented ETL pipelines, REST APIs and databases that were deployed to production enterprise applications. Employed Agile project management techniques.',
      highlights: [],
    },
    {
      company: 'US Army',
      position: 'Field Artillery Officer',
      website: '',
      startDate: '2011-05-01',
      endDate: '2016-05-01',
      summary: 'Led a field artillery platoon consisting of forty soldiers and four howitzers during a combat deployment to Afghanistan. Managed over $10 million worth of military equipment. Awarded the Bronze Star.',
      highlights: [],
    },
  ],
  volunteer: [
    {
      organization: 'Temple Rodef Shalom',
      position: 'Software Engineer',
      website: 'https://www.templerodefshalom.org/',
      startDate: '2018-08',
      endDate: '',
      summary: 'Developing an automated ETL pipeline that extracts data from the Eventbrite API, joins it with membership data, and displays visualizations on a web-based dashboard. Will help drive programming decisions at the largest synagogue in Virginia. Tech stack includes React, Python, Postgres and Plotly.',
      highlights: [],
    },
    {
      organization: 'DataKind',
      position: 'Data Science Technical Lead',
      website: 'https://www.datakind.org/',
      startDate: '2017-11',
      endDate: '2018-07',
      summary: 'Technical lead for a volunteer data science team. Developed a web application that helps case workers from Community Based Care of Central Florida plan their weekly activities in order to provide more effective care for foster children. Designed a custom scheduling and routing engine using integer programming. Tech stack included Angular, Python and MySQL.',
      highlights: [],
    },
  ],
  education: [
    {
      institution: 'George Washington University',
      area: 'Systems Engineering',
      studyType: 'PhD (in progress)',
      startDate: '2018',
      endDate: '2021',
      gpa: '',
      courses: [],
    },
    {
      institution: 'Georgia Institute of Technology',
      area: 'Operations Research',
      studyType: 'Master of Science',
      startDate: '2014',
      endDate: '2016',
      gpa: '3.8',
      courses: [],
    },
    {
      institution: 'US Military Academy at West Point',
      area: 'Economics and Statistics',
      studyType: 'Bachelor of Science',
      startDate: '2007',
      endDate: '2011',
      gpa: '3.87',
      courses: [ ],
    },
  ],
  awards: [
    {
      title: 'Bronze Star',
      date: '2014',
      awarder: 'US Army',
      summary: 'Awarded for service during a combat deployment to Afghanistant',
    },
    {
      title: 'INFORMS Undergraduate Operations Research Prize',
      date: '2011',
      awarder: 'INFORMS',
      summary: 'Awarded to the top undergraduate paper in operations research or management science. ',
    },
    {
      title: 'Hromadka Memorial Award',
      date: '2011',
      awarder: 'West Point',
      summary: 'Presented to the student at the United States Military Academy who demonstrates the greatest potential for future studies in the field of mathematics or operations research.',
    },
  ],
  publications: [
    {
      name: 'Applying Bootstrap Methods to System Reliability',
      publisher: 'The American Statistician',
      releaseDate: '2014',
      website: '',
      summary: 'A method for estimating system reliability using bootstrapping that eliminates resampling error.',
    },
    {
      name: 'Bayesian Applications in A Probablity Programming Language',
      publisher: 'West Point',
      releaseDate: '2011',
      website: '',
      summary: 'Senior thesis that implements a software package to perform Bayesian statistics using a computer algebra system.',
    },
  ],
  skills: [
    {
      name: 'Python',
      level: '100',
    },
    {
      name: 'React',
      level: '70',
    },
    {
      name: 'Postgres',
      level: '90',
    },
    {
      name: 'Machine Learning',
      level: '90',
    },
    {
      name: 'HDFS',
      level: '80',
    },
    {
      name: 'Javascript (ES6)',
      level: '75',
    },
    {
      name: 'Redis',
      level: '80',
    },
    {
      name: 'neo4j',
      level: '70',
    },
    {
      name: 'Docker',
      level: '70',
    },
  ],
  languages: [
    {
      name: 'English',
      level: 'Native speaker',
    },
    {
      name: 'German',
      level: 'Intermediate',
    },
    {
      name: 'Spanish',
      level: 'Intermediate',
    },
    {
      name: 'Russian',
      level: 'Beginner',
    },
    {
      name: 'Hebrew',
      level: 'Beginner',
    },
  ],
  interests: [
    {
      name: 'Trail Running',
      keywords: [
      ],
    },
    {
      name: 'Rock Climbing',
      keywords: [
      ],
    },
  ],
};

export const locationType = PropTypes.shape({
  address: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  countryCode: PropTypes.string,
  region: PropTypes.string,
}).isRequired;

export const profileType = PropTypes.shape({
  network: PropTypes.string,
  username: PropTypes.string,
  url: PropTypes.string,
}).isRequired;

export const basicsType = PropTypes.shape({
  name: PropTypes.string,
  label: PropTypes.string,
  picture: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
  location: PropTypes.shape(locationType),
  profiles: PropTypes.arrayOf(profileType),
}).isRequired;

export const workType = PropTypes.arrayOf(PropTypes.shape({
  company: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const volunteerType = PropTypes.arrayOf(PropTypes.shape({
  organization: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const educationType = PropTypes.arrayOf(PropTypes.shape({
  institution: PropTypes.string,
  area: PropTypes.string,
  studyType: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  gpa: PropTypes.string,
  courses: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const awardsType = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.string,
  awarder: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

export const publicationsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  publisher: PropTypes.string,
  releaseDate: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

export const skillsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const languagesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
})).isRequired;

export const interestsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const referencesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  reference: PropTypes.string,
})).isRequired;

export const resumeType = PropTypes.shape({
  basics: basicsType,
  work: workType,
  volunteer: volunteerType,
  education: educationType,
  awards: awardsType,
  publications: publicationsType,
  skills: skillsType,
  languages: languagesType,
  interests: interestsType,
  references: referencesType,
});
