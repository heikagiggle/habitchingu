import React, {useEffect} from "react";
import Header from "../../components/header/Header";
import "./Review.css";

const reviewData = [
  {
    image: "./blog1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus dui eu tortor venenatis, mattis hendrerit tellus pellentesque. Praesent pretium ex quam, nec rhoncus mauris ornare eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    title: "John Patrick",
    role: "Pastor",
  },
  {
    image: "./blog1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus dui eu tortor venenatis, mattis hendrerit tellus pellentesque. Praesent pretium ex quam, nec rhoncus mauris ornare eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    title: "Florence Zizo",
    role: "Unemployes",
  },
  {
    image: "./blog1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus dui eu tortor venenatis, mattis hendrerit tellus pellentesque. Praesent pretium ex quam, nec rhoncus mauris ornare eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    title: "Karen",
    role: "Beauty Technician",
  },
  {
    image: "./blog1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus dui eu tortor venenatis, mattis hendrerit tellus pellentesque. Praesent pretium ex quam, nec rhoncus mauris ornare eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    title: "Eva Patrick",
    role: "Eme Doctor",
  },
  {
    image: "./blog1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus dui eu tortor venenatis, mattis hendrerit tellus pellentesque. Praesent pretium ex quam, nec rhoncus mauris ornare eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    title: "Freddy",
    role: "Student",
  },
  {
    image: "./blog1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus dui eu tortor venenatis, mattis hendrerit tellus pellentesque. Praesent pretium ex quam, nec rhoncus mauris ornare eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    title: "Felicia Penelope",
    role: "Teacher",
  },
];

const Review = () => {
  useEffect(() => {
    document.title = 'Review';
  }, []);
  return (
    <>
      <Header />
      <div className="review-container">
        <div>
          <h1 className="text-center justify-center font-bold leading-5 m-10 text-[20px] lg:text-[34px]">
            What our users say
          </h1>
          <p className="text-center justify-center font-bold leading-5 m-10 text-[20px] lg:text-[30px] text-[#91ee45]">
            Testimonials✔️✨
          </p>
        </div>

        <div className="review-map paddings innerWidth">
          {reviewData.map((item, i) => (
            <div className="review-item" key={i}>
              
              <div className="text-container ">
                <p>{item.text}</p>
                <div className="author">
                  <p className="title">{item.title}</p>
                  <p className="role">{item.role}</p>
                </div>
              </div>

              <div className="image-wrapper">
                <img src={item.image} alt="image" className="circular-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
