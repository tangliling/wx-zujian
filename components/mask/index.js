Component({
  properties: {
    mask: {
      type: Boolean,
      value: true
    },
    background:{
      type:String,
      value:''
    }
  },

  data: {
    SystemInfo:''
  },
  ready() {
    let that = this;
    console.log(that.data.mask)
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          SystemInfo: res
        })
      }
    })
  },
  methods: {
    onClose(){
      this.triggerEvent('close');
    }
  }
})
