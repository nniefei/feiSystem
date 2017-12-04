/**
 * Created by: fei on date: 2017/8/15.
 */
//header部分controller
app.controller("headerCtrl", function ($scope, $state, tagService) {

    //data init
    $scope.headInit = {
        ifWorking: false
    };

    //flag
    $scope.switchwork = function (key) {
        if ("on"===key && $scope.headInit.ifWorking) {
            layer.open({
                title: "提示",
                content: "确认是否上线",
                btn: ["是的", "不，我点错了"],
                yes: function (index, layero) {
                    $scope.headInit.ifWorking = false;
                    $scope.$apply();
                    layer.close(index);
                    //do something
                },
                btn2: function (index, layero) {

                }
            });
        }
        if ("off"===key && !$scope.headInit.ifWorking) {
            layer.open({
                title: "提示",
                content: "确认是否下线",
                btn: ["是的", "不，我点错了"],
                yes: function (index, layero) {
                    $scope.headInit.ifWorking = true;
                    $scope.$apply();
                    layer.close(index);
                    //do something
                },
                btn2: function (index, layero) {

                }
            });
        }
    };

    //search
    $scope.headsearch = function () {
        layer.msg("什么也没有找到。。。");
    };

    // help
    $scope.forhelp = function () {
        layer.msg("需要帮忙么？");
    };

    // mailbox
    $scope.mailbox = function () {
        layer.msg("这是一个空信箱！");
    };

    //logout
    $scope.logout = function () {
        layer.open({
            title: "提示",
            content: "是否确认退出系统？",
            btn: ["是", "否"],
            yes: function (index, layero) {
                //do something if logout
                layer.close(index);
                FEI.log("您在"+(new Date()).toLocaleString()+"退出系统！");
                $state.go("login");
            },
            btn2: function (index, layero) {
                //do something if not logout
            }
        })
    };

    //打开工作台
    $scope.openWorkTable = function (data) {
        tagService.openTag(data);
    };

});