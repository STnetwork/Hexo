import type { TinaField } from "tinacms";
export function blog_postFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "excerpt",
      label: "excerpt",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
    },
  ] as TinaField[];
}
