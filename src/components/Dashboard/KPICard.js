import { Card, Typography } from 'antd';
const { Title } = Typography;

const KPICard = ({ title, value, color }) => (
    <Card hoverable>
        <Title level={4}>{title}</Title>
        <Title level={3} style={{ color, margin: 0 }}>
            {value}
        </Title>
    </Card>
);

export default KPICard; 