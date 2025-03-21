import React from "react";

interface EmployeeInfoProps {
  label: string;
  value: string;
  isCopy?: boolean;
}

const EmployeeInfo: React.FC<EmployeeInfoProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <h3 className="text-lg font-bold text-gray-800 dark:text-aliceblue">
        {label}
      </h3>
      <div className="flex items-center space-x-2">
        <p className="text-gray-600 dark:text-aliceblue">{value}</p>
      </div>
    </div>
  );
};

export default EmployeeInfo;
