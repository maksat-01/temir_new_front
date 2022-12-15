import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function Share() {
  const url = window.location.href;
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="bg-white p-3">
          <QRCodeSVG width="230px" height="230px" bgColor="white" value={url} />
        </div>
      </div>
      <div className="text-center pt-6">
        <h5 className="text-[16px]">Interfases QR Code</h5>
      </div>
    </>
  );
}
