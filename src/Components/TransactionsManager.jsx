import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const TranscationsManager = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [incomeAmount, setIncomeAmount] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [incomeType, setIncomeType] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [otherIncomeType, setOtherIncomeType] = useState("");
  const [otherExpenseType, setOtherExpenseType] = useState("");
  const [email, setEmail] = useState("");

  const calculateTotal = useCallback(
    (incomeTransactions, expenseTransactions) => {
      const totalIncome = incomeTransactions.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      const totalExpense = expenseTransactions.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      setTotal(totalIncome - totalExpense);
    },
    []
  );

  const fetchData = useCallback(async () => {
    try {
      const storedEmail = sessionStorage.getItem("email");
      if (storedEmail) {
        const response = await axios.get(
          `http://localhost:4000/transactions?email=${storedEmail}`
        );
        const transactions = response.data;
        const incomeTransactions = transactions.filter(
          (transaction) => transaction.type === "income"
        );
        const expenseTransactions = transactions.filter(
          (transaction) => transaction.type === "expense"
        );
        setIncomes(incomeTransactions);
        setExpenses(expenseTransactions);
        calculateTotal(incomeTransactions, expenseTransactions);
      } else {
        setIncomes([]);
        setExpenses([]);
        setTotal(0);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [calculateTotal]);

  useEffect(() => {
    fetchData();
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, [fetchData]);

  const addTransaction = async (type, amount, transactionType) => {
    try {
      const response = await axios.post("http://localhost:4000/transactions", {
        type,
        amount,
        transactionType,
        email,
      });
      const newTransaction = response.data;
      if (type === "income") {
        setIncomes([newTransaction, ...incomes]);
        setIncomeAmount("");
        setIncomeType("");
        setTotal(total + amount);
      } else {
        setExpenses([newTransaction, ...expenses]);
        setExpenseAmount("");
        setExpenseType("");
        setTotal(total - amount);
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const deleteTransaction = async (id, type, index) => {
    try {
      await axios.delete(`http://localhost:4000/transactions/${id}`);
      if (type === "income") {
        const newIncomes = [...incomes];
        const deletedAmount = newIncomes.splice(index, 1)[0].amount;
        setIncomes(newIncomes);
        setTotal(total - deletedAmount);
      } else if (type === "expense") {
        const newExpenses = [...expenses];
        const deletedAmount = newExpenses.splice(index, 1)[0].amount;
        setExpenses(newExpenses);
        setTotal(total + deletedAmount);
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(incomeAmount);
    if (!isNaN(amount) && incomeType) {
      addTransaction(
        "income",
        amount,
        incomeType === "Other" ? otherIncomeType : incomeType
      );
    }
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(expenseAmount);
    if (!isNaN(amount) && expenseType) {
      addTransaction(
        "expense",
        amount,
        expenseType === "Other" ? otherExpenseType : expenseType
      );
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container investment-tracker">
        <div className="row animate__animated animate__fadeInDown">
          <h1 className="mb-4 text-center">Transactions Manager</h1>
          <div className="col-md-4 mb-3 ">
            <div className="card">
              <div className="card-header bg-primary text-light">
                <strong>Total</strong>
              </div>
              <div className="card-body">
                <h3>&#8377; {total}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-header bg-success text-light">
                <strong>Total Incomes</strong>
              </div>
              <div className="card-body">
                <h3>
                  &#8377; {incomes.reduce((acc, curr) => acc + curr.amount, 0)}
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-header bg-warning text-light">
                <strong>Total Expenses</strong>
              </div>
              <div className="card-body">
                <h3>
                  &#8377; {expenses.reduce((acc, curr) => acc + curr.amount, 0)}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row animate__animated animate__fadeInUp">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-header bg-success text-light">
                <strong>Income</strong>
              </div>
              <div className="card-body">
                <form onSubmit={handleIncomeSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="incomeAmount">Income Amount:</label>
                    <input
                      type="number"
                      className="form-control custom-input"
                      id="incomeAmount"
                      value={incomeAmount}
                      onChange={(e) => setIncomeAmount(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="incomeType">Income Type:</label>
                    <select
                      className="form-control custom-input"
                      id="incomeType"
                      value={incomeType}
                      onChange={(e) => setIncomeType(e.target.value)}
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Salary">Salary</option>
                      <option value="Other">Other</option>
                    </select>
                    {incomeType === "Other" && (
                      <input
                        type="text"
                        className="form-control mt-2 custom-input"
                        placeholder="Enter Other Type"
                        value={otherIncomeType}
                        onChange={(e) =>
                          setOtherIncomeType(
                            e.target.value.charAt(0).toUpperCase() +
                              e.target.value.slice(1).toLowerCase()
                          )
                        }
                        required
                      />
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary  text-light"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      fontFamily: "Poppins",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Add Income
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-header bg-warning text-light">
                <strong>Expense</strong>
              </div>
              <div className="card-body">
                <form onSubmit={handleExpenseSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="expenseAmount">Expense Amount:</label>
                    <input
                      type="number"
                      className="form-control custom-input"
                      id="expenseAmount"
                      value={expenseAmount}
                      onChange={(e) => setExpenseAmount(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="expenseType">Expense Type:</label>
                    <select
                      className="form-control custom-input"
                      id="expenseType"
                      value={expenseType}
                      onChange={(e) => setExpenseType(e.target.value)}
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Groceries">Groceries</option>
                      <option value="Rent">Rent</option>
                      <option value="Utilities">Utilities</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Education">Education</option>
                      <option value="Food">Food</option>
                      <option value="Traveling">Traveling</option>
                      <option value="Other">Other</option>
                    </select>
                    {expenseType === "Other" && (
                      <input
                        type="text"
                        className="form-control mt-2 custom-input"
                        placeholder="Enter Other Type"
                        value={otherExpenseType}
                        onChange={(e) =>
                          setOtherExpenseType(
                            e.target.value.charAt(0).toUpperCase() +
                              e.target.value.slice(1).toLowerCase()
                          )
                        }
                        required
                      />
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary  text-light "
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      fontFamily: "Poppins",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Add Expense
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 animate__animated animate__fadeInUp">
          <div className="col-md-6 mb-3">
            <h3>Incomes</h3>
            <div className="list-group">
              {incomes.map((income, index) => (
                <div
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>Amount:</strong> &#8377; {income.amount},{" "}
                    <strong>Type:</strong> {income.transactionType},{" "}
                    <strong>Date:</strong>{" "}
                    {new Date(income.date).toLocaleDateString()}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-danger  text-light"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      fontFamily: "Poppins",
                      letterSpacing: "0.5px",
                    }}
                    onClick={() =>
                      deleteTransaction(income._id, "income", index)
                    }
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <h3>Expenses</h3>
            <div className="list-group">
              {expenses.map((expense, index) => (
                <div
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>Amount:</strong> &#8377; {expense.amount},{" "}
                    <strong>Type:</strong> {expense.transactionType},{" "}
                    <strong>Date:</strong>{" "}
                    {new Date(expense.date).toLocaleDateString()}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-danger  text-light"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      fontFamily: "Poppins",
                      letterSpacing: "0.5px",
                    }}
                    onClick={() =>
                      deleteTransaction(expense._id, "expense", index)
                    }
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscationsManager;
