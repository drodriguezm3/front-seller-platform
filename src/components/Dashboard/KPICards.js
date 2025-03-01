import React from 'react';
import { Card, Row, Col, Typography } from 'antd';

const { Title } = Typography;

const KPICards = ({ kpiData }) => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'COP'
        }).format(value);
    };

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={6}>
                <Card hoverable>
                    <Title level={4} style={{ marginBottom: '16px' }}>
                        Valor Total del Inventario
                    </Title>
                    <Title level={3} style={{ 
                        color: '#1890ff',
                        margin: 0
                    }}>
                        {formatCurrency(kpiData.valor_inventario_total)}
                    </Title>
                </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
                <Card hoverable>
                    <Title level={4} style={{ marginBottom: '16px' }}>
                        Productos con Stock Bajo
                    </Title>
                    <Title level={3} style={{ 
                        color: '#faad14',
                        margin: 0
                    }}>
                        {kpiData.productos_stock_bajo}
                    </Title>
                </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
                <Card hoverable>
                    <Title level={4} style={{ marginBottom: '16px' }}>
                        Productos Agotados
                    </Title>
                    <Title level={3} style={{ 
                        color: '#ff4d4f',
                        margin: 0
                    }}>
                        {kpiData.productos_agotados}
                    </Title>
                </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
                <Card hoverable>
                    <Title level={4} style={{ marginBottom: '16px' }}>
                        Productos Nuevos este Mes
                    </Title>
                    <Title level={3} style={{ 
                        color: '#52c41a',
                        margin: 0
                    }}>
                        {kpiData.productos_nuevos_mes_actual}
                    </Title>
                </Card>
            </Col>
        </Row>
    );
};

export default KPICards; 