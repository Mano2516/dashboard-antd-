import { Typography } from "antd";

export default function Footer() {
  return (
    <div className="footer">
      <Typography.Link href="tel:+201016808882">+201016808882</Typography.Link>
      <Typography.Link href="#" target={"_blank"}>
        {" "}
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="mailto:info@example.com">
        info@example.com
      </Typography.Link>
    </div>
  );
}
