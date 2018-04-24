var text = ["Save Fuel", "Save Millions", "Reduce carbon footprint"];
var widthLength = ["205px", "270px", "520px"];

setInterval(function () {
    var i = Math.round(Math.random() * text.length);
    if (i == text.length) --i;
    $("#txt_update, #txt_update1").animate({ width: widthLength[i] });
    $("#txt_update, #txt_update1").html(text[i]);
}, 1500);