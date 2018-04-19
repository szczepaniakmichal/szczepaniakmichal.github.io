$(document).ready(function () {
    $("#down").click(function () {
        $("#conainer").append($("#conainer p:first"));
    });
});


$(document).ready(function () {
    $("#up").click(function () {
        $("#conainer").prepend($("#conainer p:last"));
    });
});
