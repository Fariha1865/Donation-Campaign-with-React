import { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import { getFromLocalStorage } from '../../utilities/localStorage';

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
 
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  const percentage = `${(percent * 100).toFixed(2)}%`;
  

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {percentage}
    </text>
  );
};

const Statistics = () => {

    const [totalDonated,setTotalDonated] = useState(0);
  useEffect(()=>{
    const totalDonatedCount = getFromLocalStorage();
    setTotalDonated(totalDonatedCount.length)
  },[])

  const TooltipContent = (
    <div className="custom-tooltip">
      <p>Total Donation: 12</p>
      <p>Your Donation: {totalDonated}</p>
    </div>
  );

  const selectedPercentage = (totalDonated / 12) * 100;
  const remainingPercentage = 100 - selectedPercentage;

  const data = [
    { name: 'Your Donation', value: selectedPercentage },
    { name: 'Total Donation', value: remainingPercentage },
  ];

  const colors = ['#00C49F','#FF444A'];

  return (
    <div className='max-w-6xl mx-auto flex justify-center'>
     
      <PieChart width={600} height={600}>
        <Pie
          data={data}
          cx={300}
          cy={200}
          startAngle={0}
          endAngle={360} 
          outerRadius={160}
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
          label={renderCustomLabel}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend  wrapperStyle={{ right: '0px', top: '70%', transform: 'translate(0, -50%)' }}/>
        <Tooltip content={TooltipContent} className="bg-white p-2 rounded-md"/>
      </PieChart>
    </div>
  );
};



export default Statistics;