import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front End Developer</span>
            <h1 className="h1 mb-6">
              Hello Aku <br />{" "}
              <span className="text-accent text-[60px]">
                Akbar Risky Rabbani
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a Front End Developer based in Indonesia. I have rich
              experience in web site design and building, also I am good at
              responsive design, web animations, and front-end libraries.
            </p>
            {/* btn & sosial */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/uc?export=download&id=1pDfVLWgIBQH84kMfbxhNvEQzv4kZ4C4f" // Replace FILE_ID with your actual file ID
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase flex items-center gap-2"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>download cv</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border-accent rounded-full flex
                justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
