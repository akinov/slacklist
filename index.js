var workspaces = [
  {
    name: 'name1',
    description: 'descdescdesc',
    url: 'https://google.com',
    categoryId: 1
  },
  {
    name: 'name2',
    description: 'descdescdesc',
    url: 'https://google.com',
    categoryId: 2
  },
];
var categories = [
  { id: null, name: 'All' },
  { id: 1, name: 'tech' },
  { id: 2, name: 'design' },
];

var app = new Vue({
  el: '#v-list',
  data: {
    workspaces: workspaces,
    categories: categories,
    selectedCategoryId: null
  },
  methods: {
    updateWorkspaces: function () {
      var selectedCategoryId = this.selectedCategoryId;
      if (selectedCategoryId) {
        this.workspaces = workspaces.filter(function(workspace) { console.log(workspace.categoryId, selectedCategoryId);return workspace.categoryId == selectedCategoryId });
      } else {
        this.workspaces = workspaces;
      }
    },
    selectCategory: function(categoryId) {
      console.log(categoryId);
      this.selectedCategoryId = categoryId;
      this.updateWorkspaces();
    }
  }
})
