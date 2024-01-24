// eslint-disable-next-line no-unused-vars
import React, {useEffect} from "react";
import "./About.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Header from "../../components/header/Header";

const About = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);
  const handleReadMoreClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    alert("Please sign up to access the article");
  };

  return (
    <>
      <Header />
      <section className="about-wrapper">
        <div className="h-[650px] w-full bg-gradient-to-r from-purple-800 via-purple-500 to-indigo-700 bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-16">
          <div className=" bg-[#6b00d7] lg:w-[45%] lg:ml-20 h-[300px] rounded">
            <h1 className="lg:text-[40px] font-bold px-8 py-4">
              Dear beautiful you!
            </h1>
            <p className="text-white px-8">
              Just like a garden needs a gardener to tend to it, your life needs
              you to nurture your habits. Your daily choices and routines are
              like the seeds you plant, and with each passing day, they grow
              into beautiful habits that shape your world✨.
            </p>
            <div className="flex px-8 lg:py-10 py-6">
              <a
                className="font-semibold flex rounded bg-white px-4 py-2 text-black"
                href="#read"
              >
                Read On{" "}
                <span className="px-2 pt-[0.7px]">
                  <BsFillArrowRightCircleFill size={20} color="black" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* second part  */}
        <div className="lg:px-[10rem] justify-center items-center" id="read">
          <h1 className="text-[22px] font-bold text-center justify-center lg:text-[40px]">
            Blog
          </h1>

          {/* flex direction  */}
          <div className="flex lg:flex-row flex-col py-6">
            <img
              className="lg:w-[30%] w-full h-[30%] "
              src="/blog1.jpg"
              alt="image"
            />
            <div className="flex-col px-14">
              <h2 className="my-4 font-bold"> The Journey Begins</h2>
              <p className="lg:w-[80%] ">
                Imagine you are on a magical journey, and every day is a new
                chapter in your book of life. Your habits are like the spells
                you cast on this enchanting adventure. They may start small,
                like flickering fireflies, but they gradually light up your
                path. As you work on your habits, you become the wizard of your
                own destiny, shaping the story as you go.
              </p>
              <a
                className="font-semibold flex rounded px-4 py-2 text-white bg-black lg:w-[30%] mt-4"
                href="/"
                onClick={handleReadMoreClick}
              >
                Click here to read more
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col py-6">
            <img
              className="lg:w-[30%] w-full h-[30%]"
              src="/blog2.jpg"
              alt="image"
            />
            <div className="px-14">
              <h2 className="my-4 font-bold"> Small Steps, Big Adventures</h2>
              <p className="lg:w-[80%]">
                Just like a tiny ant can carry a giant crumb, your small daily
                actions can lead to monumental achievements. These little habits
                are like breadcrumbs that guide you to your dreams. With
                patience and consistency, you will find yourself dancing with
                the stars. So, keep taking those small steps, and one day, you
                will be waltzing in the galaxy of your desires.
              </p>
              <a
                className="font-semibold flex rounded px-4 py-2 text-white bg-black lg:w-[30%] mt-4"
                href="/"
                onClick={handleReadMoreClick}
              >
                Click here to read more
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col py-6">
            <img
              className="lg:w-[30%] w-full h-[30%]"
              src="/blog3.jpg"
              alt="image"
            />
            <div className="px-14">
              <h2 className="my-4 font-bold">
                {" "}
                Mastering the Art of Habit Craft
              </h2>
              <p className="lg:w-[80%]">
                Building habits is like being a skilled painter. Each day, you
                dip your brush in the palette of time and add vibrant strokes to
                your life's canvas. Your habits are the colors that shape your
                masterpiece. Sometimes, it's a mix of bold and subtle hues,
                creating a symphony of balance. Remember, it is not about
                perfection but the joy of the creative process.
              </p>
              <a
                className="font-semibold flex rounded px-4 py-2 text-white bg-black lg:w-[30%] mt-4"
                href="/"
                onClick={handleReadMoreClick}
              >
                Click here to read more
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col  py-6">
            <img
              className="lg:w-[30%] w-full h-[30%]"
              src="/blog4.jpg"
              alt="image"
            />
            <div className="px-14">
              <h2 className="my-4 font-bold"> The Garden of Life</h2>
              <p className="lg:w-[80%]">
                Picture your life as a lush garden, and your habits are the
                seeds you sow. With care and diligence, you nurture them into
                flourishing plants. As you tend to your garden of habits, you
                watch it bloom into a paradise of happiness and fulfillment. So,
                keep watering, weeding, and loving your garden, for it will
                yield a harvest of dreams come true.
              </p>
              <a
                className="font-semibold flex rounded px-4 py-2 text-white bg-black lg:w-[30%] mt-4"
                href="/"
                onClick={handleReadMoreClick}
              >
                Click here to read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
