export const getInitials = (name: string) =>
  name
    .split(" ")
    .map((name_) => name_[0])
    .join("")
    .slice(0, 2);
