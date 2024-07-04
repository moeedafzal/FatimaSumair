"use client";
import useAxios from "axios-hooks";
import React from "react";
import { Form, Input, message } from "antd";
import ButtonText from "../global/ButtonText";

function ContactForm() {
  const [form] = Form.useForm();

  const [{ loading }, executeFormSubmission] = useAxios(
    {
      url: "/api/submit-form",
      method: "POST",
    },
    { manual: true }
  );

  const handleSubmit = async (values) => {
    try {
      await executeFormSubmission({
        data: values,
      });
      form.resetFields();
      message.success({
        type: "success",
        content: "Thank you for reaching out! I will get back to you soon.",
      });
    } catch {
      message.error({
        type: "error",
        content: "Oops! Looks like there was an error. Please try again later.",
      });
    }
  };

  const inputBoxStyles =
    "h-14 text-xl px-4 py-2 rounded-2xl border-b-4 border-r-4 border-black hover:border-black focus:border-black";

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div className="lg:flex gap-4">
          <Form.Item
            className="flex-1"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input
              className={inputBoxStyles}
              type="text"
              placeholder="Your Name"
            />
          </Form.Item>
          <Form.Item
            className="flex-1"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input
              className={inputBoxStyles}
              type="text"
              placeholder="Your Email"
            />
          </Form.Item>
        </div>
        <div className="lg:flex gap-4 ">
          <Form.Item
            className="flex-1"
            name="projectType"
            rules={[{ required: true, message: "Please enter project type!" }]}
          >
            <Input
              className={inputBoxStyles}
              type="text"
              placeholder="Project Type"
            />
          </Form.Item>
          <Form.Item
            className="flex-1"
            name="location"
            rules={[{ required: true, message: "Please enter your location!" }]}
          >
            <Input
              className={inputBoxStyles}
              type="text"
              placeholder="Your Location"
            />
          </Form.Item>
        </div>
        <Form.Item name="website" rules={[{ required: false }]}>
          <Input
            className={inputBoxStyles}
            type="text"
            placeholder="Your Website (if it exists)"
          />
        </Form.Item>
        <Form.Item
          name="projectDetails"
          rules={[{ required: true, message: "Please enter project details!" }]}
        >
          <Input.TextArea
            className={inputBoxStyles}
            rows={4}
            placeholder="Project details, context, how can I help..."
          />
        </Form.Item>

        <Form.Item className="lg:flex justify-end lg:mb-0">
          <button
            width="100%"
            type="submit"
            className="bg-transparent text-black hover:text-black hover:border-black hover:bg-transparent focus:bg-transparent focus:text-black focus:border-black w-full"
          >
            <span
              className={`bg-[#E9EE8A] text-xl px-8 py-3 rounded-2xl hover:border-t-4 hover:border-l-4 hover:border-b-0 hover:border-r-0 border-b-4 border-r-4 border-black block lg:py-2`}
            >
              {loading ? "Submitting..." : "Submit"}
            </span>
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ContactForm;
