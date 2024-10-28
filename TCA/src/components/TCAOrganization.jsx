import React from 'react';
import UniversityIcon from '../assets/tca-navigation.png';
import UniversityIcon1 from '../assets/Artboard 4.png';

const images = [
  {
    src: UniversityIcon,
    title: "University Name",
    subtitle: "THE SUBTITLE",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum "
  },
  {
    src: UniversityIcon,
    title: "The Catalyzer",
    subtitle: "THE SUBTITLE",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum "
  },
  {
    src: UniversityIcon,
    title: "The 400 Blows",
    subtitle: "THE SUBTITLE",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum "
  },
  // Add more images here
  {
    src: UniversityIcon,
    title: "Neptune",
    subtitle: "THE SUBTITLE",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum "
  },
  {
    src: UniversityIcon,
    title: "The New Vibe",
    subtitle: "THE SUBTITLE",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum "
  },
  {
    src: UniversityIcon,
    title: "The New Vibe",
    subtitle: "THE SUBTITLE",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum "
  },
  {
    src: UniversityIcon,
    title: "The New Vibe",
    subtitle: "THE SUBTITLE",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum "
  },
  {
    src: UniversityIcon,
    title: "The New Vibe",
    subtitle: "THE SUBTITLE",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum "
  },
  {
    src: UniversityIcon,
    title: "The New Vibe",
    subtitle: "THE SUBTITLE",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum "
  },
  {
    src: UniversityIcon,
    title: "The New Vibe",
    subtitle: "THE SUBTITLE",
    description: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum "
  },
];

const ImageCard = ({ src, title, subtitle, description }) => (
  <div className="lg:w-1/5 sm:w-1/2 p-4">
    <div className="flex relative">
      <img
        alt="gallery"
        className="absolute inset-0 w-full h-auto object-cover object-center"
        src={src}
      />
      <div className="px-8 py-10 relative text-center z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-100">
        <h2 className="tracking-widest   text-center text-sm title-font font-Thin text-[#2df537] mb-1">{subtitle}</h2>
        <h1 className="title-font text-lg  text-center font-Extrabold text-white mb-3">{title}</h1>
        <p className="leading-relaxed text-center ">{description}</p>
      </div>
    </div>
  </div>
);

const TCAorganization = () => {
  return (
    <section className="text-white bg-black body-font">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-5xl font-medium title-font mb-4 text-white">TCA University and Organizational</h1>
          <h1 className="sm:text-5xl text-5xl font-medium title-font mb-4 text-white">Learning Initiatives</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#d4d4d4]">
          Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum
          Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              src={image.src}
              title={image.title}
              subtitle={image.subtitle}
              description={image.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TCAorganization;
