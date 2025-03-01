import { Card } from 'antd';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

const CustomizedContent = (props) => {
    const { depth, x, y, width, height, index, name, value } = props;

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: COLORS[index % COLORS.length],
                    stroke: '#fff',
                    strokeWidth: 2,
                    strokeOpacity: 1,
                }}
            />
            {width > 50 && height > 30 && (
                <>
                    <text
                        x={x + width / 2}
                        y={y + height / 2 - 7}
                        textAnchor="middle"
                        fill="#fff"
                        fontSize={12}
                    >
                        {name}
                    </text>
                    <text
                        x={x + width / 2}
                        y={y + height / 2 + 7}
                        textAnchor="middle"
                        fill="#fff"
                        fontSize={11}
                    >
                        {value}
                    </text>
                </>
            )}
        </g>
    );
};

const TreemapChart = ({ data }) => {
    // Asegurarse de que los datos tengan el formato correcto
    const formattedData = {
        name: 'root',
        children: data.map(item => ({
            name: item.name || item.categoria,
            size: item.value || item.cantidad,
            children: item.children || item.marcas?.map(marca => ({
                name: marca.nombre,
                size: marca.cantidad
            }))
        }))
    };

    return (
        <Card title="Distribución por Categoría y Marca">
            <ResponsiveContainer width="100%" height={400}>
                <Treemap
                    data={[formattedData]}
                    dataKey="size"
                    aspectRatio={4/3}
                    stroke="#fff"
                    fill="#8884d8"
                    content={<CustomizedContent />}
                    animationDuration={1000}
                >
                    <Tooltip 
                        formatter={(value, name) => [`${value} unidades`, name]}
                        contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                    />
                </Treemap>
            </ResponsiveContainer>
        </Card>
    );
};

export default TreemapChart; 