import { InlineCode } from "@/once-ui/components";
import { Model } from "@/components/blog/Model"
const person = {
  firstName: "Ruth",
  lastName: "Bourke",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Animation Artist",
  avatar: "/images/RuthIcon.jpg",
  // location: "Irish based in Montreal", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

// const newsletter = {
//   display: true,
//   title: <>Subscribe to {person.firstName}'s Newsletter</>,
//   description: (
//     <>
//       I occasionally write about design, technology, and share thoughts on the intersection of
//       creativity and engineering.
//     </>
//   ),
// };

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ruth-bourke-604a24134/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ruthbourkeabc@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am Animation Artist based in Montreal, Canada. I have experience in 2D and 3D animation. I was a Junior Ink and Paint Artist for Studio Meala. A Junior Build and Rig artist and Scene Prep artist for Kavaleer Productions.
<br></br>
<br></br>
I am proficient in After effects, Blender, Zbrush, Maya, Photoshop, TVpaint and Toonboom. I am flexible and produce high quality work within tight deadlines.
<br></br>
<br></br>
I also edited and help produce the Behind the Half Door Podcast featuring Biddy McLoughlin.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kavaleer Productions",
        timeframe: "Jan 2023 - Feb 2024",
        role: "Junior 2D Rigger/Scene prep Artist",
        achievements: [
          <>
            Worked on Season 3 of "Boy, Girl, Cat, Dog, Mouse, Cheese".
          </>,
          <>
            Assembled scenes for animators in Adobe Animate
          </>,
          <>
            Build props and characters for a 2D animated show
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Studio Meala",
        timeframe: "Jul 2022 - Sep 2022",
        role: "Junior Ink and Paint Artist",
        achievements: [
          <>
            Worked on the "Mkhuzi: Spirit Racer" episode for "Kizazi Moto" on Disney+
          </>,
          <>
            Asissted in the coloring scenes of 2D animation in TVpaint
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Dún Laoghaire Institute of Art, Design and Technology",
        description: <>Post graduate certificate, 3D sculpting in zbrush.</>,
      },
      {
        name: "Ballyfermot College of Further Education",
        description: <>Bachelor's degree, Animation, Interactive Technology, Video Graphics and Special Effects,</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title:"3D Software",
        description: <>
        <b><pre> Zbrush &nbsp; Blender</pre>
        <pre> Maya &nbsp; 3DSMax</pre> </b>       
        </>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "2D Software",
        description: <>
          <b><pre> Adobe Animate &nbsp; Toonboon Harmony</pre>
          <pre> Storyboard Pro &nbsp; TVpaint</pre></b>   
        </>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Tracking Software",
        description: <>
          <b><pre> Shotgrid &nbsp; Office 365</pre></b>   
        </>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  label: "3D",
  title: "3D Projects",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
  images: [
    {
      src: "/images/3DImages/Room_night_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/3DImages/Room_render.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/3DImages/sword_v1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/3DImages/Grace_render_exp.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/3DImages/Pumpkin_Final.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/3DImages/Pumpkin_Final_side.png",
      alt: "image",
      orientation: "horizontal",
    },
    
  ],
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
  
};

//   label: "Gallery",
//   title: "My photo gallery",
//   description: `A photo collection by ${person.name}`,
//   // Images from https://pexels.com
//   images: [
//     {
//       src: "/images/gallery/img-01.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-02.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-03.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-04.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-05.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-06.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-07.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-08.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-09.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-10.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-11.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-12.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-13.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-14.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//   ],
// };

const gallery = {
  label: "Live Drawings",
  title: "My Live Drawings",
  description: `A collection of live drawings from ${person.name}`,
  images: [
    {
      src: "/images/liveDrawings/lifedrawing0.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/liveDrawings/lifedrawing3.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/liveDrawings/lifedrawing1.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/liveDrawings/lifedrawing2.png",
      alt: "image",
      orientation: "vertical",
    },
    
    {
      src: "/images/liveDrawings/lifedrawing4.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/liveDrawings/lifedrawing5.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/liveDrawings/lifedrawing6.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/liveDrawings/lifedrawing7.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/liveDrawings/lifedrawing8.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/liveDrawings/lifedrawing9.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/liveDrawings/lifedrawing10.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};






export { person, social, home, about, blog, work, gallery};
