

  $(document).ready(function () {
      'usr strict';
      paper.install(window);
      paper.setup(document.getElementById("maintest"));
      var c=Shape.Circle(200,200,50);
      c.fillColor="green";
      paper.view.drew();
  })