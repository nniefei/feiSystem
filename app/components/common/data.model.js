/**
 * Created by: fei on date: 2017/8/16.
 */

app.service("dataModelService", function () {

    //模块配置列表
    function getModelInfo() {
        return [
            {
                key:   "homework",     //模块标识，标签页的唯一标识
                name:  "作业",         //模块名称
                icon:  "fa-home",      //模块图标
                parent:"root",         //模块父级（“addModel”时，打开标签页为新；“freshModel”时为区分那几个模块共同一tag页刷新）
                group: "worktable",    //模块分组
                level: "0",            //模块层级
                model: "addModel",     //模块的打开方式（addModel：添加新标签页；freshModel：在指定位置刷新）
                url:                   //模块模版地址
                        "app/modules/worktable/homework/homework.html",
                data:  {},             //模块打开时传入的数据
                childModel: [          //模块里包含的子模块
                    {
                        key:   "mytask",
                        name:  "我的任务",
                        icon:  "fa-tasks",
                        parent:"homework",
                        group: "homework",
                        level: "1",
                        model: "addModel",
                        url:   "",
                        data:  {},
                        childModel: [
                            {
                                key:   "todo",
                                name:  "待处理任务",
                                icon:  "fa-folder",
                                parent:"mytask",
                                group: "homework",
                                level: "2",
                                model: "addModel",
                                url:   "",
                                data:  {},
                                childModel: [
                                    {
                                        key:   "new",
                                        name:  "新任务",
                                        icon:  "fa-leaf",
                                        parent:"todo",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "progress",
                                        name:  "处理中",
                                        icon:  "fa-leaf",
                                        parent:"todo",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "back",
                                        name:  "被退回",
                                        icon:  "fa-leaf",
                                        parent:"todo",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    }
                                ]
                            },
                            {
                                key:   "done",
                                name:  "已处理任务",
                                icon:  "fa-folder",
                                parent:"mytask",
                                group: "homework",
                                level: "2",
                                model: "addModel",
                                url:   "",
                                data:  {},
                                childModel: [
                                    {
                                        key:   "bedone",
                                        name:  "已完成",
                                        icon:  "fa-leaf",
                                        parent:"done",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "beback",
                                        name:  "已退回",
                                        icon:  "fa-leaf",
                                        parent:"done",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "beapply",
                                        name:  "任务申请",
                                        icon:  "fa-leaf",
                                        parent:"done",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    }
                                ]
                            },
                            {
                                key:   "trace",
                                name:  "我的追踪",
                                icon:  "fa-folder",
                                parent:"mytask",
                                group: "homework",
                                level: "2",
                                model: "addModel",
                                url:   "",
                                data:  {},
                                childModel: [
                                    {
                                        key:   "attention",
                                        name:  "我的关注",
                                        icon:  "fa-leaf",
                                        parent:"trace",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "take",
                                        name:  "我的参与",
                                        icon:  "fa-leaf",
                                        parent:"trace",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "initiate",
                                        name:  "我的发起",
                                        icon:  "fa-leaf",
                                        parent:"trace",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        key:   "myquery",
                        name:  "我的查询",
                        icon:  "fa-search",
                        parent:"homework",
                        group: "homework",
                        level: "1",
                        model: "addModel",
                        url:   "",
                        data:  {},
                        childModel: [
                            {
                                key:   "taskquery",
                                name:  "任务查询",
                                icon:  "fa-leaf",
                                parent:"myquery",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            },
                            {
                                key:   "casequery",
                                name:  "案件查询",
                                icon:  "fa-leaf",
                                parent:"myquery",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            }
                        ]
                    },
                    {
                        key:   "mytip",
                        name:  "我的提醒",
                        icon:  "fa-bell",
                        parent:"homework",
                        group: "homework",
                        level: "1",
                        model: "addModel",
                        url:   "",
                        data:  {},
                        childModel: [
                            {
                                key:   "neartimeout",
                                name:  "快超时任务",
                                icon:  "fa-leaf",
                                parent:"mytip",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            },
                            {
                                key:   "alreadytimeout",
                                name:  "已超时任务",
                                icon:  "fa-leaf",
                                parent:"mytip",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            }
                        ]
                    },
                    {
                        key:   "mymail",
                        name:  "我的站内信息",
                        icon:  "fa-envelope",
                        parent:"homework",
                        group: "homework",
                        level: "1",
                        model: "addModel",
                        url:   "",
                        data:  {},
                        childModel: [
                            {
                                key:   "mailbox",
                                name:  "收件箱",
                                icon:  "fa-leaf",
                                parent:"mymail",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            },
                            {
                                key:   "send",
                                name:  "发信息",
                                icon:  "fa-leaf",
                                parent:"mymail",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            },
                            {
                                key:   "write",
                                name:  "写信息",
                                icon:  "fa-leaf",
                                parent:"mymail",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            }
                        ]
                    }
                ]
            },
            {
                key:   "monitoring",
                name:  "监控",
                icon:  "fa-eye",
                parent:"root",
                group: "worktable",
                level: "0",
                model: "addModel",
                url:   "app/modules/worktable/monitoring/monitoring.html",
                data:  {},
                childModel: []
            },
            {
                key:   "business",
                name:  "业务",
                icon:  "fa-list-alt",
                parent:"root",
                group: "worktable",
                level: "0",
                model: "addModel",
                url:   "app/modules/worktable/business/business.html",
                data:  {},
                childModel: []
            },
            {
                key:   "system",
                name:  "系统",
                icon:  "fa-cog",
                parent:"root",
                group: "worktable",
                level: "0",
                model: "addModel",
                url:   "app/modules/worktable/system/system.html",
                data:  {},
                childModel: []
            }
        ]
    }

    // 初始化业务页面基本信息
    function getBusinessDate() {
        return[
            {
                name: "分组一",
                data:[
                    {
                        id:"manualdispatchformal",
                        url:"assets/image/png/manualdispatchformal.png",
                        title:"人工调度",
                        data:""
                    },
                    {
                        id:"disaster",
                        url:"assets/image/png/disaster.png",
                        title:"大灾管理",
                        data:""
                    },
                    {
                        id:"thirdparty",
                        url:"assets/image/png/thirdparty.png",
                        title:"第三方管理",
                        data:""
                    },
                    {
                        id:"itemprice",
                        url:"assets/image/png/itemprice.png",
                        title:"物品价格库",
                        data:""
                    },
                    {
                        id:"criticalCaseManagement",
                        url:"assets/image/png/criticalCaseManagement.png",
                        title:"大案管理",
                        data:""
                    },
                    {
                        id:"feequery",
                        url:"assets/image/png/feequery.png",
                        title:"理赔费用查询",
                        data:""
                    },
                    {
                        id:"messagemanage",
                        url:"assets/image/png/messagemanage.png",
                        title:"短信管理",
                        data:""
                    },
                    {
                        id:"casetransfermanage",
                        url:"assets/image/png/casetransfermanage.png",
                        title:"案卷移交管理",
                        data:""
                    }
                ]
            },
            {
                name: "分组二",
                data:[
                    {
                        id:"remotedocument",
                        url:"assets/image/png/remotedocument.png",
                        title:"异地收单移交统计",
                        data:""
                    },
                    {
                        id:"printmanage",
                        url:"assets/image/png/printmanage.png",
                        title:"打印管理",
                        data:""
                    },
                    {
                        id:"printlog",
                        url:"assets/image/png/printlog.png",
                        title:"打印日志",
                        data:""
                    },
                    {
                        id:"thirdcontract",
                        url:"assets/image/png/thirdcontract.png",
                        title:"第三方合同&协议管理",
                        data:""
                    },
                    {
                        id:"subrogation",
                        url:"assets/image/png/subrogation.png",
                        title:"代位追偿",
                        data:""
                    },
                    {
                        id:"feesettlement",
                        url:"assets/image/png/feesettlement.png",
                        title:"公估费决算",
                        data:""
                    },
                    {
                        id:"customerInformation",
                        url:"assets/image/png/customerInformation.png",
                        title:"客户信息",
                        data:""
                    },
                    {
                        id:"commonCompensation",
                        url:"assets/image/png/commonCompensation.png",
                        title:"通赔管理",
                        data:""
                    }
                ]
            },
            {
                name: "分组三",
                data:[
                    {
                        id:"outstanding",
                        url:"assets/image/png/outstanding.png",
                        title:"未决管理",
                        data:""
                    },
                    {
                        id:"financialQuery",
                        url:"assets/image/png/financialQuery.png",
                        title:"财务实时查询",
                        data:""
                    },
                    {
                        id:"privilegeOrgDispatch",
                        url:"assets/image/png/privilegeOrgDispatch.png",
                        title:"分单设置",
                        data:""
                    },
                    {
                        id:"vacationEmployeeAdd",
                        url:"assets/image/png/vacationEmployeeAdd.png",
                        title:"新增员工休假信息",
                        data:""
                    },
                    {
                        id:"vacationEmployeeConfig",
                        url:"assets/image/png/vacationEmployeeConfig.png",
                        title:"员工休假信息管理",
                        data:""
                    },
                    {
                        id:"workScheduleEmployeeConfig",
                        url:"assets/image/png/workScheduleEmployeeConfig.png",
                        title:"排班基本信息维护",
                        data:""
                    },
                    {
                        id:"workScheduleEmployee",
                        url:"assets/image/png/workScheduleEmployee.png",
                        title:"员工排班信息管理",
                        data:""
                    },
                    {
                        id:"salvagequery",
                        url:"assets/image/png/salvagequery.png",
                        title:"损余查询",
                        data:""
                    }
                ]
            },
            {
                name: "分组四",
                data:[
                    {
                        id:"outstandingfundalert",
                        url:"assets/image/png/outstandingfundalert.png",
                        title:"未决预警触发分析",
                        data:""
                    },
                    {
                        id:"exporttaskquery",
                        url:"assets/image/png/exporttaskquery.png",
                        title:"导出任务查询",
                        data:""
                    },
                    {
                        id:"redispatchquery",
                        url:"assets/image/png/redispatchquery.png",
                        title:"再调度平台",
                        data:""
                    },
                    {
                        id:"compensationsettlement",
                        url:"assets/image/png/compensationsettlement.png",
                        title:"代位赔偿结算",
                        data:""
                    },
                    {
                        id:"statisticcc1",
                        url:"assets/image/png/statisticcc.png",
                        title:"通赔统计",
                        data:""
                    },
                    {
                        id:"statisticcc2",
                        url:"assets/image/png/statisticcc.png",
                        title:"交钥匙服务",
                        data:""
                    },
                    {
                        id:"statisticcc3",
                        url:"assets/image/png/statisticcc.png",
                        title:"代理店维护",
                        data:""
                    },
                    {
                        id:"statisticcc4",
                        url:"assets/image/png/statisticcc.png",
                        title:"历史报价查询",
                        data:""
                    }
                ]
            },
            {
                name: "分组五",
                data:[
                    {
                        id:"statisticcc5",
                        url:"assets/image/png/statisticcc.png",
                        title:"理赔助手下载",
                        data:""
                    },
                    {
                        id:"statisticcc6",
                        url:"assets/image/png/statisticcc.png",
                        title:"反欺诈查询",
                        data:""
                    },
                    {
                        id:"statisticcc7",
                        url:"assets/image/png/statisticcc.png",
                        title:"诉讼管理",
                        data:""
                    },
                    {
                        id:"exporttaskquery1",
                        url:"assets/image/png/exporttaskquery.png",
                        title:"案件查询",
                        data:""
                    },
                    {
                        id:"exporttaskquery2",
                        url:"assets/image/png/exporttaskquery.png",
                        title:"跟踪任务",
                        data:""
                    },
                    {
                        id:"disaster",
                        url:"assets/image/png/disaster.png",
                        title:"交管车辆信息维护",
                        data:""
                    },
                    {
                        id:"exporttaskquery3",
                        url:"assets/image/png/exporttaskquery.png",
                        title:"任务查询",
                        data:""
                    },
                    {
                        id:"feesettlement",
                        url:"assets/image/png/feesettlement.png",
                        title:"增值税信息",
                        data:""
                    }
                ]
            },
            {
                name: "分组六",
                data:[
                    {
                        id:"manualdispatchformal",
                        url:"assets/image/png/manualdispatchformal.png",
                        title:"通用调查模块",
                        data:""
                    },
                    {
                        id:"casetransfermanage1",
                        url:"assets/image/png/casetransfermanage.png",
                        title:"标准规则管理",
                        data:""
                    },
                    {
                        id:"casetransfermanage2",
                        url:"assets/image/png/casetransfermanage.png",
                        title:"防渗漏评分管理",
                        data:""
                    },
                    {
                        id:"casetransfermanage3",
                        url:"assets/image/png/casetransfermanage.png",
                        title:"防渗漏规则管理",
                        data:""
                    },
                    {
                        id:"casetransfermanage4",
                        url:"assets/image/png/casetransfermanage.png",
                        title:"流程",
                        data:""
                    }
                ]
            }
        ]
    }

    return {
        getModelInfo: getModelInfo,
        getBusinessDate:getBusinessDate
    }
});