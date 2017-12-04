/**
 * Created by fei on 2017/10/26.
 */
app.directive("feiPaging", function ($window, $rootScope) {
    return {
        restrict: 'E',
        scope: {
            paging: "=paging",
            pagearray: "=pageArray",
            localpageno: "=localPageno",
            gopage: "&goPage"
        },
        link: function (scope, elem, attr) {
            scope.turnpage = function (mark, num) {
                if ("first"===mark) {
                    scope.localpageno = 1;
                } else if ("pre"===mark) {
                    if (1!=num) {
                        scope.localpageno = num - 1;
                    }
                } else if ("local"===mark) {
                    scope.localpageno = num;
                } else if ("next"===mark) {
                    if (1<=num<scope.pagearray[scope.pagearray.length-1]) {
                        scope.localpageno = num + 1;
                    }
                } else if ("last"===mark) {
                    scope.localpageno = scope.pagearray[scope.pagearray.length-1];
                }
            };
        },
        templateUrl: "app/components/directive/paging/paging.html"
    }
});

