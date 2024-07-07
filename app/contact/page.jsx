"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icons: <FaPhoneAlt />,
    title: "Phone",
    Description: "+62 812 2413 5562",
  },
  {
    icons: <FaEnvelope />,
    title: "Email",
    Description: "Arrizki0098@gmail.com",
  },
  {
    icons: <FaMapMarkedAlt />,
    title: "Address",
    Description:
      "Gang PLO No 50J, Mampang Prapatan, Jakarta Selatan, Indonesia",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ea sed maiores a animi eius, quos, in architecto non
                voluptatibus rerum reprehenderit!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="First Name" type="firstname" />
                <Input placeholder="Last Name" type="firstname" />
                <Input placeholder="Email" type="Email Address" />
                <Input placeholder="Phone" type="Phone Number" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select A Service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select A Service</SelectLabel>
                    <SelectItem value="est">Front End Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Tulis Pesan Disini"
              />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icons}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-xl text-accent">{item.title}</p>
                      <h3 className="text-white/60">{item.Description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
