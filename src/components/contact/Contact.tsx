"use client";
import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

export default function ContactComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  // const sendEmail = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const response = await fetch("/api/send-email", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ name, email, subject, message }),
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setSuccess("✅ Message sent successfully, we'll connect with you soon!");
  //     setName("");
  //     setEmail("");
  //     setSubject("");
  //     setMessage("");
  //   } else {
  //     setSuccess("❌ Failed to send. Please try again later.");
  //   }
  // };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="page-header" data-aos="fade-down">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Contact Us</h2>
              <div className="breadcrumb-links">
                <a href="#">Home</a>
                <a href="/contact">Contact Us</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact Section */}
      <div className="contact">
        <Container>
          <div className="section-header text-center" data-aos="fade-up">
            <p>Get In Touch</p>
            <h2>For Any Query</h2>
          </div>

          <Row>
            {/* Contact Info */}
            <Col md={6} data-aos="fade-right">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h2>Location</h2>
                    <p>Gandakipur, Gopiakuda, Kujanga, Jagatsinghpur</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="contact-text">
                    <h2>Phone</h2>
                    <p>+91-9337670266</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h2>Email</h2>
                    <p>md@rayengineering.co</p>
                  </div>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col md={6} data-aos="fade-left">
              <div className="contact-form">
                <p className="text-orange text-center mb-2">{success}</p>
                <Form id="contactForm" >
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Button type="submit" className="btn-send w-100">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
