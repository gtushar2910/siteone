const classNames = {
      th: ["bg-orange-100","font-sans","font-bold"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
        "bg-orange-50",
        "font-sans",
        "font-medium"
      ],
    }

export default classNames;