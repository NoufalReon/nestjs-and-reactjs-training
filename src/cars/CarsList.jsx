import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import img1 from "./logo512.png";

function CarsList() {
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [allData, setAlldata] = useState();

  const getAllCars = () => {
    axios
      .get(`http://localhost:8080/cars/allcarimg`)
      .then((res) => {
        console.log("response", res);
        if (res.data) {
          console.log("all data", res.data);
          setAlldata(res.data);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    getAllCars();
  }, []);

  const url = "http://localhost:8080/";

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 my-3">
            <div className="">
              <h1>Welcome </h1>
              <h1>To the World of Cars</h1>
            </div>
          </div>
          <div className="col-12 my-3">
            <div className="">
              <h6>SUV's</h6>
              <div className="">
                {allData && allData.length > 0 && (
                  <Carousel
                    containerClass="carousel-container"
                    infinite={true}
                    swipeable={false}
                    responsive={responsive}
                    autoPlay={true}
                    arrows={false}
                  >
                    {allData &&
                      allData.length > 0 &&
                      allData.map((item, index) => {
                        if (item.car_1_type === "suv") {
                          return (
                            <div className="container">
                              <div className="row">
                                <div
                                  style={{ width: "400px" }}
                                  className="card my-2 mx-2 shadow-sm border-0 "
                                >
                                  <div className="row">
                                    <div
                                      style={{ borderRadius: "5px" }}
                                      className="col-12 px-0 mx-0"
                                    >
                                      <div
                                        style={{ objectFit: "conatin" }}
                                        className="d-flex justify-content-center "
                                      >
                                        {item?.car_1_img ? (
                                          <img
                                            src={`${url}${item.car_1_img}`}
                                            alt
                                            height={300}
                                            width={"100%"}
                                          />
                                        ) : (
                                          <img
                                            src={img1}
                                            alt
                                            height={200}
                                            width={200}
                                          />
                                        )}
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className="p-3">
                                        <h5>{item.car_1_name}</h5>
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className=" p-3">
                                        <h6>
                                          {" "}
                                          <span>₹</span>
                                          {item.car_1_price}
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                  </Carousel>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 my-3">
            <div className="">
              <h6>Coupe's</h6>
              <div className="">
                {allData && allData.length > 0 && (
                  <Carousel
                    infinite={true}
                    swipeable={true}
                    responsive={responsive}
                    autoPlay={true}
                    arrows={false}
                  >
                    {allData &&
                      allData.length > 0 &&
                      allData.map((item, index) => {
                        if (item.car_1_type === "coupe") {
                          return (
                            <div className="container ">
                              <div className="row">
                                <div
                                  onClick={() =>
                                    navigate(`/viewcar/${item.car_1_id}`)
                                  }
                                  style={{ width: "400px" }}
                                  className="card my-2 mx-2 shadow-sm border-0 "
                                >
                                  <div className="row">
                                    <div className="col-12 px-0 mx-0">
                                      <div
                                        style={{ objectFit: "contain" }}
                                        className="d-flex justify-content-center "
                                      >
                                        <img
                                          src={`${url}${item.car_1_img}`}
                                          alt
                                          height={300}
                                          width={"100%"}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className="p-3">
                                        <h5>{item.car_1_name}</h5>
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className=" p-3">
                                        <h6>
                                          {" "}
                                          <span>₹</span>
                                          {item.car_1_price}
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                  </Carousel>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 my-3">
            <div className="">
              <h6>Sedan's</h6>
              <div className="">
                {allData && allData.length > 0 && (
                  <Carousel
                    infinite={true}
                    swipeable={true}
                    responsive={responsive}
                    autoPlay={true}
                    arrows={false}
                  >
                    {allData &&
                      allData.length > 0 &&
                      allData.map((item, index) => {
                        if (item.car_1_type === "sedan") {
                          return (
                            <div className="container">
                              <div className="row">
                                <div
                                  style={{ width: "400px" }}
                                  className="card my-2 mx-2 shadow-sm border-0 "
                                >
                                  <div className="row">
                                    <div className="col-12 px-0 mx-0">
                                      <div
                                        style={{ objectFit: "conatin" }}
                                        className="d-flex justify-content-center "
                                      >
                                        <img
                                          src={`${url}${item.car_1_img}`}
                                          alt
                                          height={300}
                                          width={"100%"}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className="p-3">
                                        <h5>{item.car_1_name}</h5>
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className=" p-3">
                                        <h6>
                                          {" "}
                                          <span>₹</span>
                                          {item.car_1_price}
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                  </Carousel>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 my-3">
            <div className="">
              <h6>HatchBack's</h6>
              <div className="">
                {allData && allData.length > 0 && (
                  <Carousel
                    infinite={true}
                    swipeable={true}
                    responsive={responsive}
                    autoPlay={true}
                    arrows={false}
                  >
                    {allData &&
                      allData.length > 0 &&
                      allData.map((item, index) => {
                        if (item.car_1_type === "hatchback") {
                          return (
                            <div className="container">
                              <div className="row">
                                <div
                                  style={{ width: "400px" }}
                                  className="card my-2 mx-2 shadow-sm border-0 "
                                >
                                  <div className="row">
                                    <div className="col-12 px-0 mx-0">
                                      <div
                                        style={{ objectFit: "conatin" }}
                                        className="d-flex justify-content-center "
                                      >
                                        <img
                                          src={`${url}${item.car_1_img}`}
                                          alt
                                          height={300}
                                          width={"100%"}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className="p-3">
                                        <h5>{item.car_1_name}</h5>
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className=" p-3">
                                        <h6>
                                          <span>₹</span>
                                          {item.car_1_price}
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                  </Carousel>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsList;
