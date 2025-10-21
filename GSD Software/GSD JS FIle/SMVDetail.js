$(document).ready(function () {

    $("#CustomerID").kendoDropDownList({
        filter: "contains",
        dataTextField: "Name",
        dataValueField: "ID",
        optionLabel: {
            Name: "--Select Customer--",
            ID: "0"
        },
        dataSource: {
            type: "json",
            transport: {
                read: {
                    url: "/GSD/RetrieveCustomers",
                }
            }
        }
    });
    PopulateSMVDetailInfoKendo();
});

function RetriveWorkingNo() {
    var WorkingNo = $("#WorkingNo").val();
    if (WorkingNo != null && WorkingNo != "" && WorkingNo != undefined) {
        $.ajax({
            url: '/GSD/RetriveWorkingNo?WorkingNo=' + WorkingNo,
            type: 'GET',
            datatype: 'json',
            contenttype: 'application/json; charset=utf-8',
            success: function (data) {
                if (data.AlertMessage == '1') {
                    $("#ArticleNo").val('');
                    $("#ProductName").val('');
                    toastr.error("No Working No exist.Please Enter Manual Working No.");
                }
                else {
                    $("#ArticleNo").val(data.ArticleNo);
                    $("#ProductName").val(data.ProductName);
                }
            },
            error: function () {
            }
        });
    }
    else {
        toastr.error("Please Enter Working No");
    }
}
function SaveSMVDetail() {
    if (ValidateSMVForm() == true) {
        $("#overlay").show();
        var Formdata = convertFormToJSON('#SaveSMVMaster');
        $.ajax({
            url: '/GSD/SaveSMVDetail',
            type: 'POST',
            datatype: 'json',
            contenttype: 'application/json; charset=utf-8',
            data: Formdata,
            success: function (data) {
                $("#overlay").hide();
                if (data.AlertMessage == "0") {
                    toastr.success("Base Added Successfully");
                    $('#SMVDetailInfoKendo').data('kendoGrid').dataSource.read();
                    $('#SMVDetailInfoKendo').data('kendoGrid').refresh();
                    resetForm();
                }
                else {
                    toastr.error("Base Already Exists");
                }
            },
            error: function () {
            }
        });
    }
}
function ValidateSMVForm() {
    var CompanyName = $("#CompanyName").val();
    var CustomerName = $("#CustomerID").val();
    var Area = $("#Area").val();
    var Stage = $("#Stage").val();
    var Season = $("#Season").val();
    var WorkingNo = $("#WorkingNo").val();
    var ArticleNo = $("#ArticleNo").val();
    var ProductName = $("#ProductName").val();
    var Category = $("#Category").val();
    var CarryOverSeason = $("#CarryOverSeason").val();
    var SMVFarm = $("#SMVFarm").val();
    var ThreadConsumption = $("#ThreadConsumption").val();
    var ReferenceNumber = $("#ReferenceNumber").val();
    var ReleaseToCosting = $("#ReleaseToCosting").val();
    var CompexityLevel = $("#ComplexityLevel").val();
    var OperationsofBag = $("#OperationsofBag").val();
    var ManualOperations = $("#ManualOperations").val();
    var MachineOperations = $("#MachineOperations").val();
    var Manpower = $("#Manpower").val();
    var HourlyTarget = $("#HourlyTarget").val();
    var DevelopmentInstructions = $("#DevelopmentInstructions").val();
    var CostingInstructions = $("#CostingInstructions").val();
    var ProductionInstructions = $("#ProductionInstructions").val();

    if (CompanyName == "" || CompanyName == null || CompanyName == undefined || CompanyName == "0") {
        toastr.error("Please Select Company Name");
        return false;
    }
    if (CustomerName == "" || CustomerName == null || CustomerName == undefined || CustomerName == "0") {
        toastr.error("Please Select Customer Name");
        return false;
    }
    if (Area == "" || Area == null || Area == undefined || Area == "0") {
        toastr.error("Please Select Area");
        return false;
    }
    if (Stage == "" || Stage == null || Stage == undefined || Stage == "0") {
        toastr.error("Please Select Stage");
        return false;
    }
    if (Season == "" || Season == null || Season == undefined || Season == "0") {
        toastr.error("Please Select Season");
        return false;
    }
    if (WorkingNo == "" || WorkingNo == null || WorkingNo == undefined || WorkingNo == "0") {
        toastr.error("Please Enter Working No");
        return false;
    }
    if (ArticleNo == "" || ArticleNo == null || ArticleNo == undefined || ArticleNo == "0") {
        toastr.error("Please Enter Article No");
        return false;
    }
    if (ProductName == "" || ProductName == null || ProductName == undefined || ProductName == "0") {
        toastr.error("Please Enter Product Name");
        return false;
    }
    if (Category == "" || Category == null || Category == undefined || Category == "0") {
        toastr.error("Please Select Category");
        return false;
    }
    if (CarryOverSeason == "" || CarryOverSeason == null || CarryOverSeason == undefined || CarryOverSeason == "0") {
        toastr.error("Please Select Carry Over Season");
        return false;
    }
    if (ManualOperations == "" || ManualOperations == null || ManualOperations == undefined || ManualOperations == "0") {
        toastr.error("Please Enter No of Manual Operations");
        return false;
    }
    if (MachineOperations == "" || MachineOperations == null || MachineOperations == undefined || MachineOperations == "0") {
        toastr.error("Please Enter No of Machine Operations");
        return false;
    }
    if (OperationsofBag == "" || OperationsofBag == null || OperationsofBag == undefined || OperationsofBag == "0") {
        toastr.error("Please Enter No of Operations of Bag");
        return false;
    }
    if (CompexityLevel == "" || CompexityLevel == null || CompexityLevel == undefined || CompexityLevel == "0") {
        toastr.error("Please Select Compexity Level");
        return false;
    }
    if (Manpower == "" || Manpower == null || Manpower == undefined || Manpower == "0") {
        toastr.error("Please Enter Manpower");
        return false;
    }
    if (HourlyTarget == "" || HourlyTarget == null || HourlyTarget == undefined || HourlyTarget == "0") {
        toastr.error("Please Enter Hourly Target");
        return false;
    }
    if (DevelopmentInstructions == "" || DevelopmentInstructions == null || DevelopmentInstructions == undefined || DevelopmentInstructions == "0") {
        toastr.error("Please Enter Development Instructions");
        return false;
    }
    if (CostingInstructions == "" || CostingInstructions == null || CostingInstructions == undefined || CostingInstructions == "0") {
        toastr.error("Please Enter Costing Instructions");
        return false;
    }
    if (ProductionInstructions == "" || ProductionInstructions == null || ProductionInstructions == undefined || ProductionInstructions == "0") {
        toastr.error("Please Enter Production Instructions");
        return false;
    }
    return true;
}
function PopulateSMVDetailInfoKendo() {
    $("#SMVDetailInfoKendo").kendoGrid({
        dataSource: {
            transport: {
                read: "/GSD/RetrieveSMVDetail",
                type: "json",
            },
            pageSize: 20,
        },
        height: 500,
        sortable: {
            mode: "single",
            allowUnsort: false
        },
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [
            {
                field: "SMVID",
                title: "SMVID",
                width: 40,
                hidden: true
            },
            {
                field: "CompanyName",
                title: "Company Name",
                width: 100,
            },
            {
                field: "Season",
                title: "Season",
                width: 70,
            },
            {
                field: "ArticleNo",
                title: "Article No.",
                width: 70,

            },
            {
                field: "ProductName",
                title: "Product Name",
                width: 70,

            },
            {
                field: "CarryOverSeason",
                title: "Carry Over Season",
                width: 70,
            },
            {
                field: "ManualOperations",
                title: "Manual Operations",
                width: 70,
            },
            {
                field: "OperationsofBag",
                title: "Operations of Bag",
                width: 70,
            },
            {
                field: "MachineOperations",
                title: "Machine Operations",
                width: 70,
            },
            {
                field: "ComplexityLevel",
                title: "Complexity Level",
                width: 70,
            },
            {
                field: "Manpower",
                title: "Manpower", 
                width: 70,
            },
            {
                field: "HourlyTarget",
                title: "Hourly Target",
                width: 70,
            },
            {
                field: "",
                title: "Action",
                width: 60,
                template: "<center><a type='button' class='btn-warning' onclick='getSMVMasterID(#=SMVID#)'>Add SMV Calculations</a></center>"
            },
        ]
    })
}
function getSMVMasterID(SMVID) {
    window.location.href = "/GSD/SMVDetail?SMVID=" + SMVID;
}
function convertFormToJSON(form) {
    const array = $(form).serializeArray(); // Encodes the set of form elements as an array of names and values.
    const json = {};
    $.each(array, function () {
        json[this.name] = this.value || "";
    });
    return json;
}
function onSearch() {
    var q = $("#smvinfosearch").val();
    var grid = $("#SMVDetailInfoKendo").data("kendoGrid");
    grid.dataSource.query({
        page: 1,
        pageSize: 20,
        filter: {
            logic: "or",
            filters: [
                { field: "CompanyName", operator: "contains", value: q },
                { field: "ArticleNo", operator: "contains", value: q },
                { field: "ProductName", operator: "contains", value: q },
                { field: "CarryOverSeason", operator: "contains", value: q },
            ]
        }
    });
}


