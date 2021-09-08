import { Layout } from "antd";
import logo from "../assets/img/logo.svg";
import "./Navbar.css";

const { Header } = Layout;

export default function Navbar() {
  return (
    <Layout>
      <Header>
        <div className="navbar">
          <img className="logo" src={logo} alt="logo" />
          <h3 style={{ float: "right" }}>Irham Nurullah</h3>
        </div>
      </Header>
    </Layout>
  );
}
