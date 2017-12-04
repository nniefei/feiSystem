/*********************************************************************************/
/**                                                                             **/
/**                         author:   fei                                       **/
/**                         date:     2017-10-27                                **/
/**                         describe：基于Bootstrap的一个分页器指令                **/
/**                         version:  1.0.0                                     **/
/**                                                                             **/
/*********************************************************************************/

1、引入Boostrap相关包
2、引入指令
3、在页面引用指令
        <fei-paging
            paging="pager"
            page-array="pages"
            local-pageno="pager.pageNum"
            go-page="searchRead();">
        </fei-paging>
4、指令参数说明
        paging参数：   分页参数对象，包含pageNum和pageSize两个属性
        page-array:   分页页码数组（[1,2,3,4,5...]）
        local-pageno: 当前页码
        go-page:      查询函数