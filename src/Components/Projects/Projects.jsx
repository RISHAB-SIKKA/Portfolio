// import React from 'react';
// import ProjectCard from './ProjectCard';

// const Projects = () => {
//   return (
//     <div id="Projects" className="justify-center bg-gradient-to-br from-gray-200 to-gray-300 p-8 md:p-16 lg:p-24 min-h-screen">
//       {/* Projects Title */}
//       <span className="block text-2xl md:text-3xl font-bold text-white bg-[#8b8a91] px-6 py-3 rounded-lg shadow-md w-max">
//         Projects
//       </span>

//       {/* Projects Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
//         <ProjectCard
//           title="WebGeo - Here Maps & OSM Maps"
//           main="An interactive map application built with JavaScript, React.js, and ASP.NET, leveraging OpenLayers for advanced geospatial visualization."
//         />
//         <ProjectCard
//           title="Restaurant Ordering System"
//           main="A restaurant management system using ASP.NET Core MVC & Entity Framework with CRUD functionality, shopping cart, and order processing."
//         />
//         <ProjectCard
//           title="Real-Time Face Recognition App"
//           main="Led a facial recognition project utilizing Python, OpenCV, and HaarCascade classifier, achieving 94% accuracy in face detection."
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id="Projects" className='p-2 md:p-6  min-h-screen'>
        <h2 className="relative top-4 left-4 text-[#132238] text-3xl font-bold border-b-2 border-[#132238]">
        Projects
      </h2>
        <div className='p-10 gap-8 md:p-30 flex justify-between'>
            <ProjectCard
                title="Drone Survey" 
                main="
                • Node.js, Express.js, Mongodb, mongoose
                • Utilized the Haversine Algorithm to compute the radius around specific latitude and longitude coordinates.
                • Generated multiple waypoints for precise drone hovering and path planning.
                • Multiple endpoints have been developed for managing users, drones, missions, and textflight logs.
                • Leveraged the fs module in Node.js to dynamically generate and provide flight logs in PDF format for end-users."
            />
            <ProjectCard 
                title=" Uber Clone" 
                main=" ∗ Node.js, Express.js, Mongodb, mongoose, React.js React.js, TailWind CSS
 ∗ Developed a full-stack Uber clone application using the MERN stack (MongoDB, Express.js, React.js, Node.js).
 Implemented user authentication, real-time ride tracking, driver-passenger interaction, and location-based services with
 Google Maps API. Focused on scalable backend design and responsive UI."
            />
            <ProjectCard 
                title=" URL Shortner" 
                main=" · Node.js, Express.js, Mongodb
                Implements URL creation, redirection,
 and analytics tracking. Uses shortid for unique shortId. MongoDB schema includes redirectURL, shortId, and
 visitHistory. Routes include POST for creation, GET for redirection analytics."
            />
        </div>
      
    </div>
  )
}

export default Projects
