import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";

const AvatarUser = () => {
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
      name="convidado" 
      className="cursor-pointer hover:scale-90 transition-transform duration-200" 
      isBordered 
      color={randomColor()} src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
   </Link>
  </div>
 )
}

export default AvatarUser;