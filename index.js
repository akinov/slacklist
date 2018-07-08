var workspaces = [
  {
    name: '運営者ギルド',
    subtitle: 'Webサービスのより良い開発/運営のためのコミュニティ',
    description: 'Webサービスを運営している人',
    url: 'https://scrapbox.io/admin-guild-pr/%E9%81%8B%E5%96%B6%E8%80%85%E3%82%AE%E3%83%AB%E3%83%89',
    categoryId: 1
  },
  {
    name: 'progate_slack',
    subtitle: 'SlackでProgateユーザと繋がろう！',
    description: "✅Progateで学習中またはOB(他サービス併用可)\n" +
    "✅Slackを使ってる\n" +
    "上記の2つを満たしている人であればどなたでも参加できます。\n" +
    "マイペースに学習したい方・初心者向けです。",
    url: 'https://join.slack.com/t/xvanillachai/shared_invite/enQtMzc4Nzc3MzUxODkyLTVkNDIzYjkzMGI3ZmJkZWQ2NjMxYTk3MDI1NTllNjJjYjM5MDhiYzdiMzYwMmYyYzY5OWI5ZWNhNmFiOGMwZWY',
    categoryId: 1
  },
  {
    name: 'Product Creator\'s Link',
    subtitle: 'Web/アプリに関わるエンジニア/デザイナー/プランナー等クリエイターが集まってわいわい遊ぶ会（於：都内レンタルルーム）',
    description: 'Web/アプリ制作に携わるクリエイターであること。\n' +
    'オフラインでの活動は都内のみ。オンライン(Slack)での活動のみの参加も可能',
    url: 'https://t.co/RAZU3yRY1G',
    categoryId: 1
  },
  {
    name: 'Monetize Geek JAM(別称：個人開発者マネタイズの会)',
    subtitle: '個人開発者たちが集ってマネタイズについて真剣に考えるSlack',
    description: '自分が開発した現在運営中のプロダクトが一つ以上あること。（現在制作中、構想のみ、開発者として関わっていない、といった場合はNG）\n' +
    '※DMで運営中サービスとメールアドレスを頂ければinviteする運用でやっています。',
    url: 'https://twitter.com/seekgeeks_ny',
    categoryId: 1
  },
  {
    name: 'Slackチーム運営者Slackチーム',
    subtitle: 'Slackチームを運営している人たちが集まってノウハウを共有するSlack',
    description: '現在運営中のSlackチームの主宰者であること。ジャンルに特に制限は無いが何かしらのコンセプトがあって不特定多数のメンバーを募っているチームを想定。\n' +
    '※DMで運営中Slackチームとメールアドレスを頂ければinviteする運用でやっています。',
    url: 'https://twitter.com/seekgeeks_ny',
    categoryId: 1
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
