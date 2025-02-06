import classNames from "classnames";

export const styles = {
  mainContainer: classNames(
    "flex",
    "min-h-screen",
    "bg-slate-50",
    "items-center",
    "justify-center"
  ),
  chatContainer: classNames("w-[440px]", "h-[700px]", "flex", "flex-col"),
  chatTextBox: classNames("resize-none"),
  messagesContainer: classNames("flex-grow", "space-y-3"),
  avatarContainer: classNames("w-10", "h-10", "flex-shrink-0"),
  avatarImage: classNames("rounded-full", "w-full", "h-full", "object-cover"),
  messageBox: classNames("flex", "gap-2", "text-slate-600", "text-sm"),
  messageText: classNames("mt-2"),
};
