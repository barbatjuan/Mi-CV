import QRCode from "qrcode";

const url = "https://www.juanbarbat.dev/";
QRCode.toFile("cv-qrcode.png", url, {
  color: { dark: "#000", light: "#FFF" },
  width: 300,
})
  .then(() => {
    console.log("✅ Código QR guardado como cv-qrcode.png");
  })
  .catch((err) => console.error(err));
