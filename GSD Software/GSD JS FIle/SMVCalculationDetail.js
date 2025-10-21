$(document).ready(function () {
    

});
/*Internal SMV*/
function GetValues() {
    CalculateCuttingSMV();
    CalculateInspectionSMV();
    CalculateScanPackSMV();
    CalculateTotalSMV();
}
function CalculateCuttingSMV() {
    var SewingSMV = parseFloat($("#SewingSMV").val());
    var matchpoints = parseFloat($("#MatchPoints").val());
    var cuttingSMV = SewingSMV * 0.045 + 0.3 * matchpoints;
    $('#CuttingSMV').val(cuttingSMV.toFixed(4));
    CalculateTotalSMV();
}
function CalculateInspectionSMV() {
    var SewingSMV = parseFloat($("#SewingSMV").val());
    var inspectionSMV = SewingSMV * 0.023 + 1.1;
    $('#InspectionSMV').val(inspectionSMV.toFixed(4));
}
function CalculateScanPackSMV() {
    var SewingSMV = parseFloat($("#SewingSMV").val());
    var spSMV = SewingSMV * 0.034;
    $('#ScanPackSMV').val(spSMV.toFixed(4));
}
function CalculateTotalSMV() {
    var SewingSMV = parseFloat($("#SewingSMV").val());
    var CuttingSMV = parseFloat($("#CuttingSMV").val());
    var InspectionSMV = parseFloat($("#InspectionSMV").val());
    var ScanPackSMV = parseFloat($("#ScanPackSMV").val());
    var totalSMV = SewingSMV + CuttingSMV + InspectionSMV + ScanPackSMV;
    $('#TotalSMV').val(totalSMV.toFixed(4));
}
function CalculateMatchPoint() {
    var MPCategory = $("#MPCategory").val()
    if (MPCategory == "" && MPCategory == undefined && MPCategory == null && MPCategory == "0") {
        toastr.error("Enter Purchase MPCategory");
    } else {
        if (MPCategory == "Yes") {
            $("#MatchPoints").prop('readonly', false);
        } else {
            $("#MatchPoints").prop('readonly', true);
            $("#MatchPoints").val("0");
            CalculateCuttingSMV();
        }
    }
}

/*Customer SMV*/
function C_GetValues() {
    C_CalculateCuttingSMV();
    C_CalculateInspectionSMV();
    C_CalculateScanPackSMV();
    C_CalculateTotalSMV();
}
function C_CalculateCuttingSMV() {
    var SewingSMV = parseFloat($("#C_SewingSMV").val());
    var matchpoints = parseFloat($("#C_MatchPoints").val());
    var cuttingSMV = SewingSMV * 0.045 + 0.3 * matchpoints;
    $('#C_CuttingSMV').val(cuttingSMV.toFixed(4));
    C_CalculateTotalSMV();
}
function C_CalculateInspectionSMV() {
    var SewingSMV = parseFloat($("#C_SewingSMV").val());
    var inspectionSMV = SewingSMV * 0.023 + 1.1;
    $('#C_InspectionSMV').val(inspectionSMV.toFixed(4));
}
function C_CalculateScanPackSMV() {
    var SewingSMV = parseFloat($("#C_SewingSMV").val());
    var spSMV = SewingSMV * 0.034;
    $('#C_ScanPackSMV').val(spSMV.toFixed(4));
}
function C_CalculateTotalSMV() {
    var SewingSMV = parseFloat($("#C_SewingSMV").val());
    var CuttingSMV = parseFloat($("#C_CuttingSMV").val());
    var InspectionSMV = parseFloat($("#C_InspectionSMV").val());
    var ScanPackSMV = parseFloat($("#C_ScanPackSMV").val());
    var totalSMV = SewingSMV + CuttingSMV + InspectionSMV + ScanPackSMV;
    $('#C_TotalSMV').val(totalSMV.toFixed(4));
}
function C_CalculateMatchPoint() {
    var MPCategory = $("#C_MPCategory").val();
    if (MPCategory == "" || MPCategory == undefined || MPCategory == null || MPCategory == "0") {
        toastr.error("Enter Purchase MPCategory");
    } else {
        if (MPCategory == "Yes") {
            $("#C_MatchPoints").prop('readonly', false);
        } else {
            $("#C_MatchPoints").prop('readonly', true);
            $("#C_MatchPoints").val("0");
            C_CalculateCuttingSMV();
        }
    }
}

/*Costing SMV*/
function ctGetValues() {
    ctCalculateCuttingSMV();
    ctCalculateInspectionSMV();
    ctCalculateScanPackSMV();
    ctCalculateTotalSMV();
}
function ctCalculateCuttingSMV() {
    var SewingSMV = parseFloat($("#ct_SewingSMV").val());
    var matchpoints = parseFloat($("#ct_MatchPoints").val());
    var cuttingSMV = SewingSMV * 0.045 + 0.3 * matchpoints;
    $('#ct_CuttingSMV').val(cuttingSMV.toFixed(3));
    ctCalculateTotalSMV();
}
function ctCalculateInspectionSMV() {
    var SewingSMV = parseFloat($("#ct_SewingSMV").val());
    var inspectionSMV = SewingSMV * 0.023 + 1.1;
    $('#ct_InspectionSMV').val(inspectionSMV.toFixed(3));
}
function ctCalculateScanPackSMV() {
    var SewingSMV = parseFloat($("#ct_SewingSMV").val());
    var spSMV = SewingSMV * 0.034;
    $('#ct_ScanPackSMV').val(spSMV.toFixed(3));
}
function ctCalculateTotalSMV() {
    var SewingSMV = parseFloat($("#ct_SewingSMV").val());
    var CuttingSMV = parseFloat($("#ct_CuttingSMV").val());
    var InspectionSMV = parseFloat($("#ct_InspectionSMV").val());
    var ScanPackSMV = parseFloat($("#ct_ScanPackSMV").val());
    var totalSMV = SewingSMV + CuttingSMV + InspectionSMV + ScanPackSMV;
    $('#ct_TotalSMV').val(totalSMV.toFixed(3));
    ctSMVWithFormula();
}
function ctCalculateMatchPoint() {
    var MPCategory = $("#ct_MPCategory").val();
    if (MPCategory == "" || MPCategory == undefined || MPCategory == null || MPCategory == "0") {
        toastr.error("Select Match Point Category");
    } else {
        if (MPCategory == "MatchPoints") {
            $("#ct_MatchPoints").prop('readonly', false);
        } else {
            $("#ct_MatchPoints").prop('readonly', true);
            $("#ct_MatchPoints").val("0");
            ctCalculateCuttingSMV();
        }
    }
}
function ctSMVWithFormula() {
    var SewingSMV = parseFloat($("#ct_SewingSMV").val());
    var CuttingSMV = parseFloat($("#ct_CuttingSMV").val());
    var InspectionSMV = parseFloat($("#ct_InspectionSMV").val());
    var ScanPackSMV = parseFloat($("#ct_ScanPackSMV").val());
    var totalSMV = SewingSMV + CuttingSMV + InspectionSMV + ScanPackSMV;

    var SMVFormula = [
        "GSDSMV = " + SewingSMV, " CUTTING = " + CuttingSMV + " (Matching '" + $("#ct_MatchPoints").val() + "' part) ", " INSPECTION = " + InspectionSMV, " SCANPACK = " + ScanPackSMV, " Total = " + totalSMV.toFixed(3)];
    if ($("#ct_MPCategory").val() === "SolidCut") {
        SMVFormula[1] = " CUTTING = " + CuttingSMV;
    } else {
            SMVFormula[1] = " CUTTING = " + CuttingSMV + " (Matching '" + $("#ct_MatchPoints").val() + "' part) ";
        }
    var totalSMVFormula = SMVFormula.join(',');
    $('#ct_TotalSMVFormula').val(totalSMVFormula);
}

function convertFormToJSON(form) {
    const array = $(form).serializeArray(); // Encodes the set of form elements as an array of names and values.
    const json = {};
    $.each(array, function () {
        json[this.name] = this.value || "";
    });
    return json;
}
function SaveCustomerSMVDetial() {
     if (ValidateCustomerSMVForm() == true) {
    $("#overlay").show();
    var Formdata = convertFormToJSON('#SaveCustomerSMVDetail');
    $.ajax({
        url: '/GSD/SaveCustomerSMVDetail',
        type: 'POST',
        datatype: 'json',
        contenttype: 'application/json; charset=utf-8',
        data: Formdata,
        success: function (data) {
            $("#overlay").hide();
            if (data.AlertMessage == "0") {
                toastr.success("Customer SMV Added Successfully");
                resetCustomersmvForm();
            }
            else {
                toastr.error("Customer SMV Already Exists");
            }
        },
        error: function () {
        }
    });
     }
}
function SaveInternalSMVDetial() {
    if (ValidateInternalSMVForm() == true) {
        $("#overlay").show();
        var Formdata = convertFormToJSON('#SaveInternalSMVDetail');
        $.ajax({
            url: '/GSD/SaveInternalSMVDetail',
            type: 'POST',
            datatype: 'json',
            contenttype: 'application/json; charset=utf-8',
            data: Formdata,
            success: function (data) {
                $("#overlay").hide();
                if (data.AlertMessage == "0") {
                    toastr.success("Internal SMV Added Successfully");
                    resetInternalmvForm();
                }
                else {
                    toastr.error("Internal SMV Already Exists");
                }
            },
            error: function () {
            }
        });
    }
}
function SaveCostingSMVDetial() {
    if (ValidateCostingSMVForm() == true) {
        $("#overlay").show();
        var Formdata = convertFormToJSON('#SaveCostingSMVDetail');
        $.ajax({
            url: '/GSD/SaveCostingSMVDetail',
            type: 'POST',
            datatype: 'json',
            contenttype: 'application/json; charset=utf-8',
            data: Formdata,
            success: function (data) {
                $("#overlay").hide();
                if (data.AlertMessage == "0") {
                    toastr.success("Costing SMV Added Successfully");
                    resetCostingsmvForm();
                }
                else {
                    toastr.error("Costing SMV Already Exists");
                }
            },
            error: function () {
            }
        });
    }
}
function ValidateInternalSMVForm() {
    var SewingSMV = $("#SewingSMV").val();
    var CuttingSMV = $("#CuttingSMV").val();
    var InspectionSMV = $("#InspectionSMV").val();
    var ScanPackSMV = $("#ScanPackSMV").val();
    var TotalSMV = $("#TotalSMV").val();
    var MPCategory = $("#MPCategory").val();
    var MatchPoints = $("#MatchPoints").val();
    if (SewingSMV == "" || SewingSMV == null || SewingSMV == undefined || SewingSMV == "0") {
        toastr.error("Please Enter Sewing SMV");
        return false;
    }
    if (CuttingSMV == "" || CuttingSMV == null || CuttingSMV == undefined || CuttingSMV == "0") {
        toastr.error("Please Enter Cutting SMV");
        return false;
    }
    if (InspectionSMV == "" || InspectionSMV == null || InspectionSMV == undefined || InspectionSMV == "0") {
        toastr.error("Please Enter Inspection SMV");
        return false;
    }
    if (ScanPackSMV == "" || ScanPackSMV == null || ScanPackSMV == undefined || ScanPackSMV == "0") {
        toastr.error("Please Enter ScanPack SMV");
        return false;
    }
    if (TotalSMV == "" || TotalSMV == null || TotalSMV == undefined || TotalSMV == "0") {
        toastr.error("Please Enter Final Total SMV");
        return false;
    }
    if (MPCategory == "" || MPCategory == null || MPCategory == undefined || MPCategory == "0") {
        toastr.error("Please Select MP Category");
        return false;
    }
    if (MatchPoints == "" || MatchPoints == null || MatchPoints == undefined) {
        toastr.error("Please Enter No of Match Points");
        return false;
    }
    return true;
}
function ValidateCustomerSMVForm() {
    var C_SewingSMV = $("#C_SewingSMV").val();
    var C_CuttingSMV = $("#C_CuttingSMV").val();
    var C_InspectionSMV = $("#C_InspectionSMV").val();
    var C_ScanPackSMV = $("#C_ScanPackSMV").val();
    var C_TotalSMV = $("#C_TotalSMV").val();
    var C_MPCategory = $("#C_MPCategory").val();
    var C_MatchPoints = $("#C_MatchPoints").val();

    if (C_SewingSMV == "" || C_SewingSMV == null || C_SewingSMV == undefined || C_SewingSMV == "0") {
        toastr.error("Please Enter Sewing SMV");
        return false;
    }
    if (C_CuttingSMV == "" || C_CuttingSMV == null || C_CuttingSMV == undefined || C_CuttingSMV == "0") {
        toastr.error("Please Enter Cutting SMV");
        return false;
    }
    if (C_InspectionSMV == "" || C_InspectionSMV == null || C_InspectionSMV == undefined || C_InspectionSMV == "0") {
        toastr.error("Please Enter Inspection SMV");
        return false;
    }
    if (C_ScanPackSMV == "" || C_ScanPackSMV == null || C_ScanPackSMV == undefined || C_ScanPackSMV == "0") {
        toastr.error("Please Enter ScanPack SMV");
        return false;
    }
    if (C_TotalSMV == "" || C_TotalSMV == null || C_TotalSMV == undefined || C_TotalSMV == "0") {
        toastr.error("Please Enter Final Total SMV");
        return false;
    }
    if (C_MPCategory == "" || C_MPCategory == null || C_MPCategory == undefined || C_MPCategory == "0") {
        toastr.error("Please Enter MP Category");
        return false;
    }
    if (C_MatchPoints == "" || C_MatchPoints == null || C_MatchPoints == undefined) {
        toastr.error("Please Enter No. of Match Points");
        return false;
    }
    return true;
}
function ValidateCostingSMVForm() {
    var ct_TotalSMVFormula = $("#ct_TotalSMVFormula").val();
    var ct_ThreadConsumption = $("#ct_ThreadConsumption").val();
    var ct_ReferenceDocument = $("#ct_ReferenceDocument").val();
    var ct_ReleaseToCosting = $("#ct_ReleaseToCosting").val();

    var ct_SewingSMV = $("#ct_SewingSMV").val();
    var ct_CuttingSMV = $("#ct_CuttingSMV").val();
    var ct_InspectionSMV = $("#ct_InspectionSMV").val();
    var ct_ScanPackSMV = $("#ct_ScanPackSMV").val();
    var ct_TotalSMV = $("#ct_TotalSMV").val();
    var ct_MPCategory = $("#ct_MPCategory").val();
    var C_MatchPoints = $("#C_MatchPoints").val();
    if (ct_TotalSMVFormula == "" || ct_TotalSMVFormula == null || ct_TotalSMVFormula == undefined || ct_TotalSMVFormula == "0") {
        toastr.error("Please Enter Total SMV Formula");
        return false;
    }
    if (ct_ThreadConsumption == "" || ct_ThreadConsumption == null || ct_ThreadConsumption == undefined || ct_ThreadConsumption == "0") {
        toastr.error("Please Enter Thread Consumption");
        return false;
    }
    if (ct_ReferenceDocument == "" || ct_ReferenceDocument == null || ct_ReferenceDocument == undefined || ct_ReferenceDocument == "0") {
        toastr.error("Please Enter Reference Document");
        return false;
    }
    if (ct_ReleaseToCosting == "" || ct_ReleaseToCosting == null || ct_ReleaseToCosting == undefined || ct_ReleaseToCosting == "0") {
        toastr.error("Please Enter Release To Costing");
        return false;
    }
    if (ct_SewingSMV == "" || ct_SewingSMV == null || ct_SewingSMV == undefined || ct_SewingSMV == "0") {
        toastr.error("Please Enter Sewing SMV");
        return false;
    }
    if (ct_CuttingSMV == "" || ct_CuttingSMV == null || ct_CuttingSMV == undefined || ct_CuttingSMV == "0") {
        toastr.error("Please Enter Cutting SMV");
        return false;
    }
    if (ct_InspectionSMV == "" || ct_InspectionSMV == null || ct_InspectionSMV == undefined || ct_InspectionSMV == "0") {
        toastr.error("Please Enter Inspection SMV");
        return false;
    }
    if (ct_ScanPackSMV == "" || ct_ScanPackSMV == null || ct_ScanPackSMV == undefined || ct_ScanPackSMV == "0") {
        toastr.error("Please Enter ScanPack SMV");
        return false;
    }
    if (ct_TotalSMV == "" || ct_TotalSMV == null || ct_TotalSMV == undefined || ct_TotalSMV == "0") {
        toastr.error("Please Enter Final Total SMV");
        return false;
    }
    if (ct_MPCategory == "" || ct_MPCategory == null || ct_MPCategory == undefined || ct_MPCategory == "0") {
        toastr.error("Please Enter MP Category");
        return false;
    }
    if (C_MatchPoints == "" || C_MatchPoints == null || C_MatchPoints == undefined) {
        toastr.error("Please Enter No. of Match Points");
        return false;
    }
    return true;
}
function resetCustomersmvForm() {
    $("#C_SewingSMV").val('');
    $("#C_CuttingSMV").val('');
    $("#C_InspectionSMV").val('');
    $("#C_ScanPackSMV").val('');
    $("#C_TotalSMV").val('');
    $("#C_MPCategory").val('0');
    $("#C_MatchPoints").val('');
}
function resetInternalmvForm() {
    $("#SewingSMV").val('');
    $("#CuttingSMV").val('');
    $("#InspectionSMV").val('');
    $("#ScanPackSMV").val('');
    $("#TotalSMV").val('');
    $("#MPCategory").val('0');
    $("#MatchPoints").val('');
}
function resetCostingsmvForm() {
    $("#ct_TotalSMVFormula").val('');
    $("#ct_ThreadConsumption").val('');
    $("#ct_ReferenceDocument").val('');
    $("#ct_ReleaseToCosting").val('');

    $("#ct_SewingSMV").val('');
    $("#ct_CuttingSMV").val('');
    $("#ct_InspectionSMV").val('');
    $("#ct_ScanPackSMV").val('');
    $("#ct_TotalSMV").val('');
    $("#ct_MPCategory").val('0');
    $("#C_MatchPoints").val('');
}