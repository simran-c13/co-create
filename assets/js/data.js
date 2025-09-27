window.CoCreateData = {
  currentUser: null,
  users: [
    {
      id: 'u1',
      name: 'Alex Baker',
      school: 'USC MS Computer Science',
      email: 'alex@usc.edu',
      skills: ['React', 'Figma', 'UX Design', 'API Integration', 'JavaScript', 'Node.js'],
      photo: 'https://i.pravatar.cc/100?img=1',
      resumeUrl: '',
    },
    {
      id: 'u2',
      name: 'Simran Chandak',
      school: 'USC MS Business Analytics',
      email: 'simran@usc.edu',
      skills: ['UX Design', 'Figma', 'Prototyping', 'User Research', 'Wireframing'],
      photo: 'https://i.pravatar.cc/100?img=2',
      resumeUrl: '',
    },
    {
      id: 'u3',
      name: 'Vivan Doshi',
      school: 'USC MBA Finance',
      email: 'vivan@usc.edu',
      skills: ['Data Visualization', 'React', 'Financial Modeling', 'API Integration', 'Quantitative Analysis', 'Market Research'],
      photo: 'https://i.pravatar.cc/100?img=3',
      resumeUrl: '',
    },
  ],
  projects: [
    {
      id: 'p1',
      title: 'NYC Uber Rides Analysis',
      overview: 'NYC Uber vs Taxis analysis using advanced Machine learning algorithms...',
      category: 'Project',
      requiredSkills: ['HTML', 'CSS', 'Java', 'Golang'],
      timeRequired: '3 hours/week',
      creatorId: 'u1',
      team: ['u2'],
      savedBy: ['u2', 'u3'],
      postedAt: 'Aug 25, 2025',
    },
    {
      id: 'p2',
      title: 'CoCreate UX Design',
      overview: 'Hi everyone, I\'m looking for people to collaborate on my project CoCreate with respect to UX design. The project aims at creating a seamless collaboration platform...',
      category: 'Hackathon',
      requiredSkills: ['UX Design', 'Figma', 'Prototyping', 'User Research', 'Wireframing'],
      timeRequired: '5-7 hours/week',
      creatorId: 'u2',
      team: ['u1'],
      savedBy: ['u1', 'u3'],
      postedAt: 'Aug 20, 2025',
    },
    {
      id: 'p3',
      title: 'Stocks Dashboard',
      overview: 'Creating a one-stop-all stocks dashboard with personalised visualisations, news to make informed decisions while investing!',
      category: 'Project',
      requiredSkills: ['Data Visualization', 'React', 'Financial Modeling', 'API Integration', 'Quantitative Analysis', 'Market Research'],
      timeRequired: '4-6 hours/week',
      creatorId: 'u3',
      team: ['u1'],
      savedBy: ['u1', 'u2'],
      postedAt: 'Aug 18, 2025',
    },
    {
      id: 'p4',
      title: 'Trojan Marketplace',
      overview: 'A marketplace for students to trade items in/out ...',
      category: 'Hackathon',
      requiredSkills: ['React', 'Design', 'Node.js'],
      timeRequired: '5-7 hours/week',
      creatorId: 'u1',
      team: ['u2', 'u3'],
      savedBy: ['u2'],
      postedAt: 'Aug 15, 2025',
    },
    {
      id: 'p5',
      title: 'Carpool Match',
      overview: 'Students can carpool to campus, app matches routes...',
      category: 'Case Comp',
      requiredSkills: ['Data Visualization', 'React'],
      timeRequired: '2-3 hours/week',
      creatorId: 'u2',
      team: [],
      savedBy: ['u1', 'u3'],
      postedAt: 'Aug 10, 2025',
    }
  ],
  messages: [
    {
      id: 'm1',
      from: 'u2',
      to: 'u1',
      text: 'Hey! I saw your NYC Uber project and I\'m really interested in collaborating. I have experience with data analysis and machine learning.',
      timestamp: '2025-08-25T10:30:00Z'
    },
    {
      id: 'm2',
      from: 'u1',
      to: 'u2',
      text: 'That sounds great! I\'d love to have you on the team. When can we meet to discuss the project details?',
      timestamp: '2025-08-25T11:15:00Z'
    },
    {
      id: 'm3',
      from: 'u3',
      to: 'u1',
      text: 'Hi Alex! I\'m working on a similar data visualization project. Would you be interested in sharing insights?',
      timestamp: '2025-08-24T14:20:00Z'
    },
    {
      id: 'm4',
      from: 'u1',
      to: 'u3',
      text: 'Absolutely! I\'d love to collaborate. Your stocks dashboard project looks really interesting.',
      timestamp: '2025-08-24T15:45:00Z'
    }
  ]
};

window.getUserById = function(id){
  return window.CoCreateData.users.find(u => u.id === id);
};

window.getProjectById = function(id){
  return window.CoCreateData.projects.find(p => p.id === id);
};
