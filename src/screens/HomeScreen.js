import { Row, Col, Layout, Card, Button } from "antd";
import { HomeOutlined, UserOutlined, LockOutlined, EditOutlined, CreditCardOutlined } from "@ant-design/icons";
import { Route, Link, NavLink } from "react-router-dom";
import TinjauanAkun from "../components/TinjauanAkun";
import UbahProfil from "../components/UbahProfil";
import UbahPassword from "../components/UbahPassword";
import PengajuanKPRSaya from "../components/PengajuanKPRSaya";
import BuktiBayar from "../components/BuktiBayar";
import "antd/dist/antd.css";
const { Content } = Layout;

export default function HomeScreen() {
  return (
    <div style={{ marginTop: 80, marginLeft: 50, display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Card className="card-hover" style={{ width: 245 }}>
          <NavLink to="/TinjauanAkun" style={{ width: 500 }} activeStyle={{ fontWeight: "bold", Color: "#014a94" }}>
            <div className="full-link">
              <HomeOutlined style={{ marginLeft: "20px", marginRight: "15px" }} />
              Tinjauan Akun
            </div>
          </NavLink>
        </Card>

        <Card className="card-hover" style={{ width: 245 }}>
          <NavLink to="/UbahProfil" style={{ width: 245 }} activeStyle={{ fontWeight: "bold", Color: "#014a94" }}>
            <div className="full-link">
              <UserOutlined style={{ marginLeft: "20px", marginRight: "15px" }} />
              Ubah Profil
            </div>
          </NavLink>
        </Card>

        <Card className="card-hover" style={{ width: 245 }}>
          <NavLink to="/UbahPassword" style={{ width: 245 }} activeStyle={{ fontWeight: "bold", Color: "#014a94" }}>
            <div className="full-link">
              <LockOutlined style={{ marginLeft: "20px", marginRight: "15px" }} />
              Ubah Password
            </div>
          </NavLink>
        </Card>

        <Card className="card-hover" style={{ width: 245 }}>
          <NavLink to="/PengajuanKPRSaya" style={{ width: 245 }} activeStyle={{ fontWeight: "bold", Color: "#014a94" }}>
            <div className="full-link">
              <EditOutlined style={{ marginLeft: "20px", marginRight: "15px" }} />
              Pengajuan KPR Saya
            </div>
          </NavLink>
        </Card>

        <Card className="card-hover" style={{ width: 245 }}>
          <NavLink to="/BuktiBayar" style={{ width: 245 }} activeStyle={{ fontWeight: "bold", Color: "#014a94" }}>
            <div className="full-link">
              <CreditCardOutlined style={{ marginLeft: "20px", marginRight: "15px" }} />
              Bukti Bayar
            </div>
          </NavLink>
        </Card>
      </div>

      {/* ini untuk bagian route dari homescreen */}
      <div style={{ flex: 2 }}>
        <Route path="/TinjauanAkun">
          <TinjauanAkun />
        </Route>
        <Route path="/UbahProfil">
          <UbahProfil />
        </Route>
        <Route path="/UbahPassword">
          <UbahPassword />
        </Route>
        <Route path="/PengajuanKPRSaya">
          <PengajuanKPRSaya />
        </Route>
        <Route path="/BuktiBayar">
          <BuktiBayar />
        </Route>
      </div>
    </div>
  );
}

/*
<Layout>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Row className="row-style">
            <Col span={18} push={6}></Col>
            <Col span={6} pull={18}>
              <div className="site-card-border-less-wrapper">
                <link to="/TinjauanAkun">
                  <Card style={{ width: 245 }}>
                    <div>
                      <HomeOutlined style={{ marginLeft: "20px", marginRight: "15px" }} />
                      Tinjauan Akun
                    </div>
                  </Card>
                </link>
                <Card bordered={true} style={{ width: 245 }}>
                  <div>
                    <UserOutlined style={{ marginLeft: "20px", marginRight: "15px" }} />
                    Ubah Profil
                  </div>
                </Card>
                <Card bordered={true} style={{ width: 245 }}>
                  <div>
                    <LockOutlined style={{ marginLeft: "20px", marginRight: "15px" }} />
                    Ubah Password
                  </div>
                </Card>
                <Card bordered={true} style={{ width: 245 }}>
                  <div>
                    <EditOutlined style={{ marginLeft: "20px", marginRight: "15px" }} />
                    Pengajuan KPR Saya
                  </div>
                </Card>
                <Card bordered={true} style={{ width: 245 }}>
                  <div>
                    <CreditCardOutlined style={{ marginLeft: "20px", marginRight: "15px" }} />
                    Bukti Bayar
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      </Layout>
*/
