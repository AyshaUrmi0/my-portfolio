import React from "react";

const Education = () => {
  return (
    <div className="py-16 bg-base-100" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center">Education</h2>
        <div className="flex flex-col items-center">
          <div className="w-full shadow-lg card md:w-3/4 bg-base-200">
            <div className="card-body">
              <h3 className="text-xl font-bold">East Delta University</h3>
              <p className="text-md">BSc in Computer Science and Engineering</p>
              <p className="text-sm text-gray-600">Chattogram, Bangladesh</p>
              <p className="text-sm">GPA: 3.60/4.00</p>
              <p className="text-sm">
                <strong>Scholarship:</strong> Recipient of 33% BoT Grant Scholarship on merit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
