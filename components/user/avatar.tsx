import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { CameraIcon } from "../CameraIcon";

interface AvatarUserProps {
  size: "sm" | "md" | "lg" | "xl" | undefined;
  className?: string;
  src?: string;
  color?: "secondary" | "success" | "warning" | "error" | "info" | "default";
}

const AvatarUser = ({ size, className, src, color }: AvatarUserProps) => {
const randomColor = () => {
  const colors = [
    "secondary",
    "success",
    "warning",
    "error",
    "info",
    "default",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

 return (
  <div>
   <Link href="/login">
     <Avatar 
      showFallback
      name="user"
      fallback={
        <CameraIcon className="animate-pulse w-12 h-12 text-default-500" fill="currentColor" size={20} />
      }
      size={size}
      className={`cursor-pointer hover:scale-90 transition-transform duration-200 ${className}`} 
      isBordered 
      color={color ?? randomColor()} 
      src={src} />
   </Link>
  </div>
 )
}

export default AvatarUser;