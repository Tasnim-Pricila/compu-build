import { Button, Carousel, Typography } from "antd";

const Banner = () => {
  const contentStyle = {
    color: "red",
    lineHeight: "160px",
    textAlign: "center",
    marginTop: "0",
    background: `#364d79`,
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Carousel
        autoplay
        dots={true}
        effect="fade"
        pauseOnHover={false}
        draggable
      >
        <div className="carousel-slide">
          <div style={contentStyle}>
            <Typography.Title style={{ color: "white" }}>
              Experience the New Perspective of Building Your Dream PC
            </Typography.Title>
            <Typography style={{ color: "white" }}>
              Building your own PC is a rewarding experience. With our new
              approach, we will help you to <br /> be sure that the
              compatibility of your selected PC parts is just right.
            </Typography>
            <Button type="primary" style={{ marginTop: "20px" }}>
              {" "}
              Create Now{" "}
            </Button>
          </div>
        </div>
        <div className="carousel-slide">
          <div style={contentStyle}>
            <Typography.Title style={{ color: "white" }}>
              Handling Your Toughest PC Parts Compatibility with Ease
            </Typography.Title>
            <Typography style={{ color: "white" }}>
              We handle the toughest task of PC compatibility with easeand
              provide <br />
              you with the best compatibility that is available.
            </Typography>
            <Button type="primary" style={{ marginTop: "20px" }}>
              {" "}
              Create Now{" "}
            </Button>
          </div>
        </div>
        <div className="carousel-slide">
          <div style={contentStyle}>
            <Typography.Title style={{ color: "white" }}>
              Performing with Excellence to Do More for More
            </Typography.Title>
            <Typography style={{ color: "white" }}>
              We are excellence with the pc parts compatibility to do more for
              you! <br />
              With the ever-changing tech, you will always get the latest and
              most accurate compatibility.
            </Typography>
            <Button type="primary" style={{ marginTop: "20px" }}>
              {" "}
              Create Now{" "}
            </Button>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
