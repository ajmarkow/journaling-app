import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$("form#journalcontainer).submit(function (event) {
  const journaltitle = $("input#journaltitle").val();
  const journalbody = $("input#journalbody").val();

  event.preventDefault();
});
