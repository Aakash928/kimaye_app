import React from "react";
import "../Styles/Recommends.css";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const cards1 = [
  {
    id: "1",
    image: "https://images.herzindagi.info/image/2022/Nov/winter-fruits.jpg",
    title: "ALL FRUITS",
    description: "Pick and choose from a wide range of delicious fruits.",
    link: "/allfruits",
  },
  {
    id: "2",
    image:
      "https://northernnester.com/wp-content/uploads/2020/10/types-of-vegetables.jpg",
    title: "All VEGGIES",
    description: "A handpicked and curated offering.",
    link: "/allveggies",
  },
  {
    id: "3",
    image:
      "https://diyprojects.com/wp-content/uploads/2016/05/Fruit-Cutting-Hacks-feature-px.jpg",
    title: "FRESH CUTS",
    description: "We want to spoon-feed you… quite literally.",
    link: "/freshcuts",
  },
];

const cards2 = [
  {
    id: "4",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/woman-breakfasts-a-fruit-salad-high-in-vitamins-and-royalty-free-image-1690494564.jpg",
    title: "FRUIT COMBOS",
    description: "Indulge in fruit combinations created by us.",
    link: "/combo",
  },
  {
    id: "5",
    image:
      "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/2I8A6078_570x.jpg?v=1631516874",
    title: "GIFTS BY KIMAYE",
    description: "Healthy & memorable gifts for your loved ones.",
    link: "/gifts",
  },
];

const Recommends = () => {
  const navigate = useNavigate();

  return (
    <div className="recommendBox">
      <Box>
        <Text
          letterSpacing="0.04rem"
          as="h1"
          fontSize="30px"
          fontFamily="Bitterbrush"
        >
          KIMAYE RECOMMENDS
        </Text>
        <Text
          letterSpacing="0.08rem"
          as="h1"
          fontSize="20px"
          fontFamily="PT Sans,sans-serif"
        >
          A Handpicked and Curated Fruit offering
        </Text>
      </Box>

      <div className="recommends">
        {cards1.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
                width: "23%",
              }}
            >
              <div>
                <img
                  onClick={() => navigate(item.link)}
                  src={item.image}
                  alt="card"
                />
              </div>
              <Text
                color="#222"
                fontSize="1.7rem"
                letterSpacing="0.04rem"
                textTransform="uppercase"
                fontFamily="bitterbrush"
                fontWeight="bold"
              >
                {item.title}
              </Text>
              <Text
                color="#222"
                fontSize="1.2rem"
                letterSpacing="0.02rem"
                fontFamily="PT Sans,sans-serif"
              >
                {item.description}
              </Text>
              <Button
                onClick={() => navigate(item.link)}
                size="lg"
                bg="#cd171f"
                width="140px"
                color="white"
                borderRadius="20px"
              >
                Shop Now
              </Button>
            </div>
          );
        })}
      </div>

      <div className="recommends">
        {cards2.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "400px",
                width: "23%",
              }}
            >
              <div>
                <img src={item.image} alt="card" />
              </div>
              <Text
                color="#222"
                fontSize="1.7rem"
                letterSpacing="0.04rem"
                textTransform="uppercase"
              >
                {item.title}
              </Text>
              <Text
                color="#222"
                fontSize="1.2rem"
                letterSpacing="0.02rem"
                fontFamily="PT Sans,sans-serif"
              >
                {item.description}
              </Text>
              <Button
                size="lg"
                bg="#cd171f"
                width="140px"
                color="white"
                borderRadius="20px"
              >
                Shop Now
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommends;
