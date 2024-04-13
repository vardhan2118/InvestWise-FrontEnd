import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/whatsapp.png";
import image2 from "../assets/telegram.png";
import image3 from "../assets/discord.png";
import image4 from "../assets/instagram.png";
import NavBar from "./NavBar";

const CommunityCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");
  const [expectedReturnRate, setExpectedReturnRate] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const handleCalculate = () => {
    const monthlyAmount = parseFloat(monthlyInvestment);
    const duration = parseFloat(investmentDuration);
    const rate = parseFloat(expectedReturnRate) / 100;

    const monthlyRate = rate / 12;
    const months = duration * 12;

    // Formula for SIP calculation: P * [(1 + r)^n - 1] / r * (1 + r)
    const total =
      monthlyAmount *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);

    setTotalAmount(total.toFixed(2));
  };

  const buttonStyle = {
    backgroundColor: "#ffd700",
    color: "#000000",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
    width: "200px",
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <div
          className="container"
          style={{ display: "flex", gap: "20px", paddingTop: "80px" }}
        >
          <div
            className="calculator animate__animated animate__fadeInLeft"
            style={{ flex: 1 }}
          >
            <div
              style={{
                textAlign: "start",
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                height: "100%",
              }}
            >
              <h1
                style={{
                  margin: "0 0 20px",
                  fontSize: "24px",
                  color: "#ffd700",
                }}
              >
                SIP Calculator
              </h1>
              <p style={{ margin: "0 0 20px", color: "#000000" }}>
                A SIP calculator is a simple tool that allows individuals to get
                an idea of the returns on their mutual fund investments made
                through SIP. SIP investments in mutual funds have become one of
                the most popular investment options for millennials lately.This
                calculator will calculate the wealth gain and expected returns
                for your monthly SIP investment. Indeed, you get a rough
                estimate on the maturity amount for any of your monthly SIP,
                based on a projected annual return rate.
              </p>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ marginRight: "10px" }}>
                  Monthly Investment Amount:
                </label>
                <input
                  className="custom-input"
                  type="text"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(e.target.value)}
                  style={{
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "100%",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ marginRight: "10px" }}>
                  Investment Duration (in years):
                </label>
                <input
                  className="custom-input"
                  type="text"
                  value={investmentDuration}
                  onChange={(e) => setInvestmentDuration(e.target.value)}
                  style={{
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "100%",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ marginRight: "10px" }}>
                  Expected Annual Return Rate (%):
                </label>
                <input
                  className="custom-input"
                  type="text"
                  value={expectedReturnRate}
                  onChange={(e) => setExpectedReturnRate(e.target.value)}
                  style={{
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "100%",
                    outline: "none",
                  }}
                />
              </div>
              <button
                onClick={handleCalculate}
                style={{ ...buttonStyle, width: "100%" }}
              >
                Calculate
              </button>
              {totalAmount && (
                <p style={{ margin: "0", fontSize: "18px", color: "#333" }}>
                  Total Amount: {totalAmount}
                </p>
              )}
            </div>
          </div>
          <div
            className="community animate__animated animate__fadeInRight"
            style={{ flex: 1 }}
          >
            <div
              style={{
                textAlign: "start",
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                height: "100%",
              }}
            >
              <h1
                style={{
                  margin: "0 0 20px",
                  fontSize: "24px",
                  color: "#ffd700",
                }}
              >
                Join our Community
              </h1>
              <p style={{ margin: "0 0 20px", color: "#000000" }}>
                Some moderators in our trading community are trading for a
                living, and some are self-employed. We have moderators at nearly
                every level of trading experience. The truth is that the
                moderators in every trading community are growing with you,
                constantly learning and honing new skills. They are always
                students of the market. Their willingness and ability to teach
                others while on their trading journey are both humbling and
                rewarding.It truly warms my heart to help people learn how to
                trade profitably, which is what a trading community is all
                about.
              </p>
              {/* Social media buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Link
                  to="https://whatsapp.com/channel/0029VaJDufYFXUuWbmbWR20f"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    marginBottom: "10px",
                    width: "100%",
                  }}
                >
                  <button style={{ ...buttonStyle, width: "100%" }}>
                    <img
                      src={image1}
                      alt="WhatsApp"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    WhatsApp
                  </button>
                </Link>
                <Link
                  to="https://t.me/STOCKGAINERSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    marginBottom: "10px",
                    width: "100%",
                  }}
                >
                  <button style={{ ...buttonStyle, width: "100%" }}>
                    <img
                      src={image2}
                      alt="Telegram"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    Telegram
                  </button>
                </Link>
                <Link
                  to="https://discord.gg/mrmtrades"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    marginBottom: "10px",
                    width: "100%",
                  }}
                >
                  <button style={{ ...buttonStyle, width: "100%" }}>
                    <img
                      src={image3}
                      alt="Discord"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    Discord
                  </button>
                </Link>
                <Link
                  to="https://www.instagram.com/indian_share_market?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <button style={{ ...buttonStyle, width: "100%" }}>
                    <img
                      src={image4}
                      alt="Instagram"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    Instagram
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
          }

          @media (min-width: 768px) {
            .container {
              flex-direction: row;
            }
            .calculator,
            .community {
              flex: 1;
            }
            .calculator {
              order: 1;
            }
            .community {
              order: 2;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CommunityCalculator;
