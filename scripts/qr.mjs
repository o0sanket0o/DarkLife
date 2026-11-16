// Usage: npm run qr -- https://yourdomain.com
import QRCode from "qrcode";

const url = process.argv[2];
if (!url) {
  console.error("Give the menu URL, e.g. npm run qr -- https://foodplaza.in");
  process.exit(1);
}
await QRCode.toFile("menu-qr.png", url, {
  width: 1200,
  margin: 4,
  errorCorrectionLevel: "H",
  color: { dark: "#000000", light: "#FFFFFF" },
});
console.log("Saved menu-qr.png for", url);
