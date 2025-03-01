export const stockBajoColumns = [
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

export const movimientosColumns = [
    { title: 'Producto', dataIndex: 'name', key: 'name' },
    { title: 'Categoría', dataIndex: 'category', key: 'category' },
    { title: 'Stock Actual', dataIndex: 'stock', key: 'stock' },
    { title: 'Última Actualización', dataIndex: 'updated_at', key: 'updated_at' },
];

export const caracteristicasColumns = [
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