import Carousel from "react-bootstrap/Carousel";
import { ShowContext } from "../../../Providers/ShowProvider";
import { useContext } from "react";

function HeroSlider() {
    const {shows} = useContext(ShowContext);
  return (
    <>
      <div className="container-fluid hero__full">
        <div className="container hero__cont">
          <Carousel>
            <Carousel.Item interval={5000}>
              <img src={shows[0]?.show?.image?.original} />
              <Carousel.Caption>
                <h3>{shows[0]?.show?.name}</h3>
                <p>
                <strong>Premiered at {shows[0]?.show?.premiered}</strong>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img src={shows[1]?.show?.image?.original} />
              <Carousel.Caption>
                <h3>{shows[1]?.show?.name}</h3>
                <p>
                <strong>Premiered at {shows[1]?.show?.premiered}</strong>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img src={shows[3]?.show?.image?.original} />
              <Carousel.Caption>
                <h3>{shows[3]?.show?.name}</h3>
                <p>
                <strong>Premiered at {shows[3]?.show?.premiered}</strong>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
