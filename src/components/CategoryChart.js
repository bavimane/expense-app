import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { asyncCategoryList } from "../actions/CategoryAction";

function CategoryChart() {
  const [chartData, setChartData] = useState([]);

  const expenseData = useSelector((state) => {
    return state.expense;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCategoryList());
  }, [dispatch]);

  useEffect(() => {
    const data = expenseData.map((item) => {
      return {
        name: item.categoryName,
        value: item.amount,
      };
    });
    setChartData(data);
  }, [expenseData]);

  return (
    <div style={{ width: "50%" }}>
      <h3>Expense Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default React.memo(CategoryChart);
