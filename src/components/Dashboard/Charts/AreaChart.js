import { Card } from 'antd';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AreaChart = ({ data, colors }) => {
    const areaKeys = Object.keys(data[0] || {}).filter(key => key !== 'fecha');

    return (
        <Card title="Evolución del Stock por Categoría">
            <ResponsiveContainer width="100%" height={300}>
                <RechartsAreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fecha" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {areaKeys.map((key, index) => (
                        <Area
                            key={key}
                            type="monotone"
                            dataKey={key}
                            stackId="1"
                            fill={colors[index % colors.length]}
                            stroke={colors[index % colors.length]}
                        />
                    ))}
                </RechartsAreaChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default AreaChart; 