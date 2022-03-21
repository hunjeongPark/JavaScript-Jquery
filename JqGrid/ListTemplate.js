//Template List Select 예시

/* step1 템플릿 목록 조회 */
function fn_createGridLayout() {
    var grid = $("#jqGrid").jqGrid({
        datatype: "local",
        colModel: [
            {label: "템플릿코드",   	name: "templateCode",         align: "center", width : 150, classes: "pointer"}, => ColModel Classes is Click Pointer to Cell
            {label: "템플릿명",     	name: "templateName",         align: "center", width : 150},
            {label: "메시지 내용",  	name: "templateContent",      align: "center", width : 500},
            {label: "검수상태",     	name: "kepStatus",            align: "center", width : 75,
                formatter : function (cellvalue) {
                    switch (cellvalue) {
                        case 'N':
                            return 'N';
                        case 'I':
                            return 'I';
                        case 'O':
                            return 'O';
                        case 'R':
                            return 'R';
                    }
                }},
            {label: "보안템플릿",   	name: "securityFlag",       align: "center", width : 75 },
            {label: "등록버튼",   	name: "buttons",       		align: "center", width : 300},
            {label: "최근 코멘트",  	name: "templateComments",   align: "center", width : 300},
        ],
        viewrecords : true,
        width       : 1500,
        height      : 800,
        rowNum      : 20,
        ariacellprop: "aria-labelledby",
        pager       : "#jqGridPager",
        multiselect : true,
        multiboxonly: true,
        loadonce    : false,
        function (rowid, index, cm, rawObject) {
			if(rawObject.prop1 == "templateCode") {
				return 'style="color: skyblue"';
			}
		},
	/* Select Colom TemplateCode Row Important View */
	onCellSelect: function(rowid, index, contents, event){
		var cm = $(this).jqGrid('getGridParam', 'colModel');
		if(cm[index].name == "templateCode") {
			//Specific Cell Click is Event : onCellSelect
			sessionStorage.setItem("templateCode", $("#jqGrid").jqGrid("getRowData", rowid).templateCode);
			UIHandler.showStep2();

			//load Template Details Data
			fn_sendProfileKeyName();
			fn_loadTemplate(sessionStorage.getItem("templateCode"));
			history.pushState(null, null, location.href);
		}
	},
	//MultiSelect On And One Click Show Grid Template To Page
	beforeSelectRow : function(rowid, e){
		$("#jqGrid").jqGrid('resetSelection');
		var grid = $("#jqGrid");
		grid.resetSelection();
	},

	/* Select Colom TemplateCode Color 변경 */
	afterInsertRow: function(rowid, rowdata, rowelem) {
		$("#"+rowid).find("td[aria-describedby=jqGrid_templateCode]").css("color", "#ACACE7");
		$("#"+rowid).find("td[aria-describedby=jqGrid_templateCode]").css("font-weight", "bold");
	},
	loadComplete: function(){
	    $('#lui_grid').removeClass('ui-widget-overlay jqgrid-overlay');
	    console.log("loaded grid");
	}
    });
} 
