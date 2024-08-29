"use client";
import dynamic from "next/dynamic";
import Editor from "@uiw/react-md-editor";

const RTE = dynamic(
  () =>
    import("@uiw/react-md-editor").then((mod) => {
      return mod.default;
    }),
  { ssr: false }
);

export const MarkdownPreview = Editor.Markdown;

export default RTE;
