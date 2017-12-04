/**
 * Created by: fei on date: 2017/8/16.
 */
//工作台主controller
app.controller("worktableCtrl", function ($q, $scope, $rootScope, tagService, dataModelService) {

    //监听ng-repeat渲染完成 刷新tag页
    $scope.$on("ngrepeat-flag", function (e, data) {
        setTimeout(function refresh(data) {
            $('.top-tags li a:last').tab('show');
        },0);
    });
    //默认展示侧边栏
    $rootScope.ifShowSidebar = true;
    //加载工作台列表
    $rootScope.workTableList = dataModelService.getModelInfo();

    //标签页列表
    $rootScope.tagList = {
        tTop: [$rootScope.workTableList[0]]
    };


    //点击图片
    $scope.personPng = function () {
        layer.msg("将来，你可以吧自己的图片放在这里。。。");
    };
    //点击信息维护
    $scope.personInfo = function () {
        layer.msg("将来，你可以点击这里维护自己的信息。。。");
    };
    //点击修改密码
    $scope.personPwd = function () {
        layer.msg("将来，你可以点击这里维护自己的密码。。。");
    };


});