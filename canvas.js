// 
// document.getElementById("canvas").style.borderColor = "blue"



window.addEventListener('load', () => {
    console.log("hello world")



    const canvas = document.getElementById("canvas");
    const context = canvas.getContext('2d');
    const cWidth = window.innerWidth;
    const cHeight = window.innerHeight;

    canvas.height = window.cHeight;
    canvas.width = window.cWidth;
    context.strokeStyle="red";
    context.strokeRect(20,20, 20,20);

    for (let i = 0; i < cWidth / 10; i++ ) {
        context.strokeRect(i, 10, 1,  1);
    }

    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(200, 200);
    context.stroke();
    
})

