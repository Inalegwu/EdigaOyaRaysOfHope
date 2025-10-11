import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Timeline = defineDocumentType(() => ({
  name: "Timeline",
  filePathPattern: "**/*.md",
  fields: {
    item: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: false },
  },
}));

export default makeSource({
  contentDirPath: "timeline",
  documentTypes: [Timeline],
});
