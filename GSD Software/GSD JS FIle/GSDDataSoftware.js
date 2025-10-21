$(document).ready(function () {
});
function NewFile() {
    $('#modal-newform').modal({ backdrop: 'static', keyboard: false, show: true });
}
function ClearPartialView() {
    $('#modal-clearview').modal({ backdrop: 'static', keyboard: false, show: true });
}
function ClearPartialViewed() {
    $("#LoadPartialViews").html("");
    $('#modal-clearview').modal("hide");
}
function LoadPartailView() {
    var NewFileType = $("#NewFileType").val();
    if (NewFileType == "0") {
        toastr.error("Please Select Type");
    }
    else if (NewFileType == "1") {
        $('#modal-newform').modal("hide");
        $("#LoadPartialViews").html("");
        $("#LoadPartialViews").load("/GSD/GSDMacro");
    }
    else if (NewFileType == "2") {
        $('#modal-newform').modal("hide");
        $("#LoadPartialViews").html("");
        $("#LoadPartialViews").load("/GSD/GSDStyle");
    }
    else if (NewFileType == "3") {
        $('#modal-newform').modal("hide");
        $("#LoadPartialViews").html("");
        $("#LoadPartialViews").load("/GSD/GSDFeatures");
    }
    else if (NewFileType == "4") {
        $('#modal-newform').modal("hide");
        $("#LoadPartialViews").html("");
        $("#LoadPartialViews").load("/GSD/GSDOperations");
    }
    else {
        $('#modal-newform').modal("hide");
        $("#LoadPartialViews").html("");
    }
}