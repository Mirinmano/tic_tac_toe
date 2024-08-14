var b1 = 0,
        b2 = 0,
        b3 = 0,
        b4 = 0,
        b5 = 0,
        b6 = 0,
        b7 = 0,
        b8 = 0,
        b9 = 0;
      var flag = 0;
      function m1() {
        if (b1 == 0 && flag % 2 == 0) {
          document.getElementById("img1").src =
            "https://logosandtypes.com/wp-content/uploads/2020/08/xprize.png";
          b1 = 1;
          flag += 1;
        } else if (b1 == 0 && flag % 2 != 0) {
          document.getElementById("img1").src =
            "https://i.pinimg.com/originals/fc/d7/90/fcd7906e849c123200403029056612fe.png";
          b1 = 2;
          flag += 1;
        }
      }
      function m2() {
        if (b2 == 0 && flag % 2 == 0) {
          document.getElementById("img2").src =
            "https://logosandtypes.com/wp-content/uploads/2020/08/xprize.png";
          b2 = 1;
          flag += 1;
        } else if (b2 == 0 && flag % 2 != 0) {
          document.getElementById("img2").src =
            "https://i.pinimg.com/originals/fc/d7/90/fcd7906e849c123200403029056612fe.png";
          b2 = 2;
          flag += 1;
        }
      }
      function m3() {
        if (b3 == 0 && flag % 2 == 0) {
          document.getElementById("img3").src =
            "https://logosandtypes.com/wp-content/uploads/2020/08/xprize.png";
          b3 = 1;
          flag += 1;
        } else if (b3 == 0 && flag % 2 != 0) {
          document.getElementById("img3").src =
            "https://i.pinimg.com/originals/fc/d7/90/fcd7906e849c123200403029056612fe.png";
          b3 = 2;
          flag += 1;
        }
      }
      function m4() {
        if (b4 == 0 && flag % 2 == 0) {
          document.getElementById("img4").src =
            "https://logosandtypes.com/wp-content/uploads/2020/08/xprize.png";
          b4 = 1;
          flag += 1;
        } else if (b4 == 0 && flag % 2 != 0) {
          document.getElementById("img4").src =
            "https://i.pinimg.com/originals/fc/d7/90/fcd7906e849c123200403029056612fe.png";
          b4 = 2;
          flag += 1;
        }
      }
      function m5() {
        if (b5 == 0 && flag % 2 == 0) {
          document.getElementById("img5").src =
            "https://logosandtypes.com/wp-content/uploads/2020/08/xprize.png";
          b5 = 1;
          flag += 1;
        } else if (b5 == 0 && flag % 2 != 0) {
          document.getElementById("img5").src =
            "https://i.pinimg.com/originals/fc/d7/90/fcd7906e849c123200403029056612fe.png";
          b5 = 2;
          flag += 1;
        }
      }
      function m6() {
        if (b6 == 0 && flag % 2 == 0) {
          document.getElementById("img6").src =
            "https://logosandtypes.com/wp-content/uploads/2020/08/xprize.png";
          b6 = 1;
          flag += 1;
        } else if (b6 == 0 && flag % 2 != 0) {
          document.getElementById("img6").src =
            "https://i.pinimg.com/originals/fc/d7/90/fcd7906e849c123200403029056612fe.png";
          b6 = 2;
          flag += 1;
        }
      }
      function m7() {
        if (b7 == 0 && flag % 2 == 0) {
          document.getElementById("img7").src =
            "https://logosandtypes.com/wp-content/uploads/2020/08/xprize.png";
          b7 = 1;
          flag += 1;
        } else if (b7 == 0 && flag % 2 != 0) {
          document.getElementById("img7").src =
            "https://i.pinimg.com/originals/fc/d7/90/fcd7906e849c123200403029056612fe.png";
          b7 = 2;
          flag += 1;
        }
      }
      function m8() {
        if (b8 == 0 && flag % 2 == 0) {
          document.getElementById("img8").src =
            "https://logosandtypes.com/wp-content/uploads/2020/08/xprize.png";
          b8 = 1;
          flag += 1;
        } else if (b8 == 0 && flag % 2 != 0) {
          document.getElementById("img8").src =
            "https://i.pinimg.com/originals/fc/d7/90/fcd7906e849c123200403029056612fe.png";
          b8 = 2;
          flag += 1;
        }
      }
      function m9() {
        if (b9 == 0 && flag % 2 == 0) {
          document.getElementById("img9").src =
            "https://logosandtypes.com/wp-content/uploads/2020/08/xprize.png";
          b9 = 1;
          flag += 1;
        } else if (b9 == 0 && flag % 2 != 0) {
          document.getElementById("img9").src =
            "https://i.pinimg.com/originals/fc/d7/90/fcd7906e849c123200403029056612fe.png";
          b9 = 2;
          flag += 1;
        }
      }
      function check() {
        if (
          (b1 == 1 && b2 == 1 && b3 == 1) ||
          (b1 == 1 && b5 == 1 && b9 == 1) ||
          (b1 == 1 && b4 == 1 && b7 == 1) ||
          (b4 == 1 && b5 == 1 && b6 == 1) ||
          (b3 == 1 && b5 == 1 && b7 == 1) ||
          (b2 == 1 && b5 == 1 && b8 == 1) ||
          (b3 == 1 && b6 == 1 && b9 == 1) ||
          (b7 == 1 && b8 == 1 && b9 == 1)
        ) {
          alert("CONGRATULATIONS\n<<<PLAYER 'X' WINS>>>");
          window.location.replace("index.html");
        } else if (
          (b1 == 2 && b2 == 2 && b3 == 2) ||
          (b1 == 2 && b5 == 2 && b9 == 2) ||
          (b1 == 2 && b4 == 2 && b7 == 2) ||
          (b4 == 2 && b5 == 2 && b6 == 2) ||
          (b3 == 2 && b5 == 2 && b7 == 2) ||
          (b2 == 2 && b5 == 2 && b8 == 2) ||
          (b3 == 2 && b6 == 2 && b9 == 2) ||
          (b7 == 2 && b8 == 2 && b9 == 2)
        ) {
          alert("CONGRATULATIONS\n<<<PLAYER 'O' WINS>>>");
          window.location.replace("index.html");
        } else if (flag == 9) {
          alert("BETTER LUCK NEXT TIME!!!");
          window.location.replace("index.html");
        }
      }