import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getUsers } from "../Components/Api";

export default function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getUsers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        style={{ width: "100%" }}
        loading={loading}
        pagination={{
          pageSize: 5,
        }}
        columns={[
          {
            title: "Image",
            dataIndex: "image",
            key: "thumbnail",
            render: (thumbnail) => <Avatar src={thumbnail} />,
          },
          {
            title: "First Name",
            dataIndex: "firstName",
            key: "fName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
            key: "lName",
          },
          {
            title: "E-mail Address",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
          },

          {
            title: "Address",
            dataIndex: "address",
            key: "address",
            render: (address) => (
              <p>
                {address.address}, {address.city}
              </p>
            ),
          },
        ]}
        dataSource={dataSource}
      ></Table>
    </Space>
  );
}
