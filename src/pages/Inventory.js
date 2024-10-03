import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../Components/Api";

export default function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        style={{ width: "100%" }}
        loading={loading}
        pagination={{
          pageSize: 5,
        }}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: (thumbnail) => <Avatar src={thumbnail} />,
          },
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
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            render: (rating) => <Rate value={rating} allowHalf disabled></Rate>,
          },
          {
            title: "Stock",
            dataIndex: "stock",
            key: "stock",
          },

          {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
            key: "category",
          },
        ]}
        dataSource={dataSource}
      ></Table>
    </Space>
  );
}
