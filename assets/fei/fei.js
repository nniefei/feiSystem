/**
 * COMMON UTIL
 * author: 东尧
 * version: 1.0.1
 * date: 2017-10-23
 */ 

(function(w, d){

		"use strict";

		var fei = {

            /**
			 * 自定义打印方法，接管console.log
             */
			log: function () {
					var args = Array.prototype.slice.call(arguments);
					args.unshift("FEI INFO：");
					console.log.apply(console, args);
				},

            /**
			 * 加载动画
			 * 代码截选自微信
             */
			loading: {
				show: function (tip) {
					var loading = d.createElement("div");
					loading.className = "weui_load";
					loading.innerHTML = '<div class="weui_toast_transparent"></div>' +//this html from weui start
										'<div class="weui_toast">' +
											'<div class="weui_loading">' +
												'<div class="weui_loading_leaf weui_loading_leaf_0"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_1"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_2"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_3"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_4"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_5"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_6"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_7"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_8"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_9"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_10"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_11"></div>' +
											'</div>' +
											'<p style="margin:70% auto 0;">'+tip+'</p>' +
										'</div>'; //this html from weui end
					d.body.appendChild(loading);
				},
				hide: function () {
                    d.body.removeChild(d.querySelector(".weui_load"));
				}
				
			},

            /**
			 * 数组去重(元素非对象)
			 * var array = [1,2,3,4,5,6,6,5,4,3,2,1];
             * @param array
             * @returns {[null]}
             */
			distinctArray: function (array) {
								var result = [array[0]]; //结果数组
								//从第二项开始遍历
								for (var i = 1; i < array.length; i++) {
									//如果当前数组的第i项在当前数组中第一次出现的位置不是i，
									//那么表示第i项是重复的，忽略掉。否则存入结果数组
									if (array.indexOf(array[i]) === i) {
										result.push(array[i]);
									}
								}
								return result;
							},

            /**
			 * 数组JSON去重(元素非对象)
			 * var json = [
							 {key:"key1",value:"value1"},
							 {key:"key2",value:"value2"},
							 {key:"key3",value:"value3"},
							 {key:"key4",value:"value4"},
							 {key:"key1",value:"value1"}
						 ]
             * @param array
             * @returns {[null]}
             */
			distinctArrayJSON: function (array) {
									var result = [array[0]]; //结果数组
									for (var i = 0; i < array.length; i++) {
										var ifPush = true;
										for (var j = 0; j < result.length; j++) {
											if (array[i].key.toString() === result[j].key.toString() && array[i].value.toString() === result[j].value.toString()) {
												ifPush = false;
											}
										}
										if (ifPush) {
											result.push(array[i]);
											ifPush = true;
										}
									}
									return result;
								},


            /**
			 * 判断数组里是否包含指定元素(元素非对象)
             * @param array
             * @param param
             * @returns {boolean}
             */
            ifInArray: function (array, param) {
								for (var i=0; i<array.length; i++) {
									if (param.toString() === array[i].toString()) {
										return true;
									}
								}
								return false;
            			},


            /**
			 * 判断字符串里是否包含某字符
             * @param param
             * @param str
             */
			ifContainStr: function (param, str) {
            	return -1 !== (str.toString()).indexOf(param.toString());
			}
		};

		w.FEI = fei;
})(window, document);