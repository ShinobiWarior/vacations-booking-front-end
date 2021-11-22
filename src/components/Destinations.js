import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { CardGroup } from 'react-bootstrap';
import Slides from './Slides';
import { loadDestinationsThunk } from '../redux/Destinations/destinations';

const Destinations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDestinationsThunk());
  }, [dispatch]);

  const data = useSelector((state) => state.destinations.destination);
  const state = data.sort(() => 0.5 - Math.random());
  return (
    <div className="container">
      <div className="align-middle">
        <h4 className="d-flex justify-content-center">Latest Destinations</h4>
        <h5 className="d-flex justify-content-center"> Please select Favourite Destination </h5>
        <div className="row d-none d-lg-block">
          <Carousel>
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 3).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 3).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="row d-none d-md-block d-lg-none">
          <Carousel>
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 2).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 2).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="row d-md-none">
          <Carousel>
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 1).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <CardGroup className="">
                {state.slice(0, 1).map((data) => (
                  <Slides key={data.id} info={data} />
                ))}
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
