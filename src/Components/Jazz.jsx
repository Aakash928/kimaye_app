import React from "react";
import { Slide } from "react-slideshow-image";
import "../Styles/Blog.css";

const blogs = [
  {
    id: 1,
    img1: "https://www.gardeningknowhow.com/wp-content/uploads/2021/03/backyard-fruit-tree.jpg",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsI7z_stRM2h5X_CWFFa_cyDC8dbTbiq2pzA&usqp=CAU",
  },
  {
    id: 2,
    img1: "https://gardeningtips.in/wp-content/uploads/2022/02/Start-a-Fruit-Garden1-1.jpg",
    img2: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXQlMjBnYXJkZW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    id: 3,
    img1: "https://mekongdeltatours.info/noidung/uploads/2017/11/miet-vuon-cai-be-815x459.jpg",
    img2: "https://www.luxurycruisemekong.com/wp-content/uploads/2017/10/The-tender-beauty-of-Mekong-delta-via-a-fruit-garden.jpg",
  },
];

const Jazz = () => {
  const properties = { indicators: true };
  return (
    <>
      <img
        alt="top"
        src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/blog-top-cut.png?v=1599102918"
      />
      <div className="blog">
        <h1
          style={{
            fontSize: "35px",
            color: "white",
            fontFamily: "bitterbrush",
          }}
        >
          {" "}
          JAZZ IT UP WITH <span style={{ color: "red" }}>FRUITS</span>
        </h1>

        <Slide easing="ease" {...properties}>
          {blogs.map((item) => (
            <div key={item.id} className="blogDisplay">
              <div>
                <img
                  style={{
                    height: "320px",
                    width: "510px",
                    borderRadius: "15px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  }}
                  src={item.img1}
                  alt="blogpic"
                />
              </div>
              <div>
                <img
                  style={{
                    height: "320px",
                    width: "510px",
                    borderRadius: "15px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  }}
                  src={item.img2}
                  alt="blogpic"
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <img
        alt="bottom"
        src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/blog-bottom-cut.png?v=1599102919"
      />
    </>
  );
};

export default Jazz;
