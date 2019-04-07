Page({
    data: {
        active: 0
    },

    onChange(event) {
        wx.showToast({
            icon: 'none',
            title: `切换至第${event.detail}项`
        });
    }
});