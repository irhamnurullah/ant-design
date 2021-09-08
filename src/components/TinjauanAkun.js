import { Card, Row, Col, Button } from "antd";
import gifKpr from "../assets/img/gifKpr.gif";
import { Link } from "react-router-dom";
import PengajuanKPRSaya from "../components/PengajuanKPRSaya";

export default function TinjauanAkun() {
  return (
    <div>
      <h1 style={{ color: "#014a94" }}>Tinjauan Akun</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Profil />
        </Col>
        <Col span={8}>
          <PengajuanKPRTerakhir />
        </Col>
      </Row>
    </div>
  );
}

function Profil() {
  return (
    <div className="profil">
      <Card className="card-border" title="Profil">
        <div className="isi">
          <div>
            <span>
              {" "}
              Nama Lengkap
              <p>Irham Nurullah</p>
            </span>
          </div>
          <div>
            <span>
              {" "}
              Email
              <p>nurullahirham@gmail.com</p>
            </span>
          </div>
          <div>
            <span>
              {" "}
              Nomor Hp
              <p>081395732100</p>
            </span>
          </div>
          <div>
            <span>
              {" "}
              Tanggal Lahir
              <p>25 December 1994</p>
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}

function PengajuanKPRTerakhir() {
  return (
    <div className="profil">
      <Card className="card-border" title="Pengajuan KPR Terakhir" style={{ width: "355px" }}>
        <p>
          <img src={gifKpr} alt="kpr" style={{ width: "355px" }} />
        </p>
        <div className="isi">
          <span>Belum ada pengajuan KPR ?</span>
          <p>Ajukan KPR online, wujudkan rumah idamanmu bersama BRI</p>
          <Link to="/PengajuanKPRSaya">
            <Button type="primary" shape="round" style={{ backgroundColor: "#f0670f", borderColor: "#f0670f" }}>
              Ajukan KPR
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
