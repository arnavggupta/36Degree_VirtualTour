
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NextButtonProps {
  to: string;
  label?: string;
}

const NextButton = ({ to, label = "Next" }: NextButtonProps) => {
  return (
    <Link to={to}>
      <Button
        className="group bg-estate-600 hover:bg-estate-700 text-white shadow-md hover:shadow-lg px-8 py-6 rounded-full transition-all duration-300"
      >
        <span className="mr-2">{label}</span>
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </Link>
  );
};

export default NextButton;
