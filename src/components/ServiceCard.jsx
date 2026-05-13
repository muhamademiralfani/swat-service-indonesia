import React from 'react';

const ServiceCard = ({ title, description, features }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border-b-8 border-transparent hover:border-secondary transition-all duration-300 group">
      <div className="mb-6">
        {/* Placeholder untuk Icon */}
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
          <div className="w-8 h-8 bg-primary group-hover:bg-secondary rounded-sm"></div>
        </div>
      </div>
      <h4 className="text-2xl font-bold text-primary mb-4">{title}</h4>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-500">
            <span className="text-secondary mr-2">✔</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;