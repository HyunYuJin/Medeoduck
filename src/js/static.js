const canvas = document.getElementById("static");

if (canvas) {
    const context = canvas.getContext("2d");
    const { offsetWidth, offsetHeight } = canvas;
    canvas.width = offsetWidth;
    canvas.height = offsetHeight;
    const pixelSize = 1;

    const idata = context.createImageData(offsetWidth, offsetHeight);
    const buffer = new Uint32Array(idata.data.buffer);

    function noise(context) {
        let len = buffer.length - 1;

        while (len--) {
            buffer[len] = Math.random() < 0.5 ? 0 : -1 >> 0;
        }
        context.putImageData(idata, 0, 0);
    }

    (function loop() {
        noise(context);
        requestAnimationFrame(loop);
    })();
}