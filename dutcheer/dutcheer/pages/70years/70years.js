// pages/70years/70years.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    saveImgBtnHidden: false,
    openSettingBtnHidden: true,
    shareImgSrc: '',
    share_hidden: true,
    joinnum: "",
    testanimation: "",
    lighted: false,
    container_style: "",
    linearray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    imgObj: "",
    userpic: "",
    userx: "",
    usery: "",
    picclass: [
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ],
    showcontrol: [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    // showcontrol: [
    //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // ],
    pic: "",
    animationarray: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        that.setData({
          userpic: res.data.avatarUrl
        })
      },
    })
    // wx.getStorage({
    //   key: 'login',
    //   success: function(res) {
    //     console.log(res)
    //     if (res.data != true) {
    //       console.log("!true")
    //       wx.redirectTo({
    //         url: "../start/start",
    //       })
    //     }
    //   },
    //   fail: function(res) {
    //     console.log(res),
    //       console.log("buzhen")
    //     wx.redirectTo({
    //       url: "../start/start",
    //     })
    //   }
    // })

    // var height = 62;
    // var width = 52;
    var picsrc = [
      "../../images/1.jpg",
      "../../images/2.jpg",
      "../../images/3.jpg",
      "../../images/4.jpg",
      "../../images/5.jpg",
      "../../images/6.jpg",
      "../../images/7.jpg",
      "../../images/8.jpg",
      "../../images/9.jpg",
      "../../images/10.jpg",
      "../../images/11.jpg",
      "../../images/12.jpg",
      "../../images/13.jpg",
      "../../images/14.jpg",
      "../../images/15.jpg",
      "../../images/16.jpg",
      "../../images/17.jpg",
      "../../images/18.jpg",
      "../../images/19.jpg",
      "../../images/20.jpg",
      "../../images/21.jpg",
      "../../images/22.jpg",
      "../../images/23.jpg",
      "../../images/24.jpg",
      "../../images/25.jpg",
      "../../images/26.jpg",
      "../../images/27.jpg",
      "../../images/28.jpg",
      "../../images/29.jpg",
      "../../images/30.jpg",
      "../../images/31.jpg",
      "../../images/32.jpg",
      "../../images/33.jpg",
      "../../images/34.jpg",
      "../../images/35.jpg",
      "../../images/36.jpg",
      "../../images/37.jpg",
      "../../images/38.jpg",
      "../../images/39.jpg",
      "../../images/40.jpg",
      "../../images/41.jpg",
      "../../images/42.jpg",
      "../../images/43.jpg",
      "../../images/44.jpg",
      "../../images/45.jpg",
      "../../images/46.jpg",
      "../../images/47.jpg",
      "../../images/48.jpg",
      "../../images/49.jpg",
      "../../images/50.jpg",
      "../../images/51.jpg",
      "../../images/52.jpg",
      "../../images/53.jpg",
      "../../images/54.jpg",
      "../../images/55.jpg",
      "../../images/56.jpg",
      "../../images/57.jpg",
      "../../images/58.jpg",
      "../../images/59.jpg",
      "../../images/60.jpg",
      "../../images/61.jpg",
      "../../images/62.jpg",
      "../../images/63.jpg",
      "../../images/64.jpg",
      "../../images/65.jpg",
      "../../images/66.jpg",
      "../../images/67.jpg",
      "../../images/68.jpg",
      "../../images/69.jpg",
      "../../images/70.jpg",
      "../../images/71.jpg",
      "../../images/72.jpg",
      "../../images/73.jpg",
      "../../images/74.jpg",
      "../../images/75.jpg",
      "../../images/76.jpg",
      "../../images/77.jpg",
      "../../images/78.jpg",
      "../../images/79.jpg",
      "../../images/80.jpg",
      "../../images/81.jpg",
      "../../images/82.jpg",
      "../../images/83.jpg",
      "../../images/84.jpg",
      "../../images/85.jpg",
      "../../images/86.jpg",
      "../../images/87.jpg",
      "../../images/88.jpg",
      "../../images/89.jpg",
      "../../images/90.jpg",
      "../../images/91.jpg",
      "../../images/92.jpg",
      "../../images/93.jpg",
      "../../images/94.jpg",
      "../../images/95.jpg",
      "../../images/96.jpg",
      "../../images/97.jpg",
      "../../images/98.jpg",
      "../../images/99.jpg",
      "../../images/100.jpg",
      "../../images/101.jpg",
      "../../images/102.jpg",
      "../../images/103.jpg",
      "../../images/104.jpg",
      "../../images/105.jpg",
      "../../images/106.jpg",
      "../../images/107.jpg",
      "../../images/108.jpg",
      "../../images/109.jpg",
      "../../images/110.jpg",
      "../../images/111.jpg",
      "../../images/112.jpg",
      "../../images/113.jpg",
      "../../images/114.jpg",
      "../../images/115.jpg",
      "../../images/116.jpg",
      "../../images/117.jpg",
      "../../images/118.jpg",
      "../../images/119.jpg",
      "../../images/120.jpg",
      "../../images/121.jpg",
      "../../images/122.jpg",
      "../../images/123.jpg",
      "../../images/124.jpg",
      "../../images/125.jpg",
      "../../images/126.jpg",
      "../../images/127.jpg",
      "../../images/128.jpg",
      "../../images/129.jpg",
      "../../images/130.jpg",
      "../../images/131.jpg",
      "../../images/132.jpg",
      "../../images/133.jpg",
      "../../images/134.jpg",
      "../../images/135.jpg",
      "../../images/136.jpg",
      "../../images/137.jpg",
      "../../images/138.jpg",
      "../../images/139.jpg",
      "../../images/140.jpg",
      "../../images/141.jpg",
      "../../images/142.jpg",
      "../../images/143.jpg",
      "../../images/144.jpg",
      "../../images/145.jpg",
      "../../images/146.jpg",
      "../../images/147.jpg"
    ];

    var userpostion = [
      [2, 18],
      [3, 16],
      [4, 12],
      [5, 9],
      [6, 6],
      [7, 5],
      [8, 5],
      [10, 15],
      [11, 15],
      [12, 15],
      [9, 15],
      [13, 15],
      [14, 16],
      [15, 24],
      [16, 22],
      [17, 26],
      [18, 11],
      [18, 38],
      [20, 21],
      [21, 13],
      [22, 8],
      [23, 9],
      [24, 7],
      [25, 7],
      [26, 7],
      [27, 7],
      [30, 19],
      [32, 12],
      [32, 39],
      [33, 17],
      [33, 39],
      [34, 17],
      [34, 39],
      [35, 17],
      [35, 39],
      [36, 17],
      [36, 39],
    ];

    let xyrandom = Math.floor(Math.random() * 30)
    var userx = userpostion[xyrandom][0];
    var usery = userpostion[xyrandom][1];
    console.log(userx);
    console.log(usery);

    var imgObj = new Array();
    var picnum = 0;

    that.setData({
      xyrandom: xyrandom,
      userx: userx,
      usery: usery
    })

    var animationarray = new Array();
    // var userx = userpostion[that.data.xyrandom][0];
    // var usery = userpostion[that.data.xyrandom][1];


    var animation = wx.createAnimation({
      timingFunction: 'linear',
    });

    for (var l = 0; l < that.data.showcontrol.length; l++) {
      console.log(l)
      animationarray[l] = new Array();
      for (var p = 0; p < that.data.showcontrol[l].length; p++) {
        if (that.data.showcontrol[l][p] == 1) {
         //扩散距离translate设置为(random*2000-1000)是因为我们希望动画中的图片是在以自己为几何中心的一个恰当范围内实现布朗运动,而得到(-a,a)区间随机数的办法就是(random*2a-a)，为什么不使用random(-a,a)呢？因为js里面random函数没有原生这个重载方法；经过多次测试，a确定为1000，这里的单位是px
          animation = animation.translate(Math.floor(Math.random() * 2000 - 1000), Math.floor(Math.random() * 2000 - 1000)).scale(Math.floor(Math.random() * 10)).step({
            duration: 7000 + Math.floor(Math.random() * 2000)
          }) 
          //为duration设置延时是因为scale是(t/duration)的函数，如果t,duration一致，那么数千张图片将会呈现完全一致的放大效果，这是比较无趣的；更改t需要延时触发，更改duration需要延时结束，这里，出于操作上的方便，设置延时结束，更改duration
          animationarray[l][p] = animation.export()
          
        }
      }
    }


//是的，user的头像图片将享受不一样的待遇，放大整整35倍，扩散半径仅为250，这一切都是为了让user享受到社会主义接班人的应有待遇，需要注意，animationarray[userx][usery]里面的userx和usery不能通过random*height|width得到，因为showcontrol里面有大量为空（0）的地方，要是取到这些值可就没有社会主义接班人了；在这个小程序中采取的做法是先将不为空的地方挑出来，然后在这些坐标里面进行随机
    animation = animation.translate(Math.floor(Math.random() * 500 - 250), Math.floor(Math.random() * 500 - 250)).scale(35).step({
      duration: 8000
    })
    animationarray[userx][usery] = animation.export()
    var animation1 = wx.createAnimation({
      timingFunction: 'ease',
    })
    var animationarray1 = new Array();

    //仍然使用showcontrol数组控制循环
    for (var l = 0; l < that.data.showcontrol.length; l++) {
      animationarray1[l] = new Array();
      for (var p = 0; p < that.data.showcontrol[l].length; p++) {
        if (that.data.showcontrol[l][p] == 1) {  
          //showcontrol == 1 才创建动画，不浪费运算资源
          animation1 = animation1.translate(0, 0).scale(1).step({
            //创建动画序列:移动和缩放，它们是同时执行的
            duration: 6000 + 80 * p
            //设置动画的执行时间，从从左到右每列增加80ms，实现波浪效果
          })
          animationarray1[l][p] = animation1.export()
          //将动画队列导出，赋值给矩阵中对应的元素
        }
      }
    }

    var testanimation = wx.createAnimation({
      timingFunction: 'linear',
    });
    testanimation = testanimation.translate(500, 500).scale(3).step({
      duration: 6000
    }).translate(0, 0).scale(1).step({
      duration: 5000
    })
    that.setData({
      testanimation: testanimation
    })

    //showcontrol是二维数组，自然使用双层循环
    for (var l = 0; l < that.data.showcontrol.length; l++) {
      imgObj[l] = new Array();
      for (var p = 0; p < that.data.showcontrol[l].length; p++) {
        //对象矩阵各属性的设置
        imgObj[l][p] = {
          id: picnum,
          //设置唯一的id，否则wx:for刷新时对象会被反复新建，造成卡顿
          picsrc: picsrc[Math.floor(Math.random() * picsrc.length)],
          //本对象显示的图片从picsrc数组里随机选取
          show: that.data.showcontrol[l][p]
          //由showcontrol矩阵来控制本对象是否显示
        };
        picnum++;
      }
    }


    setTimeout(function() {
      imgObj[userx][usery] = {
        id: picnum,
        picsrc: that.data.userpic,
        show: that.data.showcontrol[userx][usery]
      };
      that.setData({
        imgObj: imgObj
      })
    }, 1000)

//由于我们渲染的对象太多，将扩散动画和聚集动画写到一个动画队列里将会导致严重的性能问题，因此，需要手动设置延时加载，单位是ms
    setTimeout(function() {
      that.setData({
        animationarray: animationarray
      })
      setTimeout(function() {
        that.setData({
          animationarray: animationarray1
        })
      }, 6500)
    }, 13000)

  },

  tomine: function() {
    wx.navigateTo({
      url: '../mypic/mypic',
    })
  },

  light: function() {
    var that = this;
    var up = "picclass[" + that.data.userx + "]" + "[" + that.data.usery + "]"; //先用一个变量，把(info[0].gMoney)用字符串拼接起来
    that.setData({
      [up]: "zoom",
      lighted: true
    })
  },

  shrink: function() {
    var that = this;
    var up = "picclass[" + that.data.userx + "]" + "[" + that.data.usery + "]"; //先用一个变量，把(info[0].gMoney)用字符串拼接起来
    that.setData({
      [up]: "shrink",
      lighted: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // var that = this;
    // var animationarray = new Array();
    // var userpostion = [
    //   [2, 18],
    //   [3, 16],
    //   [4, 12],
    //   [5, 9],
    //   [6, 6],
    //   [7, 5],
    //   [8, 5],
    //   [10, 15],
    //   [11, 15],
    //   [12, 15],
    //   [9, 15],
    //   [13, 15],
    //   [14, 16],
    //   [15, 24],
    //   [16, 22],
    //   [17, 26],
    //   [18, 11],
    //   [18, 38],
    //   [20, 21],
    //   [21, 13],
    //   [22, 8],
    //   [23, 9],
    //   [24, 7],
    //   [25, 7],
    //   [26, 7],
    //   [27, 7],
    //   [30, 19],
    //   [32, 12],
    //   [32, 39],
    //   [33, 17],
    //   [33, 39],
    //   [34, 17],
    //   [34, 39],
    //   [35, 17],
    //   [35, 39],
    //   [36, 17],
    //   [36, 39],
    //   [38, 39],
    //   [39, 40],
    //   [40, 40],
    //   [42, 28],
    //   [44, 26],
    //   [45, 30],
    //   [46, 24],
    //   [47, 40],
    //   [48, 32],
    //   [52, 37],
    //   [53, 31],
    //   [54, 36],
    //   [55, 32],
    //   [58, 2],
    //   [58, 22],
    // ];
    // var userx = userpostion[that.data.xyrandom][0];
    // var usery = userpostion[that.data.xyrandom][1];
    // var animation = wx.createAnimation({
    //   timingFunction: 'linear',
    // });
    // for (var l = 0; l < that.data.showcontrol.length; l++) {
    //   console.log(l)
    //   animationarray[l] = new Array();
    //   for (var p = 0; p < that.data.showcontrol[l].length; p++) {
    //     if (that.data.showcontrol[l][p] == 1) {

    //       animation = animation.translate(Math.floor(Math.random() * 2000 - 1000), Math.floor(Math.random() * 2000 - 1000)).scale(Math.floor(Math.random() * 10)).step({
    //         duration: 7000 + Math.floor(Math.random() * 2000)
    //       })
    //       animationarray[l][p] = animation.export()
    //     }
    //   }
    // }

    // animation = animation.translate(Math.floor(Math.random() * 500 - 250), Math.floor(Math.random() * 500 - 250)).scale(35).step({
    //   duration: 8000
    // })
    // animationarray[userx][usery] = animation.export()
    // var animation1 = wx.createAnimation({
    //   timingFunction: 'ease',
    // })
    // var animationarray1 = new Array();
    // for (var l = 0; l < that.data.showcontrol.length; l++) {
    //   animationarray1[l] = new Array();
    //   for (var p = 0; p < that.data.showcontrol[l].length; p++) {
    //     if (that.data.showcontrol[l][p] == 1) {
    //       animation1 = animation1.translate(0, 0).scale(1).step({
    //         duration: 3000 + 80 * p
    //       })
    //       animationarray1[l][p] = animation1.export()
    //     }
    //   }
    // }

    // setTimeout(function() {
    //   that.setData({
    //     animationarray: animationarray
    //   })
    //   setTimeout(function() {
    //     that.setData({
    //       animationarray: animationarray1
    //     })
    //   }, 6000)
    // }, 7000)

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var that = this;
    var joinnum = wx.getStorageSync('joinnum')
    console.log(joinnum)
    that.setData({
      joinnum: joinnum,
    })

    // var random = Math.random() * 100
    // this.animation.translate(-random, -random).opacity(0.2).step()
    // this.animation.translate(random, random).opacity(1).step({ duration: 1000 })



    // setTimeout(function() {
    //   animation.translate(30).step()
    //   this.setData({
    //     animationData: animation.export()
    //   })
    // }.bind(this), 1000)
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(options) {

    var that = this;
    var joinnum = wx.getStorageSync('joinnum')
    return {
      title: "我是相聚大工第" + joinnum + "位参与者，来和我一起祝大工70岁生日快乐！",
      path: '/pages/index/index',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },

  drawImage: function() {
    //console.log(1);
    var that = this;
    const ctx = wx.createCanvasContext('myCanvas')
    var userinfo = wx.getStorageSync('userInfo')
    var joinnum = wx.getStorageSync('joinnum')
    //var imgPath = '/images/intro.png'
    var bgImgPath = '/images/canvas1.jpg';
    if (true) {
      that.setData({
        share_hidden: false
      })
      //console.log(rank_my);
      var avatar_url = userinfo.avatarUrl;
      var nickname = userinfo.nickName;
      var jointext = "你是第" + joinnum + "位参与者";
      var wishname = "我是" + nickname;
      var wish = "我祝大工70岁生日快乐";
      wx.downloadFile({
        url: avatar_url,
        success: function(res) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
          var avatar_temp_url = res.tempFilePath;
          //console.log(filePath);
          //console.log(avatar_url);
          ctx.drawImage(bgImgPath, 0, 0, 1080, 1598);
          ctx.drawImage(avatar_temp_url, 130, 900, 180, 180);

          ctx.setFontSize(50)
          ctx.setFillStyle('#ffffff')
          ctx.fillText(nickname, 330, 950)


          ctx.setFontSize(50)
          ctx.setFillStyle('#ffffff')
          ctx.fillText(jointext, 330, 1050)

          ctx.setFontSize(50)
          ctx.setFillStyle('#ffffff')
          ctx.fillText(wishname, 130, 1200)

          ctx.setFontSize(50)
          ctx.setFillStyle('#ffffff')
          ctx.fillText(wish, 130, 1300)

          //ctx.drawImage(imgPath, 30, 550, 60, 60);
          //ctx.drawImage(bgImgPath, 30, 550, 60, 60);
          //ctx.drawImage(imgPath, 410, 610, 160, 160);

          ctx.draw(false, function() {
            wx.canvasToTempFilePath({
              destWidth: 1080,
              destHeight: 1598,
              canvasId: 'myCanvas',
              success: function(res) {
                //console.log(res.tempFilePath);
                that.setData({
                  shareImgSrc: res.tempFilePath
                })

              },
              fail: function(res) {
                console.log(res)
              }
            })
          })
        }
      })

    } else {
      wx.showModal({
        title: '提示',
        content: '当前程序正忙，请重试',
        showCancel: false,
        confirmText: '确认',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定');
          }
        }
      })
    }
  },

  saveImage: function() {
    var that = this;
    wx.saveImageToPhotosAlbum({
      filePath: that.data.shareImgSrc,
      success(res) {
        that.hideShareImg()
        wx.showModal({
          title: '存图成功',
          content: '图片成功保存到相册了，分享到朋友圈吧',
          showCancel: false,
          confirmText: '好哒',
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定');
            }
          }
        })
      },
      fail: (err) => {
        that.hideShareImg()
        that.setData({
          saveImgBtnHidden: true,
          openSettingBtnHidden: false
        })


        console.log(err)
        wx.hideLoading()
        that.setData({
          canvasHidden: true,
          share_hidden: true,
        })
      }
    })
  },

  handleSetting: function(e) {
    let that = this;
    // 对用户的设置进行判断，如果没有授权，即使用户返回到保存页面，显示的也是“去授权”按钮；同意授权之后才显示保存按钮
    if (!e.detail.authSetting['scope.writePhotosAlbum']) {
      wx.showModal({
        title: '警告',
        content: '若不打开授权，则无法将图片保存在相册中！',
        showCancel: false
      })
      that.setData({
        saveImgBtnHidden: true,
        openSettingBtnHidden: false
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '您已授权，赶紧将图片保存在相册中吧！',
        showCancel: false
      })
      that.setData({
        saveImgBtnHidden: false,
        openSettingBtnHidden: true
      })
    }
  },

  hideShareImg: function() {
    this.setData({
      share_hidden: true
    })
  }
})