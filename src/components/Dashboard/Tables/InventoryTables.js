import React from 'react';
import { Card, Row, Col, Table } from 'antd';

const InventoryTables = ({ tableData }) => {
    const stockBajoColumns = [
        { title: 'Producto', dataIndex: 'name', key: 'name' },
        { title: 'Categoría', dataIndex: 'category', key: 'category' },
        { title: 'Marca', dataIndex: 'brand', key: 'brand' },
        { 
            title: 'Stock', 
            dataIndex: 'stock', 
            key: 'stock',
            render: (stock) => (
                <span style={{ color: stock < 5 ? '#ff4d4f' : '#faad14' }}>
                    {stock}
                </span>
            )
        },
    ];

    const movimientosColumns = [
        { title: 'Producto', dataIndex: 'name', key: 'name' },
        { title: 'Categoría', dataIndex: 'category', key: 'category' },
        { title: 'Stock Actual', dataIndex: 'stock', key: 'stock' },
        { title: 'Última Actualización', dataIndex: 'updated_at', key: 'updated_at' },
    ];

    const caracteristicasColumns = [
        { 
            title: 'Características', 
            dataIndex: 'combinacion', 
            key: 'combinacion',
            render: (text) => (
                <span style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {text}
                </span>
            )
        },
        { 
            title: 'Stock Total', 
            dataIndex: 'stock_total', 
            key: 'stock_total',
            sorter: (a, b) => a.stock_total - b.stock_total,
        },
    ];

    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Card title="Top 5 Productos con Menor Stock" bordered={false}>
                    <Table 
                        dataSource={tableData.productos_stock_bajo}
                        columns={stockBajoColumns}
                        pagination={false}
                        size="small"
                    />
                </Card>
            </Col>

            <Col span={24}>
                <Card title="Últimos Movimientos de Inventario" bordered={false}>
                    <Table 
                        dataSource={tableData.movimientos_recientes}
                        columns={movimientosColumns}
                        pagination={false}
                        size="small"
                    />
                </Card>
            </Col>

            <Col span={24}>
                <Card title="Ranking de Características con Mayor Stock" bordered={false}>
                    <Table 
                        dataSource={tableData.combinaciones_caracteristicas}
                        columns={caracteristicasColumns}
                        pagination={false}
                        size="small"
                    />
                </Card>
            </Col>
        </Row>
    );
};

export default InventoryTables; 