function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  setInterval(() => {
    $(document).ready(function() {
      var base = $("tr > td:nth-child(2) > div");
      var clase = $("#tabla_servicios > .table > tbody > tr > td:nth-child(2)");
      clase.each(function(index, element) {
        $(element).attr("onclick", "copyToClipboard" + "('" + "#id-" + (index + 1) + "')")
        $(element).attr("role", "button");
        $(element).attr("tabindex", "0");
        $(element).attr("class", "numeroacopiar");
      });
      base.each(function(index, element) {
        $(element).attr("id", "id-" + (index + 1));
      });
    });
  }, 0);
