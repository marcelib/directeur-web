export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: '',
      dataClass: 'text-center'
    },
    {
      name: 'departmentName',
      title: 'Department name',
      sortField: 'departmentName'
    },
    {
      name: 'departmentDescription',
      title: 'Department description'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
