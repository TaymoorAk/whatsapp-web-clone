import { Download } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const DownloadBanner = () => {
  return (
    <Card
      className=" border border-gray-200 shadow-sm w-full max-w-3xl"
      style={{ border: "1px solid black" }}
    >
      <CardContent className="flex items-center justify-between  px-10">
        <div className="flex items-center gap-1">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 72 54"
              width="64"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <title>web-login-desktop-upsell-illustration</title>
              <g clipPath="url(#clip0_913_5240)">
                <path
                  fill="#fff"
                  d="M0 0h72v54H0z"
                  style={{ fill: "rgb(255, 255, 255)" }}
                ></path>
                <path
                  d="M8.75 15A6.25 6.25 0 0 1 15 8.75h42A6.25 6.25 0 0 1 63.25 15v37.25H8.75z"
                  fill="#E6FFDA"
                  stroke="#111B21"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M71.22 44.75a9.25 9.25 0 0 1-9.22 8.5H10a9.25 9.25 0 0 1-9.22-8.5z"
                  fill="#E6FFDA"
                  stroke="#111B21"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <rect
                  x="21.75"
                  y="0.75"
                  width="49.5"
                  height="34.5"
                  rx="6.25"
                  fill="#FCF5EB"
                  stroke="#111B21"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></rect>
                <path
                  d="M43.39 14.955c-.654-1.334 2.328-2.92 2.505-3.648l-.007-.01c.041-.16 0-.318-.047-.476a10.55 10.55 0 0 0-2.25-4.09c-.26-.286-.549-.572-.92-.683-.245-.069-.507-.055-.755-.014-2.124.335-3.598 2.363-3.86 4.438-.263 2.076.445 4.166 1.3 6.11 1.838 4.176 4.592 8.235 8.728 10.376 1.474.766 3.176 1.266 4.786.942 1.083-.218 2.183-1.007 2.128-2.08-.03-.51-.31-.976-.582-1.42-.616-.986-1.226-1.973-1.842-2.955-.31-.497-.68-1.038-1.266-1.156-1.215-.241-2.036 1.545-3.265 1.383-.483-.065-4.256-5.806-4.653-6.717"
                  fill="#25D366"
                  stroke="#111B21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_913_5240">
                  <path
                    fill="#fff"
                    d="M0 0h72v54H0z"
                    style={{ fill: "rgb(255, 255, 255)" }}
                  ></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="pl-2">
            <h3 className="font-18 text-gray-900">
              Download WhatsApp for Windows
            </h3>
            <p className="text-sm  mt-1 font-16">
              Make calls, share your screen and get a faster experience when you
              download the Windows app.
            </p>
          </div>
        </div>
        <Button
          className="bg-[#25D366] py-6 px-4 rounded-full flex items-center whatsapp-arch"
          style={{ border: "1px solid black", fontSize: "16px" }}
        >
          <span className="whatsapp-arch-text flex items-center">
            Download
            <Download className="w-4 h-4 ml-2" />
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
