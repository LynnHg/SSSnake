var sn = [ 42, 41 ], dz = 43, fx = 1, n, ctx = document.getElementById("playground").getContext("2d");
        var scores = document.getElementById("scores");
        var messages = document.getElementsByClassName("messages")[0];
        var start = document.getElementsByClassName('start')[0];
        var score = 0;
        var flag = 1;
		function draw(t, c) {
			ctx.fillStyle = c;
			ctx.fillRect(t % 20 * 20 + 1, ~~(t / 20) * 20 + 1, 18, 18);
		}
		document.onkeydown = function(e) {
			fx = sn[1] - sn[0] == (n = [ -1, -20, 1, 20 ][(e || event).keyCode - 37] || fx) ? fx : n
        };
        start.onmousedown = function() {
            start.style.background = '#FE8B1B';
            start.style.color = '#FE331B';
        }

        start.onmouseup = function() {
            start.style.background = '#FEAE1B';
            start.style.color = '#fff';
        }
        
        start.onclick = function() {
            if (flag) {
                move();
                flag = 0;
            }
           
        }

        function move() {
            var timer = 0;
            var flag = 0;
            sn.unshift(n = sn[0] + fx);
            if (sn.indexOf(n, 1) > 0 || n<0||n>399 || fx == 1 && n % 20 == 0 || fx == -1 && n % 20 == 19)
            {
                
                message(score);
                flag = 1;
            }
           
            draw(n, "Lime");
            if (n == dz) {
                while (sn.indexOf(dz = ~~(Math.random() * 400)) >= 0);
                scores.innerHTML = score;
                score++;            
                draw(dz, "Yellow");
            } else
                draw(sn.pop(), "#4785C7");
                timer =  setTimeout(arguments.callee, 130);;

                if (flag) {
                    clearTimeout(timer);
                }
        }
        
        
        function message(score) {
            
            if (score < 10) setInfo('你也太垃圾了吧!');
            else if (score < 30) setInfo('你好像有丶东西。');
            else  setInfo('那你是真得牛批！！！');
            
            
        }

        function setInfo(info) {
            messages.className += ' show';
            messages.innerHTML = info;
           
        }