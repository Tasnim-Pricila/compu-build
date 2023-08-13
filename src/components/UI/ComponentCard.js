import { Card, Col, Rate } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const { Meta } = Card;

const ComponentCard = ({ component }) => {
  const [avgRating, setAvgRating] = useState(0)
  const router = useRouter();
  useEffect(() => {
    let sum = 0;
    component?.reviews?.forEach((review) => {
      sum = sum + review?.rating;
      setAvgRating(sum / component?.reviews?.length)
    })
  }, [component?.reviews, avgRating])
    
  return (
    <Col
     xs= {24}
      sm={12}
      md={8}
      lg={6}
      className="gutter-row"
      style={{ marginBottom: "20px" }}
    >
      <Card
        hoverable
        cover={
          <Image
            width="250"
            height="350"
            src={component?.image}
            layout="responsive"
            alt="example"
            onClick={() => router.push(`/components/${component._id}`)}
          />
        }
      >
        <Meta title={component?.name} description={component?.description} />
        <Rate disabled allowHalf value={avgRating} />
        <p>{component?.category} </p>
        <p>{component?.price} /-</p>
        <p>{component?.status}</p>
      </Card>
    </Col>
  );
};

export default ComponentCard;
