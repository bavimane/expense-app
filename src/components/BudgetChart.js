import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import React, { memo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import { asyncListBudget } from "../actions/BudgetAction";

const BudgetChart = () => {
  const dispatch = useDispatch();
  const [usedAmount, setUsedAmount] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(0);

  useEffect(() => {
    dispatch(asyncListBudget());
  }, [dispatch]);

  const budgetAmount = useSelector((state) => {
    return state.budget.amount;
  });

  const expenseData = useSelector((state) => {
    return state.expense;
  });

  useEffect(() => {
    const totalUsedAmount = expenseData.reduce(
      (sum, item) => (sum += item.amount),
      0
    );
    const totalRemainingAmount = budgetAmount - totalUsedAmount;

    setUsedAmount(totalUsedAmount);
    setRemainingAmount(totalRemainingAmount);
  }, [budgetAmount, expenseData]);

  const data = [
    { name: "Used", value: usedAmount },
    { name: "Un used", value: remainingAmount },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{ width: "50%" }}>
      <h3>Budget Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p style={{ color: "#0088FE" }}>Used Amount - {usedAmount}</p>
      <p style={{ color: "#00C49F" }}>Remaining Amount - {remainingAmount}</p>
    </div>
  );
};

export default memo(BudgetChart);
