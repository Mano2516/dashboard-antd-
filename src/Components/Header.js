import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import img0 from "../Black.jpg";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getComments, getRecentOrders } from "./Api";
export default function Header() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [openComments, setOpenComments] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getRecentOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);
  return (
    <div className="header">
      <Image src={img0} width={40} style={{ borderRadius: "50%" }}></Image>
      <Typography.Title>MaNo’s Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setOpenComments(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setOpenNotifications(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={openComments}
        onClose={() => {
          setOpenComments(false);
        }}
        maskClosable={true}
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={openNotifications}
        onClose={() => {
          setOpenNotifications(false);
        }}
        maskClosable={true}
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                {" "}
                <Typography.Text strong>
                  {item.title} has been order
                </Typography.Text>
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}
