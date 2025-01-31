import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { styles } from "./styles";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default async function ChatPage() {
  return (
    <div className={styles.mainContainer}>
      <Card className={styles.chatContainer}>
        <CardHeader>
          <CardTitle>AI Chat</CardTitle>
          <CardDescription>Chat with our AI</CardDescription>
        </CardHeader>
        <CardContent className={styles.messagesContainer}>
          <div className="w-8 h-8">
            <Avatar>
              <AvatarImage
                className="rounded-full"
                src="https://github.com/HiIamZeref.png"
              />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
          </div>
          <div>Chat messages goes here!!</div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Textarea className={styles.chatTextBox} placeholder="Talk to me!" />
          <Button type="submit" className="h-full">
            Send
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
