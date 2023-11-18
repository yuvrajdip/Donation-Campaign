import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
// import Chart from "react-google-charts";

const Statistics = () => {

  const dataFromLS = JSON.parse(localStorage.getItem('donations')) || {}
  // console.log(dataFromLS);

  //* recharts
  const x = dataFromLS.length
  const y = 12 - x

  const data = [
    { name: 'Your Donation', value: x },
    { name: 'Total Donation', value: y }
  ];

  const COLORS = ['#FF444A', '#00C49F'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${data[index].name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{maxWidth:'100%',maxHeight:'100%',height:'500px'}} className="">
      <ResponsiveContainer>
        
        <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={210}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;