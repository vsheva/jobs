import Hero from '../componets/Hero';
import HomeCards from '../componets/HomeCards';
import JobListings from '../componets/JobListings';
import ViewAllJobs from '../componets/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;

// (
//     <>
//       <Navbar />
//       <Hero />
//       <HomeCards />
//       <JobListings />
//       <ViewAllJobs />
//     </>
//   );
