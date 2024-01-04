const columns = [
  {name: "TYPE", uid: "type", sortable: true},
  {name: "LEVEL", uid: "level", sortable: true},
  {name: "DESCRIPTION", uid: "description", sortable: true},
  {name: "#", uid: "seqnum", sortable: true},
  {name: "ACTIONS", uid: "actions", sortable: false}
];

const statusOptions = [
  {name: "BOOK", uid: "BOOK"},
  {name: "JOURNAL", uid: "JOURNAL"},
  {name: "CONFERENCE", uid: "CONFERENCE"},
];

export {columns, statusOptions};
