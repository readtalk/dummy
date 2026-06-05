import { useParams } from "react-router";
import ChatRoom from "~/components/ChatRoom";

export default function ChatRoute() {
  const { id } = useParams();
  return <ChatRoom chatId={id} />;
}
