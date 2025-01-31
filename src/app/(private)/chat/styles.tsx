import classNames from "classnames";

export const styles = {
  mainContainer: classNames(
    "flex",
    "min-h-screen",
    "items-center",
    "justify-center"
  ),
  chatContainer: classNames("w-[440px]", "h-[700px]", "flex", "flex-col"),
  chatTextBox: classNames("resize-none"),
  messagesContainer: classNames("flex-grow", "space-y-3"),
};
