import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { CameraIcon } from "../CameraIcon";
import { useEffect, useMemo } from "react";

interface AvatarUserProps {
  size: "sm" | "md" | "lg" | undefined;
  className?: string;
  src?: string;
  color?: "secondary" | "success" | "warning" | "default" | "primary" | "danger";
}

const AvatarUser = ({ size, className, src, color }: AvatarUserProps) => {
  const colorAvatar = useMemo(() => {
    const colors: AvatarUserProps["color"][] = [
      "secondary",
      "success",
      "warning",
      "primary",
      "danger",
      "default",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }, [src])

  return (
  <div>
   <Link href="/login">
     <Avatar 
      showFallback
      name="user"
      fallback={
        <CameraIcon className="animate-pulse w-12 h-12 text-default-500" fill="currentColor" size={20} height={undefined} width={undefined} />
      }
      size={size}
      className={`cursor-pointer hover:scale-90 transition-transform duration-200 ${className}`} 
      isBordered 
      color={color ?? colorAvatar} 
      src={src} />
   </Link>
  </div>
 )
}

export default AvatarUser;