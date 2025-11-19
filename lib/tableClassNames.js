const classNames = {
  th: [
    "bg-[var(--table-header)]",
    "font-sans",
    "font-bold",
    "text-[var(--accent-primary)]"
  ],
  td: [
    "bg-white",
    "font-sans",
    "font-medium",
    "text-[var(--foreground-color)]",
    "group-data-[first=true]:first:before:rounded-none",
    "group-data-[first=true]:last:before:rounded-none",
    "group-data-[middle=true]:before:rounded-none",
    "group-data-[last=true]:first:before:rounded-none",
    "group-data-[last=true]:last:before:rounded-none",
  ],
};
export default classNames;
