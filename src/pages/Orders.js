import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getRecentOrders } from "../Components/Api";

export default function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getRecentOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        style={{ width: "100%" }}
        loading={loading}
        pagination={false}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
            key: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => <span>${price}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
          },

          {
            title: "Discounted Total",
            dataIndex: "discountedTotal",
            key: "discountedTotal",
            render: (value) => <span style={{ color: "red" }}>${value}</span>,
          },
          {
            title: "Discount Percentage",
            dataIndex: "discountPercentage",
            key: "discountPercentage",
            render: (value) => <span>{value} %</span>,
          },
          {
            title: "Total",
            dataIndex: "total",
            key: "total",
            render: (total) => <span>${Number(total).toFixed(2)}</span>,
          },
        ]}
        dataSource={dataSource}
      ></Table>
    </Space>
  );
}
