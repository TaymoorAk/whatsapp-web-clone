import { ArrowUpRight, Lock } from "lucide-react";

export const BottomLinks = () => {
  return (
    <div className="text-center space-y-4">
      <p className="text-gray-600 text-sm font-16">
        Don&apos;t have a WhatsApp account?{" "}
        <button className="text-black hover:text-emerald-700 underline decoration-emerald-600 underline-offset-4 cursor-pointer inline-flex items-center gap-1">
          Get started
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </p>

      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
        <Lock className="w-4 h-4" />
        <span>Your personal messages are end-to-end encrypted</span>
      </div>
    </div>
  );
};
