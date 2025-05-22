"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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
  const [selected, setSelected] = useState(false);
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = form.email.value;
    const company = form.company.value;
    const phone = form.phone.value || "-";
    const service = form.service.value || "-";
    const message = form.message.value;

    const subject = `Ketertarikan Kandidat untuk Posisi ${service}`;

    const body = `
        Halo Akbar Rizky Rabbani,

        Saya ${name}, ingin menyampaikan ketertarikan saya untuk posisi ${service} di perusahaan Kami.

        Berikut detail saya:
        - Nama: ${name}
        - Email: ${email}
        - No. Telepon: ${phone}
        - Perussahaan: ${company}
        - Posisi yang diminati: ${service}

        Pesan tambahan:
        ${message}

        Terima kasih atas kesempatannya. Saya tunggu kabar baik dari Anda.

        Hormat saya,  
        ${name}
        `;

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=arrizki0098@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");
  };

  const handleClick = () => {
    setService("Front End Developer");
    setSelected(true);
  };

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
            <form
              onSubmit={handleSubmit}
              action="mailto:duniaduel21@gmail.com"
              method="POST"
              encType="text/plain"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  required
                />
                <Input name="email" placeholder="Email" type="email" required />
                <Input name="company" placeholder="Company" type="text" />
                <Input name="phone" placeholder="Phone" type="tel" />
              </div>

              {/* Replace Select with hidden input + buttons */}
              <div>
                <input
                  type="hidden"
                  name="service"
                  id="selectedService"
                  value={service}
                />
                <p className="text-white mb-2">Select A Service:</p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${
                      selected ? "bg-accent-hover" : "bg-primary"
                    }`}
                    onClick={handleClick}
                  >
                    Front End Developer
                  </button>
                </div>
              </div>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Tulis Pesan Disini"
                required
              />

              <Button size="md" type="submit" className="max-w-40">
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
