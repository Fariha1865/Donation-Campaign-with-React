import { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import { getFromLocalStorage } from '../../utilities/localStorage';
import { useLocation } from 'react-router-dom';

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
    const {pathname} = useLocation();

  useEffect(()=>{
    const totalDonatedCount = getFromLocalStorage();
    setTotalDonated(totalDonatedCount.length)

    if(pathname.includes("Statistics"))
    {
        document.title = "Statistics"
    }
  },[pathname])


  const TooltipContent = () => {
    
    
      return (
        <div className="custom-tooltip bg-white p-2 rounded-md mt-7 ml-5" >
          <p>Total Donation: 12</p>
          <p>Your Donation: {totalDonated}</p>
        </div>
      );
    

  };

  const selectedPercentage = (totalDonated / 12) * 100;
  const remainingPercentage = 100 - selectedPercentage;

  const data = [
    { name: 'Your Donation', value: selectedPercentage },
    { name: 'Total Donation', value: remainingPercentage },
  ];

  const colors = ['#00C49F','#FF444A'];

  return (
    <div className='max-w-3xl mx-auto flex justify-center'>
    
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          startAngle={0}
          endAngle={360} 
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
          label={renderCustomLabel}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend  wrapperStyle={{ right: '0px', top: '110%', transform: 'translate(0, -50%)' }}/>
        <Tooltip content={TooltipContent}/>
      </PieChart>
    </div>
  
  );
};



export default Statistics;