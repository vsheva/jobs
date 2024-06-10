import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobListing = job => {
  console.log(job);
  const [showDescription, setShowDescription] = useState(false);

  let description = job.job.description;
  if (!showDescription) {
    description = description.substring(0, 150) + '...';
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.job.type}</div>
          <h3 className="text-xl font-bold">{job.job.title}</h3>
        </div>
        <div className="mb-5">{description}</div>/
        <button
          onClick={() => {
            //setShowDescription(!showDescription); ---value or function
            setShowDescription(prevState => !prevState); //or function
          }}
          className="text-indigo-500 mb-5 
        hover:text-indigo-600"
        >
          {showDescription ? 'less' : 'more'}
        </button>
        <h3 className="text-indigo-500 mb-2">{job.job.salary} / Year</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1" />
            {job.job.location}
          </div>
          <Link
            to={`./job/${job.job.id}`} //в строке меняем JS
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
