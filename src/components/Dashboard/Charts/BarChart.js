import { Card } from 'antd';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChart = ({ data, colors }) => (
    <Card title="Stock por Características">
        <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="stock" fill={colors[0]} />
            </RechartsBarChart>
        </ResponsiveContainer>
    </Card>
);

export default BarChart; 