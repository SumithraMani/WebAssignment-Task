import React from "react";
import "./Dashboard.css";
import bodyImage from "../assets/body.png"; // use human muscle image
import profilePic from "../assets/profile.jpg"; // use an avatar image

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div>
          <div className="logo">
            <span className="logo-primary">Health</span>
            <span className="logo-secondary">care.</span>
          </div>
          <div> General</div>
            <div className="nav-item active">🏠 Dashboard</div>
            <div className="nav-item">📜 History</div>
            <div className="nav-item">🗓️ Calendar</div>
            <div className="nav-item">📅 Appointments</div>
            <div className="nav-item">📊 Statistics</div>
        <div> Tools</div>
            <div className="nav-item">💬 Chat</div>
            <div className="nav-item">🛠️ Support</div>
          </div>
        <div className="nav-item">⚙️ Setting</div>
      </div>

      {/* Main */}
      <div className="main">
        {/* Header */}
        <div className="header">
          <h2>Dashboard</h2>
          <div className="header-right">
            <input
              type="text"
              placeholder="Search"
              style={{
                padding: "8px 12px",
                borderRadius: "12px",
                border: "1px solid #ccc",
              }}
            />
            <img
              src={profilePic}
              alt="Profile"
              style={{ width: "32px", height: "32px", borderRadius: "50%" }}
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="main-grid">
          {/* Left: Body + Stats + Activity */}
          <div>
            <div className="body-chart">
              <div className="image-container">
                <img src={bodyImage} alt="Body Chart" className="body-img" />
                <div className="label-heart">❤️ Healthy Heart</div>
                <div className="label-leg">🦵 Healthy Leg</div>
              </div>
              <div className="details-text">Details →</div>


              <div className="status-cards">
                <div className="status-card">
                  <div>Lungs</div>
                  <div className="bar red">
                    <div style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div className="status-card">
                  <div>Teeth</div>
                  <div className="bar green">
                    <div style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="status-card">
                  <div>Bone</div>
                  <div className="bar orange">
                    <div style={{ width: "40%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="activity">
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                Activity
              </div>
              <div className="activity-graph">
                {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(
                  (day, i) => (
                    <div className="activity-day" key={i}>
                      {day}
                      <div className="bars">
                        <div className="bar light" />
                        <div className="bar dark" />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right: Calendar + Schedule */}
          <div className="schedule">
            <div className="schedule-calendar">
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                October 2021
              </div>
              <div className="calendar-days">
                {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(
                  (d, i) => (
                    <div className="calendar-day" key={i}>
                      {d}
                      <div
                        className={`day-time ${
                          d === "Tues" ? "selected" : "muted"
                        }`}
                      >
                        {["25", "26", "27", "28", "29", "30", "31"][i]}
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="appointment dentist">
                <div>Dentist</div>
                <div style={{ fontSize: "12px" }}>
                  09:00–11:00 <br /> Dr. Cameron Williamson
                </div>
              </div>
              <div className="appointment">
                <div>Physiotherapy Appointment</div>
                <div style={{ fontSize: "12px" }}>
                  11:00–12:00 <br /> Dr. Kevin Djones
                </div>
              </div>
            </div>

            <div className="upcoming-title">The Upcoming Schedule</div>
            <div style={{ marginBottom: "6px", fontSize: "13px" }}>
              On Thursday
            </div>
            <div className="upcoming-grid">
              <div className="upcoming-item">
                Health checkup complete <br /> 11:00 AM
              </div>
              <div className="upcoming-item">
                Ophthalmologist <br /> 14:00 PM
              </div>
            </div>

            <div style={{ marginTop: "10px", fontSize: "13px" }}>
              On Saturday
            </div>
            <div className="upcoming-grid">
              <div className="upcoming-item">
                Cardiologist <br /> 12:00 AM
              </div>
              <div className="upcoming-item">
                Neurologist <br /> 16:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
