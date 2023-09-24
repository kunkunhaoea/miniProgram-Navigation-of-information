// pages/groupNavigate/groupNavigate.js
Page({
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    active:0,
    currentTab:0,
    activeName: '1'
  },
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      active: id
    });
  },
  onLoad() {
    this.setData({
      nbTitle: '群导航',
      nbLoading: true,
      nbBackgroundColor: '#75a5d6',
    })
  },
  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },
 })
