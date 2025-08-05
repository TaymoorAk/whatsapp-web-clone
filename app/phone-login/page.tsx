"use client";

import { useState } from "react";
import { DownloadBanner } from "@/components/layout/DownloadBanner";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ReactFlagsSelect from "react-flags-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight, Lock } from "lucide-react";
import Link from "next/link";
import { BottomLinks } from "@/components/layout/BottomLinks";

type Country = {
  name: string;
  flag: string;
  code: string;
};

type CountryData = {
  [key: string]: Country;
};
const countryData: CountryData = {
  russia: { name: "Russia", flag: "🇷🇺", code: "+7" },
  usa: { name: "United States", flag: "🇺🇸", code: "+1" },
  uk: { name: "United Kingdom", flag: "🇬🇧", code: "+44" },
  india: { name: "India", flag: "🇮🇳", code: "+91" },
};

export default function PhoneLogin() {
  const [selectedCountry, setSelectedCountry] = useState("russia");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selected, setSelected] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only digits
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  const currentCode = countryData[selectedCountry].code;

  return (
    <div className="min-h-screen bg-[#fcf5eb]">
      <Header />

      <div className="flex flex-col items-center px-6 pb-6 space-y-6">
        <DownloadBanner />

        <Card className="w-full max-w-3xl border border-black shadow-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-normal text-gray-800">
              Enter phone number
            </CardTitle>
            <p className="text-sm text-black mt-2">
              Select a country and enter your phone number.
            </p>
          </CardHeader>

          <CardContent className="w-full flex justify-center">
            <div className="w-[310px] space-y-2">
              {/* Country Selector */}
              <div>
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  searchable
                  id="react-flags-select"
                  className="w-full"
                />
              </div>

              {/* Phone Input with Fixed Code */}
              <div className="flex items-center border border-black rounded-full overflow-hidden h-11">
                <span className="px-4 text-sm font-medium select-none">
                  {currentCode}
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  className="flex-1 h-full px-4 outline-none bg-white text-sm focus:border-emerald-600"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="Enter phone number"
                />
              </div>

              {/* Next Button */}
              <Link href="/verify-code">
                <div className="flex justify-center pt-4">
                  <Button className="bg-[#008069] hover:bg-emerald-700 text-white px-6 py-2 rounded-full">
                    Next
                  </Button>
                </div>
              </Link>

              {/* QR Code Login Link */}
              <div className="flex justify-center pt-4">
                <Link
                  href="/"
                  className="text-black hover:text-emerald-700 underline decoration-emerald-600 underline-offset-4 cursor-pointer inline-flex items-center gap-1"
                >
                  Log in with QR code
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Links */}
        <BottomLinks />
      </div>
    </div>
  );
}
