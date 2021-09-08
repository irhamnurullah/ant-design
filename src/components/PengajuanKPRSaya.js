import { Divider, Row, Col, Alert, Button } from "antd";

export default function PengajuanKPRSaya() {
  return (
    <div>
      <div>
        <h1>Pengajuan KPR</h1>
      </div>
      <div style={{ paddingBottom: "200px" }}>
        <h2>Data Diri</h2>
        <Divider />
        <Row justify="start">
          <Col span={5} className="judul">
            <dl>Nomor Induk KTP</dl>
            <dl>Nama Lengkap</dl>
            <dl>Tempat, Tanggal Lahir</dl>
            <dl>Alamat Saat ini</dl>
            <dl>Pekerjaan</dl>
            <dl>Pendapatan per-bulan</dl>
            <dl>Bukti Selfie KTP</dl>
            <dl>Bukti Slip Gaji</dl>
          </Col>
          <Col span={1}>
            <dl>:</dl>
            <dl>:</dl>
            <dl>:</dl>
            <dl>:</dl>
            <dl>:</dl>
            <dl>:</dl>
            <dl>:</dl>
            <dl>:</dl>
          </Col>
          <Col span={10}>
            <dl>3273162512930003</dl>
            <dl>Irham Nurullah</dl>
            <dl>Bandung, 25 Desember 1994</dl>
            <dl>Jl. Terusan Jakarta Komplek Kalijati Indah No. 13A</dl>
            <dl>Data Analyst</dl>
            <dl>Rp. 6.000.000</dl>
            <dl>
              <a href="#">file_selfie_KTP.pdf</a>
            </dl>
            <dl>
              <a href="#">file_slip_gaji.pdf</a>
            </dl>
          </Col>
        </Row>
        <AlertVerification />
        <ResetButton />
      </div>
    </div>
  );
}

function AlertVerification() {
  return (
    <div>
      <Alert
        message="Status Belum Terverifikasi"
        type="error"
        style={{ width: "25%", margin: "10px 0px 10px 0px", display: "flex", marginLeft: "25%" }}
      />
    </div>
  );
}

function ResetButton() {
  return (
    <div>
      <Button type="primary" style={{ backgroundColor: "#f0670f", borderColor: "#f0670f", float: "right", marginRight: "15%" }}>
        Reset Data Diri
      </Button>
    </div>
  );
}
