import Image from "next/image";

const teamMembers = [
  {
    name: "Salman Hussain",
    role: "Co-founder",
    img: "/assets/img/about2/ab-3.jpg",
  },
  {
    name: "Hunain Ghazi",
    role: "HR Manager",
    img: "/assets/img/about2/ab-3.jpg",
  },
  {
    name: "Talha Shahzad",
    role: "Accounts Manager",
    img: "/assets/img/about2/ab-3.jpg",
  },
  {
    name: "Muhammad Zahid",
    role: "Full-Stack Designer",
    img: "/assets/img/about2/ab-3.jpg",
  },
  {
    name: "Ahmed",
    role: "2D Animator/Editor",
    img: "/assets/img/about2/ab-3.jpg",
  },
  {
    name: "M. Ahmed",
    role: "Developer",
    img: "/assets/img/about2/ab-3.jpg",
  },
];

const team = [
  {
    name: "Ramsha",
    role: "Developer",
    img: "/assets/img/about2/ab-3.jpg",
  },
  {
    name: "Laiba",
    role: "Content Writer",
    img: "/assets/img/about2/ab-3.jpg",
  },
  {
    name: "Abdul Rehman",
    role: "SEO Executive",
    img: "/assets/img/about2/ab-3.jpg",
  },
];

const Section5 = () => {
  return (
    <div className="tw-bg-[#F7F9FB] tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-py-20">
      <div className="tw-max-w-5xl tw-mx-auto tw-text-center">
        <h2 className="tw-font-semibold tw-text-5xl tw-mb-12">
          The Minds Behind <span className="tw-text-[#7944FA]">DigiExpo</span>
        </h2>

        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-6 tw-gap-8 tw-place-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="tw-flex tw-flex-col tw-items-center">
              <div className="tw-w-36 tw-h-36 tw-rounded-3xl tw-relative tw-overflow-hidden tw-shadow-md hover:tw-shadow-lg tw-transition-shadow">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="tw-object-cover tw-rounded-3xl"
                />
              </div>
              <span className="tw-font-semibold tw-mt-4">{member.name}</span>
              <p className="tw-text-gray-500 tw-text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-mt-4 tw-max-w-lg tw-mx-auto tw-items-center">
          {team.map((member, index) => (
            <div key={index} className="tw-flex tw-flex-col tw-items-center">
              <div className="tw-w-36 tw-h-36 tw-rounded-3xl tw-relative tw-overflow-hidden tw-shadow-md hover:tw-shadow-lg tw-transition-shadow">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="tw-object-cover tw-rounded-3xl"
                />
              </div>
              <span className="tw-font-semibold tw-text-center tw-text-black tw-mt-4">{member.name}</span>
              <p className="tw-text-black  tw-text-center tw-text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
