import { Row, Col } from 'antd';
import StockDistributionChart from './StockDistributionChart';
import TimelineChart from './TimelineChart';
import TreemapChart from './TreemapChart';
import BarChart from './BarChart';
import AreaChart from './AreaChart';

const ChartsSection = ({ graphicsData, colors }) => {
    // Transformar datos para gráfica de dona
    const pieData = graphicsData.distribucion_stock.labels.map((label, index) => ({
        name: label,
        value: graphicsData.distribucion_stock.datos[index]
    }));

    // Transformar datos para gráfica de barras agrupadas
    const barData = graphicsData.barras_agrupadas_features.labels.map((label, index) => ({
        name: label,
        stock: graphicsData.barras_agrupadas_features.datos[index]
    }));

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

    // Transformar datos para el treemap
    const treemapData = graphicsData.mapa_arbol.map(categoria => ({
        name: categoria.categoria,
        size: categoria.total,
        children: categoria.marcas.map(marca => ({
            name: marca.nombre,
            size: marca.cantidad
        }))
    }));

    return (
        <Row gutter={[16, 24]}>
            <Col xs={24} lg={12}>
                <StockDistributionChart 
                    data={pieData} 
                    colors={colors} 
                />
            </Col>
            <Col xs={24} lg={12}>
                <TreemapChart 
                    data={treemapData}
                    colors={colors}
                />
            </Col>
            <Col xs={24} lg={12}>
                <BarChart 
                    data={barData} 
                    colors={colors} 
                />
            </Col>
            <Col xs={24} lg={12}>
                <TimelineChart 
                    data={lineData} 
                />
            </Col>
            <Col xs={24}>
                <AreaChart 
                    data={areaData} 
                    colors={colors} 
                />
            </Col>
        </Row>
    );
};

export default ChartsSection; 