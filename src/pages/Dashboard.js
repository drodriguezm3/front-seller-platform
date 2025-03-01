import React, { useState, useEffect } from 'react';
import { getKPIData, getTableData, getGraphicsData } from '../services/metricsInformation';
import { Divider, Typography } from 'antd';
import KPICards from '../components/Dashboard/KPICards';
import InventoryTables from '../components/Dashboard/Tables/InventoryTables';
import InventoryCharts from '../components/Dashboard/Charts/InventoryCharts';

const { Title } = Typography;

const Dashboard = () => {
    const [kpiData, setKpiData] = useState({
        valor_inventario_total: 0,
        productos_stock_bajo: 0,
        productos_agotados: 0,
        productos_nuevos_mes_actual: 0
    });
    const [tableData, setTableData] = useState({
        productos_stock_bajo: [],
        movimientos_recientes: [],
        combinaciones_caracteristicas: []
    });

    const [graphicsData, setGraphicsData] = useState({
        distribucion_stock: { labels: [], datos: [] },
        mapa_arbol: [],
        barras_agrupadas_features: { labels: [], datos: [] },
        linea_tiempo: { fechas: [], stock: [] },
        areas_apiladas: {}
    });

    useEffect(() => {
        const fetchKPIData = async () => {
            try {
                const data = await getKPIData();
                setKpiData(data);
            } catch (error) {
                console.error('Error al cargar KPIs:', error);
            }
        };

        fetchKPIData();
    }, []);

    useEffect(() => {
        const fetchTableData = async () => {
            try {
                const data = await getTableData();
                setTableData(data);
            } catch (error) {
                console.error('Error al cargar datos de tablas:', error);
            }
        };

        fetchTableData();
    }, []);

    useEffect(() => {
        const fetchGraphicsData = async () => {
            try {
                const data = await getGraphicsData();
                setGraphicsData(data);
            } catch (error) {
                console.error('Error al cargar gráficos:', error);
            }
        };

        fetchGraphicsData();
    }, []);

    return (
        <div style={{ padding: '24px' }}>
            <Title style={{ marginBottom: '8px' }}>Dashboard y Métricas</Title>
            <Title level={3} style={{ 
                color: '#8c8c8c', 
                marginBottom: '32px',
                fontWeight: 'normal' 
            }}>
                Indicadores
            </Title>
            
            <KPICards kpiData={kpiData} />

            <Divider />

            <Title level={3} style={{ 
                color: '#8c8c8c', 
                marginBottom: '32px',
                fontWeight: 'normal' 
            }}>
                Tablas
            </Title>

            <InventoryTables tableData={tableData} />

            <Divider />

            <Title level={3} style={{ 
                color: '#8c8c8c', 
                marginBottom: '32px',
                fontWeight: 'normal' 
            }}>
                Gráficas
            </Title>

            <InventoryCharts graphicsData={graphicsData} />
        </div>
    );
};

export default Dashboard;
