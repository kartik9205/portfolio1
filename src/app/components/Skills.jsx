import { FaCss3, FaHtml5, FaNodeJs, FaReact,  } from "react-icons/fa";
import { IoAddCircleSharp} from "react-icons/io5";
const Skills = () => {
  const skills  = [
    { icon: <IoAddCircleSharp />, level: "Bridal" },
    { icon: <IoAddCircleSharp />, level: "Party-Make-Up" },
    { icon: <IoAddCircleSharp />, level: "Hair Care" },
    { icon: <IoAddCircleSharp />, level: "Facials & Cleanups" },
    { icon: <IoAddCircleSharp />, level: "Waxing" },
    { icon: <IoAddCircleSharp />, level: "Manicure & Padicure" }
  ];
  return (
    <section
      id="skills"
      className="py-10 bg-gray-800 mt-8 text-gray-100 text-center"
    >
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3>My</h3>
        <h3 className="text-cyan-600">Services</h3>
      </div>
      {/* <p className="text-gray-400 mt-3 text-lg"></p> */}
      <ul className="flex items-center justify-center mt-12 gap-10 flex-wrap">
        {skills?.map((skill, i) => (
          <li key={i}>
            <div className="text-2xl flex justify-center">{skill.icon}</div>
            <div className="text-2xl flex justify-center ">{skill.level}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
