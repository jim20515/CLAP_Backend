$(function () {
    $('select').selectpicker();

    $('.date').datepicker({
        language: "zh-TW",
        clearBtn: true,
        todayHighlight: true,
        format: "yyyy-mm-dd",
        autoclose: true
    });

    $('.radio :radio, .checkbox :checkbox').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue',
        increaseArea: '20%' // optional
    });
});