export type BlogItem = {
  title: string;
  description: string;
  url?: string;
  disabled?: boolean;
};

export const blogItems: BlogItem[] = [
  {
    title: "「構造」をつくる会社",
    description: "Zestarkが大切にしている設計という営み",
    url: "https://note.com/zestark_inc/n/n9c66e164c8c3",
    disabled: false,
  },
  {
    title: "nothing found",
    description: "",
    disabled: true,
  },
  {
    title: "nothing found",
    description: "",
    disabled: true,
  }
];
