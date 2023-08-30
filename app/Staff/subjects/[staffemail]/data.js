const columns = [
  { name: "ACADEMIC YEAR", uid: "academic_year", sortable: true },
  { name: "SEMESTER", uid: "semester", sortable: true },
  { name: "CLASS NAME", uid: "classname", sortable: true },
  { name: "SUBJECT", uid: "subject_name", sortable: true },
  { name: "SUBJECT CODE", uid: "subject_code", sortable: true },
  { name: "COURSE DATA", uid: "actions" },
  { name: "EDIT", uid: "edit" },
];

const statusOptions = [
  {name: "2023-24", uid: "2023-24"},
  {name: "2022-23", uid: "2022-23"},
  {name: "2021-22", uid: "2021-22"},
  {name: "2020-21", uid: "2020-21"},
  {name: "2019-20", uid: "2019-20"},
];

export {columns, statusOptions};
