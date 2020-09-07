<template>
<div id="connectUsImg" class="btn float-right" v-show="showIcon" @click="backTop()">
    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-up-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path fill-rule="evenodd" d="M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z" />
        <path fill-rule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z" />
    </svg>
</div>
</template>

<script>
export default {
    name: "connectUsImg",
    data() {
        return {
            showIcon: false //隐藏置顶图标
        };
    },
    mounted() {
        window.addEventListener('scroll', this.scrollBackTop); //监听滚动条
    },
    methods: {
        // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop() {
            const that = this
            let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 5);
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
                if (that.scrollTop === 0) {
                    clearInterval(timer);
                }
            }, 16)
        },

        // 为了计算距离顶部的高度，当高度大于XX显示回顶部图标，小于XX则隐藏
        scrollBackTop() {
            const that = this;
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            that.scrollTop = scrollTop;
            if (that.scrollTop > 10) {
                that.showIcon = true;
            } else {
                that.showIcon = false;
            }
        }
    },
    //移除滚动条监听
    destroyed() {
        window.removeEventListener('scroll', this.scrollBackTop)
    }
};
</script>
