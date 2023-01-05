import { Button, Form, Input, Modal, Select, Upload } from "antd";
// import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import styles from "./cars.module.scss";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function CreateCar() {
  const navigate = useNavigate();
  const { Dragger } = Upload;
  const [Addform] = Form.useForm();
  const [carName, setCarName] = useState();
  const [carType, setCarType] = useState();
  const [carPrice, setCarPrice] = useState();
  const [img, setImg] = useState();
  const [SuccessPopus, setSuccessPopus] = useState(false);

  const CreateCar = (e) => {
    console.log("e value", e);

    const formData = new FormData();
    formData.append("car_1_name", carName);
    formData.append("car_1_type", carType);
    formData.append("car_1_price", carPrice);

    formData.append("car_1_img", img);

    axios
      .post(`http://localhost:8080/upload/img`, formData, {
        "Content-Type": "Multipart/form-Data",
      })
      .then((res) => {
        console.log("succes", res);
        if (res.data) {
          setCarName("");
          Addform.resetFields();
          setSuccessPopus(true);
          close_model(SuccessPopus, 1200);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const close_model = (mShow, time) => {
    if (!mShow) {
      setTimeout(() => {
        setSuccessPopus(false);
        navigate("/");
      }, time);
    }
  };

  console.log("Values", carName, carType, carPrice, img);

  return (
    <div>
      <div className="container">
        <div
          style={{ backgroundColor: "#f3f8fc" }}
          className="card border-0 shadow-lg my-3 p-3"
        >
          <Form
            form={Addform}
            onFinish={(fileList) => {
              console.log("values", fileList);
            }}
          >
            <div className="row">
              <div className="col-12 text-center">
                <h1>Create Car</h1>
              </div>
              <div className="col-4">
                <div>
                  <label>Enter Car Name</label>
                  <Form.Item name="car_1_name">
                    <Input
                      style={{ border: "none" }}
                      className="p-2"
                      onChange={(e) => setCarName(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <label>Select Car Type</label>
                  <Form.Item name="car_1_type">
                    <Select
                      placeholder="Select car type"
                      className={`${styles.select_box} w-100 p-1`}
                      onChange={(e) => setCarType(e)}
                    >
                      <Select.Option value="sedan">Sedan</Select.Option>
                      <Select.Option value="suv">SUV</Select.Option>
                      <Select.Option value="coupe">Coupe</Select.Option>
                      <Select.Option value="hatckback">
                        HatchBatch
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <label>Enter Car Price</label>
                  <Form.Item name="car_1_price">
                    <Input
                      style={{ border: "none" }}
                      className="p-2"
                      onChange={(e) => setCarPrice(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <div className="p-3">
                  {/* <label className="my-3">Upload Image</label> */}
                  <Form.Item name="car_1_img">
                    <Dragger
                      onChange={(file) => setImg(file?.file?.originFileObj)}
                    >
                      <div className="p-2">
                        <p className="ant-upload-drag-icon">
                          {/* <InboxOutlined /> */}
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint"></p>
                      </div>
                    </Dragger>
                  </Form.Item>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center my-5">
                <div>
                  <Button
                    style={{ backgroundColor: "#0891d1", color: "white" }}
                    type="submit"
                    onClick={() => CreateCar()}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <Modal
        visible={SuccessPopus}
        onCancel={() => setSuccessPopus(false)}
        footer={false}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className=""></div>
              <div className="">
                <h1>Success !!</h1>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CreateCar;
