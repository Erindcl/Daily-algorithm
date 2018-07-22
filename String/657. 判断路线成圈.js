/*
	657. 判断路线成圈
    初始位置 (0, 0) 处有一个机器人。给出它的一系列动作，判断这个机器人的移动路线是否形成一个圆圈，换言之就是判断它是否会移回到原来的位置。
    移动顺序由一个字符串表示。每一个动作都是由一个字符来表示的。机器人有效的动作有 R（右），L（左），U（上）和 D（下）。输出应为 true 或 false，表示机器人移动路线是否成圈。
*/

var judgeCircle = function(moves) {
    let x = 0, y = 0;
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "U":
                x++;
                break;
            case "D":
                x--;
                break;
            case "L":
                y--;
                break;
            default:
                y++;
        }
    }
    console.log(x,y);
    return x == 0 && y == 0;
};


// 更好的实现
var judgeCircle = function(moves) {
  let v = 0, h = 0;
  for (let move of moves) {
    switch (move) {
      case 'U': v += 1; break;
      case 'D': v -= 1; break;
      case 'L': h += 1; break;
      case 'R': h -= 1; break;
    }
  }
  return v === 0 && h === 0
};
