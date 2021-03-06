﻿var table = $('#example').dataTable({
    //columnDefs: [{
    //    targets: [0],
    //    visible: false,
    //    searchable: false
    //}],
    language: {
        sProcessing: "處理中...",
        sLengthMenu: "&nbsp;顯示 _MENU_ 項結果",
        sZeroRecords: "沒有符合的結果",
        sInfo: "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
        sInfoEmpty: "顯示第 0 至 0 項結果，共 0 項",
        sInfoFiltered: "(從 _MAX_ 項結果過濾)",
        sInfoPostFix: "",
        sSearch: "快速搜尋&nbsp;",
        sUrl: "",
        oPaginate: {
            "sFirst": "首頁",
            "sPrevious": "上頁",
            "sNext": "下頁",
            "sLast": "尾頁"
        }
    },
    //stateSave: true,
    lengthMenu: [[5, 10, 20, 50, -1], [5, 10, 20, 50, "全部"]],
    iDisplayLength: 10,
    dom: 'CTlfrtip',
    colVis: {
        exclude: [0, 1],
        sAlign: "right",
        buttonText: "<i class='fa fa-columns fa-fw fa-lg'></i>",
        showAll: "顯示全部",
        showNone: "隱藏全部"
    },
    tableTools: {
        sRowSelect: 'single',
        sSelectedClass: 'active',
        sSwfPath: "/Content/DataTables/swf/copy_csv_xls_pdf.swf",
        aButtons: [
            {
                sExtends: "print",
                sButtonText: "<i class='fa fa-print fa-fw fa-lg'></i>",
                sToolTip: "列印"
            },
            {
                sExtends: "collection",
                sButtonText: "<i class='fa fa-cloud-download fa-fw fa-lg'></i>",
                sToolTip: "匯出",
                aButtons: ["csv", "xls", "pdf"]
            }
        ]

    }
});