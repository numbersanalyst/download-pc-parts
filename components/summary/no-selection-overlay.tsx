import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldBan } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const NoSelectionOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="text-white text-center p-4 animate-in zoom-in duration-500">
        <ShieldBan className="size-12 mx-auto mb-2" />
        <h2 className="text-2xl font-bold">No Part Selected</h2>
        <p className="mt-2 max-w-lg">Are you sure you want to continue without any part selected? You can do it and select your custom parts.</p>
        <div className="flex gap-4 justify-center mt-4">
          <Link href={"/configure"}>
            <Button><ArrowLeft/> Go Back</Button>
          </Link>
          <Button variant="secondary" onClick={() => setIsVisible(false)}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export { NoSelectionOverlay };
