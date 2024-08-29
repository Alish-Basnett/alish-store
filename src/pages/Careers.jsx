import React from "react";

const Careers = () => {
  // Mock data for job listings and benefits
  const jobListings = [
    {
      id: 1,
      title: "Store Manager",
      location: "Pashupatinagar, Nepal",
      type: "Full-time",
      description:
        "Join our team as a Store Manager to oversee daily operations, manage staff, and ensure a seamless shopping experience for our customers.",
      requirements: [
        "3+ years of experience in retail management",
        "Strong leadership and communication skills",
        "Proficiency in inventory management and sales tracking",
        "Customer-focused mindset",
      ],
    },
    {
      id: 2,
      title: "Sales Associate",
      location: "Pashupatinagar, Nepal",
      type: "Part-time",
      description:
        "As a Sales Associate, you will assist customers in finding products, processing transactions, and maintaining store appearance.",
      requirements: [
        "1+ years of experience in retail or customer service",
        "Strong interpersonal and communication skills",
        "Ability to work in a fast-paced environment",
        "Attention to detail and customer satisfaction",
      ],
    },
    {
      id: 3,
      title: "Inventory Specialist",
      location: "Pashupatinagar, Nepal",
      type: "Full-time",
      description:
        "We are looking for an Inventory Specialist to manage stock levels, process orders, and ensure that products are available for customers.",
      requirements: [
        "2+ years of experience in inventory management",
        "Proficiency in inventory software and data analysis",
        "Strong organizational skills",
        "Ability to work independently",
      ],
    },
  ];

  const benefits = [
    "Competitive salary and bonuses",
    "Employee discount on store products",
    "Health and wellness programs",
    "Professional development and training",
    "Friendly and supportive work environment",
  ];

  return (
    <div className="bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Careers at Our Retail Store
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="card border border-gray-300 shadow-md p-4"
            >
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-gray-500">{job.type}</p>
              <p className="mt-2">{job.description}</p>
              <h4 className="mt-4 font-semibold">Requirements:</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <button className="btn btn-primary mt-4">Apply Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;
