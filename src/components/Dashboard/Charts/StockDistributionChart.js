import { Card } from 'antd';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockDistributionChart = ({ data, colors }) => (
    <Card title="Distribución por Categoría">
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={5}
                    label={(entry) => `${entry.name} (${entry.value})`}
                >
                    {data.map((entry, index) => (
                        <Cell 
                            key={`cell-${index}`} 
                            fill={colors[index % colors.length]}
                        />
                    ))}
                </Pie>
                <Tooltip 
                    formatter={(value, name) => [`${value} unidades`, name]}
                />
                <Legend 
                    layout="vertical" 
                    align="right"
                    verticalAlign="middle"
                />
            </PieChart>
        </ResponsiveContainer>
    </Card>
);

export default StockDistributionChart; 