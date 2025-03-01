import React from 'react';
import { Card, Row, Col } from 'antd';
import { 
    PieChart, Pie, Cell, 
    Treemap,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    LineChart, Line,
    AreaChart, Area,
    ResponsiveContainer 
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const InventoryCharts = ({ graphicsData }) => {
    // Transformar datos para gráfica de dona
    const pieData = graphicsData.distribucion_stock.labels.map((label, index) => ({
        name: label,
        value: graphicsData.distribucion_stock.datos[index]
    }));

    // Transformar datos para gráfica de barras agrupadas
    const barData = graphicsData.barras_agrupadas_features.labels
        .map((label, index) => ({
            name: label,
            stock: graphicsData.barras_agrupadas_features.datos[index]
        }))
        .filter(item => item.name !== "N/A + N/A");

    // Transformar datos para línea de tiempo
    const lineData = graphicsData.linea_tiempo.fechas.map((fecha, index) => ({
        fecha: fecha,
        stock: graphicsData.linea_tiempo.stock[index]
    }));

    // Transformar datos para áreas apiladas
    const areaData = graphicsData.areas_apiladas.fechas?.map((fecha, index) => {
        const dataPoint = { fecha };
        Object.keys(graphicsData.areas_apiladas).forEach(key => {
            if (key !== 'fechas') {
                dataPoint[key] = graphicsData.areas_apiladas[key][index];
            }
        });
        return dataPoint;
    }) || [];

    return (
        <Row gutter={[16, 16]}>
            {/* Distribución por Categoría */}
            <Col xs={24}>
                <Card title="Distribución por Categoría" bordered={false}>
                    <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                        data={
                            // Procesamos los datos para agrupar categorías menores a 100
                            (() => {
                            const groupedData = pieData.filter(entry => entry.value >= 100);
                            const otros = pieData.filter(entry => entry.value < 100);
                            
                            if (otros.length > 0) {
                                groupedData.push({
                                name: 'Otros',
                                value: otros.reduce((sum, current) => sum + current.value, 0)
                                });
                            }
                            
                            return groupedData;
                            })()
                        }
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                        >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                    </ResponsiveContainer>
                </Card>
            </Col>

            {/* Mapa de Árbol */}
            <Col xs={24} >
                <Card title="Jerarquía Brand > Categoría" bordered={false}>
                    <ResponsiveContainer width="100%" height={300}>
                        <Treemap
                            data={graphicsData.mapa_arbol}
                            dataKey="value"
                            nameKey="name"
                            aspectRatio={4/3}
                        >
                            <Tooltip />
                        </Treemap>
                    </ResponsiveContainer>
                </Card>
            </Col>

            {/* Características Técnicas */}
            <Col xs={24}>
                <Card title="Stock por Combinación de Características" bordered={false}>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="stock" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
            </Col>

            {/* Evolución Temporal */}
            <Col xs={24} lg={12}>
                <Card title="Tendencia de Stock Total" bordered={false}>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={lineData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="fecha" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="stock" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </Card>
            </Col>

            {/* Áreas Apiladas */}
            <Col xs={24} lg={12}>
                <Card title="Stock por Categoría en el Tiempo" bordered={false}>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={areaData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="fecha" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {Object.keys(graphicsData.areas_apiladas).map((key, index) => (
                                key !== 'fechas' && (
                                    <Area 
                                        key={key}
                                        type="monotone" 
                                        dataKey={key} 
                                        stackId="1"
                                        fill={COLORS[index % COLORS.length]}
                                        stroke={COLORS[index % COLORS.length]}
                                    />
                                )
                            ))}
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>
            </Col>
        </Row>
    );
};

export default InventoryCharts; 