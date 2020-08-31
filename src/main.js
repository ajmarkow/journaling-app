import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import "src/journal.js";

$("form#journalcontainer").submit(function (event) {
  const journaltitle = $("input#journaltitle").val();
  const journalbody = $("input#journalbody").val();

  event.preventDefault();
});
