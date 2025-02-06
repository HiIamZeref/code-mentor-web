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
          <div className={styles.messageBox}>
            <Avatar className={styles.avatarContainer}>
              <AvatarImage
                className={styles.avatarImage}
                src="https://github.com/HiIamZeref.png"
              />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <p className={styles.messageText}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className={styles.messageBox}>
            <Avatar className={styles.avatarContainer}>
              <AvatarImage
                className={styles.avatarImage}
                src="https://github.com/HiIamZeref.png"
              />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <p>Olá!</p>
          </div>
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
