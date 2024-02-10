import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import styles from "./FSTextEditor.module.css";
import { boldText, centerAlignText, italicText, leftAlignText, orderedList, rightAlignText, unOrderedList, underlineText } from "../../assets/images";

export const FSTextEditor = ({ label, placeholder }) => {

  return (
    <>
      {label && <span className={styles.label}>{label}</span>}
      <Editor
        wrapperClassName={styles.editorWrap}
        toolbarClassName={styles.toolbarWrap}
        editorClassName={styles.textWrap}
        toolbar={{
          options: ["inline", "textAlign", "list"],
          inline: {
            options: ["bold", "italic", "underline"],
            bold: { icon: boldText, className: styles.toolbarBtn },
            italic: { icon: italicText, className: styles.toolbarBtn },
            underline: { icon: underlineText, className: styles.toolbarBtn },
          },
          textAlign: {
            options: ["left", "center", "right"],
            left: { icon: leftAlignText, className: styles.toolbarBtn },
            center: { icon: centerAlignText, className: styles.toolbarBtn },
            right: { icon: rightAlignText, className: styles.toolbarBtn },
          },
          list: {
            options: ["ordered", "unordered"],
            ordered: { icon: orderedList, className: styles.toolbarBtn },
            unordered: { icon: unOrderedList, className: styles.toolbarBtn },
          },
        }}
        placeholder={placeholder}
      />
    </>
  );
}