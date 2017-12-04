/**
 * Created by: fei on date: 2017/10/20.
 */
app.controller("sidebarCtrl", function ($scope, $rootScope, dataModelService, tagService) {


    //获取侧边栏信息
    $rootScope.sidebarList = (dataModelService.getModelInfo())[0];

    //修改
    $scope.changeInfo = function (which) {
        if ("png"===which) {
            layer.msg("将来，你可以在这里修改个人头像。");
        } else if ("info"===which) {
            layer.msg("将来，你可以在这里修改个人信息。");
        } else if ("key"===which) {
            layer.msg("将来，你可以在这里修改个人密码。");
        }
    };

    $scope.clickMenuGrade = function(menuGrade) {
        if (menuGrade.childModel.length===0) {
            tagService.openTag(menuGrade);
        }
    };

});