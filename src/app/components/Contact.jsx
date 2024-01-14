import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillEnvironment,
} from "react-icons/ai";
const Contact = () => {
  const contact_info = [
    // { icon: <AiOutlineMail />, text: "yourname@gmail.com" },
    { icon: <AiOutlinePhone />, text: "8810301513" },
    // { icon: <AiFillEnvironment />, text: "yourlocation" },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section id="contact" className="py-10 px-3 text-white text-center mt-8">
      <div className="text-4xl font-semibold flex gap-2 justify-center">
        <h3>Contact</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
      <div
        className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
      >
        
{/*         
        <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-600 rounded-md border-none p-2 text-2xl placeholder-slate-500"
          />
          <input
            type="Email"
            placeholder="Your Email Address"
            className="bg-gray-600 rounded-md border-none p-2 text-2xl placeholder-slate-500"
          />
          <textarea
            placeholder="Your Message"
            className="bg-gray-600 rounded-md border-none p-2 text-2xl placeholder-slate-500"
            rows={10}
          ></textarea>
          <button className="btn-primary w-fit">Send Message</button>
        </form> */}
        
        
        <ul className="flex flex-col gap-7 list-none">
          {contact_info?.map((contact, i) => (
            <li
              key={i}
              className="flex flex-row text-left gap-4 flex-wrap items-center"
            >
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                {contact.icon}
              </div>
              <div className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full ">
                {contact.text}
              </div>
              <Link href={"https://maps.app.goo.gl/G1JdsB8LjhJo8nxB8"}>

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  {"Google map Link "}
</button>

</Link>

<Link href={"https://www.instagram.com/blessingmakeover7/"}>

          <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            {"Instagram Link..."}
          </button>

        </Link>
              
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
