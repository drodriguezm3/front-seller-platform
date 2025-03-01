import { Row, Col } from 'antd';
import KPICard from './KPICard';

const KPISection = ({ kpiData, formatCurrency }) => (
    <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
            <KPICard 
                title="Valor Total del Inventario"
                value={formatCurrency(kpiData.valor_inventario_total)}
                color="#1890ff"
            />
        </Col>
        <Col xs={24} sm={12} lg={6}>
            <KPICard 
                title="Productos con Stock Bajo"
                value={kpiData.productos_stock_bajo}
                color="#faad14"
            />
        </Col>
        <Col xs={24} sm={12} lg={6}>
            <KPICard 
                title="Productos Agotados"
                value={kpiData.productos_agotados}
                color="#ff4d4f"
            />
        </Col>
        <Col xs={24} sm={12} lg={6}>
            <KPICard 
                title="Productos Nuevos"
                value={kpiData.productos_nuevos_mes_actual}
                color="#52c41a"
            />
        </Col>
    </Row>
);

export default KPISection; 