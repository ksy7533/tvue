import $ from 'jquery'

'use strict';
var ZumSlide = window.ZumSlide || {};

ZumSlide = (function() {
    function ZumSlide(element, option) {
        /* default option */
        this.default = {
            arrows: true,
            pageNum: false,
            infinite: false
        }
        this.settings = $.extend({}, this.default, option);
        /* basic */
        this.initials = {
            $slide: null,
            $slideChildren: null,
            $currentPage: null
        }
        $.extend(this, this.initials);
        this.$slide = element;
        this.$slideChildren = this.$slide.children();
        this.$currentPage = this.$slideChildren.first();
        this.initRender();
        this.initEvent();
    }
    return ZumSlide;
}());

ZumSlide.prototype.initRender = function() {
    this.$slideChildren.hide();
    this.$currentPage.show();
    if (this.settings.arrows) {
        this.renderArrows();
    }
    if (this.settings.pageNum) {
        this.renderPageNum();
    }
}

ZumSlide.prototype.initEvent = function() {
    this.initEventPrevArrows(this.$prevBtn);
    this.initEventNextArrows(this.$nextBtn);
}

ZumSlide.prototype.initEventPrevArrows = function() {
    var that = this;
    this.$prevBtn.click(function() {
        if (!that.settings.infinite) {
            if (that.$currentPage.prev().length === 0) {
                return;
            }
            that.$currentPage = that.$currentPage.prev();
        } else {
            if (that.$currentPage.prev().length === 0) {
                that.$currentPage = that.$slideChildren.last();
            } else {
                that.$currentPage = that.$currentPage.prev();
            }
        }
        that.$slideChildren.hide();
        if (that.settings.pageNum) {
            that.setCurrentPageNum();
        }
        that.$currentPage.show();
    });
}

ZumSlide.prototype.initEventNextArrows = function() {
    var that = this;
    this.$nextBtn.click(function() {
        if (!that.settings.infinite) {
            if (that.$currentPage.next().length === 0) {
                return;
            }
            that.$currentPage = that.$currentPage.next();
        } else {
            if (that.$currentPage.next().length === 0) {
                that.$currentPage = that.$slideChildren.first();
            } else {
                that.$currentPage = that.$currentPage.next();
            }
        }
        that.$slideChildren.hide();
        if (that.settings.pageNum) {
            that.setCurrentPageNum();
        }
        that.$currentPage.show();
    });
}

ZumSlide.prototype.renderArrows = function() {
    this.$arrows = this.settings.appendArrows;
    this.$arrows.html('<button class="zum_prev_btn" id="zum_prev_btn">이전</button><button class="zum_next_btn" id="zum_next_btn">다음</button>');
    this.$prevBtn = this.$arrows.find('#zum_prev_btn');
    this.$nextBtn = this.$arrows.find('#zum_next_btn');
}

ZumSlide.prototype.renderPageNum = function() {
    this.$pageNum = this.settings.appendPageNum;
    this.$pageNum.html('<span class="zum_current_num" id="zum_current_num""></span>/<span class="zum_total_num" id="zum_total_num"></span>')
    this.$currentNum = this.$pageNum.find('#zum_current_num');
    this.$totalNum = this.$pageNum.find('#zum_total_num');
    this.setCurrentPageNum();
    this.setTotalPageNum();
}

ZumSlide.prototype.setTotalPageNum = function() {
    this.totalPageNum = this.$slideChildren.length;
    this.$totalNum.text(this.totalPageNum);
}

ZumSlide.prototype.setCurrentPageNum = function() {
    this.currentPageNum = (this.$slideChildren.index(this.$currentPage) + 1);
    this.$currentNum.text(this.currentPageNum);
}

$.fn.zumSlide = function(option) {
    new ZumSlide(this, option);
    return;
};

export default ZumSlide;