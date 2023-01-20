export type TestimonialProps = {
  id: number;
  imageSrc: string;
  message: string;
  name: string;
  company: string;
};

export const testimonialsData = <TestimonialProps[]>[
  {
    id: 1011,
    imageSrc:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    message: `My biggest achievement since joining ALTIUS Fitness Centre is I’ve slimmed down to 30 in waist and lost about 11 kgs while becoming stronger than I’ve ever been before. All of these improvements have made me a more agile and active tennis player, allowing me to compete at higher levels of competition. I’m extremely proud of my fitness improvements so far and thankful for the help from all the trainers to get here!`,
    name: 'Dr. Merina Thokchom',
    company: 'Doctor, JNIMS',
  },
  {
    id: 1012,
    imageSrc:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    message: `Since joining Altius Fitness Centre one year ago, I have become stronger and I have lost 8kgs.  The workouts are always different, hard and fun!  The trainers will push you harder than though you could go. When I joined, I also signed up for their FITNESS CHALLENGE program. The meal plans were easy to customize to your personal needs. I really appreciate that the environment and culture is relaxed and comfortable.`,
    name: 'Dr. H. Jasmine',
    company: 'Doctor, RIMS',
  },
  {
    id: 1013,
    imageSrc:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    message:
      'I have been training at Altius Fitness Centre for 2 years. I look forward to coming into the studio because I know that I will get a GREAT WORKOUT! I love training here and I am getting so much stronger and tighter. The coaches pushed me beyond what I thought I could handle! I love the atmosphere and the people. They make it so comfortable to be in a fitness environment.',
    name: 'Naorem Inaocha',
    company: 'CFO, Abcop Limited',
  },
  {
    id: 1014,
    imageSrc:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    message:
      'My wife joined and after a few months she asked me if I would accompany her which motivated me to join as well. I am stronger and leaner than any time in my life, including high school and college, when I played varsity sports. I feel challenged by the amazing trainers at Altius Fitness Centre and keep finding new goals to set and to overcome.',
    name: 'Ksh. Somorjit',
    company: 'Director, Myspace Company',
  },
];
