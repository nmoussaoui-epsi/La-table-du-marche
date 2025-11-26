import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, bgImage }) => {
  return (
    <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        {subtitle && (
          <p className="font-serif italic text-primary text-lg md:text-xl mb-3 tracking-wider">
            {subtitle}
          </p>
        )}
        <h1 className="font-sans font-bold text-4xl md:text-6xl text-white tracking-widest uppercase border-b-2 border-primary pb-4 inline-block">
          {title}
        </h1>
      </div>
    </div>
  );
};