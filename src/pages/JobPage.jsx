import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const JobPage = () => {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const { jobId } = useParams();
  console.log(jobId);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`/api/jobs/${jobId}`);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return <div>JobPage</div>;
};

export default JobPage;
