const columns = [
  {name: "TYPE", uid: "type", sortable: true},
  {name: "DESCRIPTION", uid: "description", sortable: true},
  {name: "#", uid: "seqnum", sortable: true},
  {name: "ACTIONS", uid: "actions", sortable: false}
];

const statusOptions = [
  {name: "WORKSHOP_SEMINAR_STTP", uid: "WORKSHOP_SEMINAR_STTP"},
  {name: "ACHIEVEMENTS_AWARDS", uid: "ACHIEVEMENTS_AWARDS"},
  {name: "ADMINISTRATIVE_DUTIES", uid: "ADMINISTRATIVE_DUTIES"},
  {name: "MEMBERSHIPS", uid: "MEMBERSHIPS"},
  {name: "EXPERT_LECTURES_DELIVERED", uid: "EXPERT_LECTURES_DELIVERED"},
  {name: "OTHER", uid: "OTHER"},
];

export {columns, statusOptions};
