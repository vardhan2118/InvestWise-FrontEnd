import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import image from "../assets/goal.png";
import { FaTrashAlt, FaEdit, FaSave } from "react-icons/fa";

const GoalTracker = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    targetDate: "",
  });

  const handleInputChange = (e) => {
    setNewGoal({ ...newGoal, [e.target.name]: e.target.value });
  };

  const email = sessionStorage.getItem("email");

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:4000/goals?email=${email}`)
        .then((response) => {
          setGoals(response.data);
        })
        .catch((error) => {
          console.error("Error fetching goals:", error);
        });
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/goals",
        { ...newGoal, email },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setGoals([...goals, response.data]);
        setNewGoal({ title: "", description: "", targetDate: "" });
      })
      .catch((error) => {
        console.error("Error creating goal:", error);
      });
  };

  const handleEdit = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].editing = true;
    setGoals(updatedGoals);
  };

  const handleSave = (index) => {
    const goalToUpdate = goals[index];
    if (
      !goalToUpdate.title ||
      !goalToUpdate.description ||
      !goalToUpdate.targetDate
    ) {
      alert("Please fill in all fields.");
      return;
    }
    axios
      .put(`http://localhost:4000/goals/${goalToUpdate._id}`, goalToUpdate)
      .then(() => {
        const updatedGoals = [...goals];
        updatedGoals[index].editing = false;
        setGoals(updatedGoals);
      })
      .catch((error) => {
        console.error("Error updating goal:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/goals/${id}`)
      .then(() => {
        setGoals(goals.filter((goal) => goal._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting goal:", error);
      });
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container-fluid goal-tracker">
        <div className="row">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <div className="container mt-3">
              <h1 className="mb-4">Goal Tracker</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="title"
                    className="form-control custom-input"
                    placeholder="Goal Title"
                    value={newGoal.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="description"
                    className="form-control custom-input"
                    placeholder="Description"
                    value={newGoal.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="date"
                    name="targetDate"
                    className="form-control custom-input"
                    value={newGoal.targetDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-warning mt-3 text-light special"
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    letterSpacing: "0.5px",
                  }}
                >
                  Add Goal
                </button>
              </form>
              <ul className="mt-4">
                {goals.map((goal, index) => (
                  <li key={goal._id} className="card mb-3">
                    <div className="card-body d-flex justify-content-between align-items-start">
                      <div style={{ flex: "1" }}>
                        {goal.editing ? (
                          <>
                            <input
                              type="text"
                              className="form-control custom-input mb-2"
                              value={goal.title}
                              onChange={(e) =>
                                setGoals((prevGoals) =>
                                  prevGoals.map((g, i) =>
                                    i === index
                                      ? { ...g, title: e.target.value }
                                      : g
                                  )
                                )
                              }
                              required
                            />
                            <textarea
                              className="form-control custom-input mb-2"
                              value={goal.description}
                              onChange={(e) =>
                                setGoals((prevGoals) =>
                                  prevGoals.map((g, i) =>
                                    i === index
                                      ? { ...g, description: e.target.value }
                                      : g
                                  )
                                )
                              }
                              required
                            />
                            <input
                              type="date"
                              className="form-control custom-input mb-2"
                              value={
                                new Date(goal.targetDate)
                                  .toISOString()
                                  .split("T")[0]
                              }
                              onChange={(e) =>
                                setGoals((prevGoals) =>
                                  prevGoals.map((g, i) =>
                                    i === index
                                      ? { ...g, targetDate: e.target.value }
                                      : g
                                  )
                                )
                              }
                              required
                            />
                          </>
                        ) : (
                          <>
                            <h3 className="card-title">{goal.title}</h3>
                            <p className="card-text">{goal.description}</p>
                            <p className="card-text">
                              <strong> Target Date: </strong>
                              {new Date(goal.targetDate).toLocaleDateString()}
                            </p>
                          </>
                        )}
                      </div>
                      <div style={{ minWidth: "70px" }}>
                        {goal.editing ? (
                          <FaSave
                            className="text-success mx-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleSave(index)}
                          />
                        ) : (
                          <FaEdit
                            className="text-primary mx-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleEdit(index)}
                          />
                        )}
                        <FaTrashAlt
                          className="text-danger mx-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDelete(goal._id)}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6 animate__animated animate__fadeInRight">
            <div className="container mt-3">
              <h2 className="mb-3">Why Set Goals?</h2>
              <img src={image} alt="Goals" className="img-fluid mt-3 mb-3" />
              <p>
                Setting goals is crucial for personal growth and achievement. It
                gives you a clear direction and motivates you to take action
                towards your aspirations. Whether it's financial freedom,
                starting a business, or achieving personal milestones, setting
                clear and achievable goals is the first step towards success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalTracker;
