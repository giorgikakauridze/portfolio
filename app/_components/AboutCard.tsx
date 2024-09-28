import React from "react";

interface AboutCardProps {
  children: React.ReactNode;
  header: string;
  content: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ children, header, content }) => {
  return (
    <div className="bg-[rgb(40,36,85)] verybig:p-8   verybig:text-sm  rounded-[40px] p-16 w-[85%] gap-10  flex">
      <div>
        <div className="bg-[rgb(102,57,228)] p-3 rounded-3xl ">{children} </div>
      </div>
      <div>
        <h1 className=" font-[1000] text-xl">{header}</h1>
        <div className="mt-2">{content}</div>
      </div>
    </div>
  );
};

export default AboutCard;
