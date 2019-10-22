import cloud from '../images/clouds-1.png'

import $ from 'jquery'

export function cloudsRunning() {
    let mass = $('.clouds-canvas');
    for (let i = 0; i < mass.length; i++) {
        let canvas = $('.clouds-canvas')[i];
        let ctx = canvas.getContext('2d');
        let cloudsContainer = $('.cloudsContainer')[i]

        canvas.width = $(cloudsContainer).width();
        canvas.height = $(cloudsContainer).outerHeight();
        let img = new Image();
        img.src = cloud;
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Global letiables
        let imageWidth;
        let imageHeight;
        let stackedVertical;


        // Update width.
        imageWidth = img.naturalWidth;
        imageHeight = img.naturalHeight;

        // Counter
        let imgCounter = imageWidth;
        let scrollSpeed = 1.1;

        stackedVertical = 1;

        // Loop is called 60FPS.
        function loop() {
            // Clear it on loop.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // We may need this logic more than once.
            for (let i = 0; i < stackedVertical; i++) {
                // Draw the image center.
                ctx.drawImage(img, imgCounter, (i * imageHeight), imageWidth, imageHeight);

                // Draw image forward.
                ctx.drawImage(img, imgCounter + imageWidth, (i * imageHeight), imageWidth, imageHeight);

                // Draw image behind
                ctx.drawImage(img, imgCounter - imageWidth, (i * imageHeight), imageWidth, imageHeight);
            }

            // Update image height.
            imgCounter += scrollSpeed;

            // Reset
            if (imgCounter >= imageWidth) {
                imgCounter = 0;
            }

            window.requestAnimationFrame(loop);
        }
        loop();

        // On window resize, also resize the canvas.
        // window.addEventListener('resize', function () {
        //     canvas.width = $(cloudsContainer).width();
        //     canvas.height = $(cloudsContainer).outerHeight();

        //     stackedVertical = Math.ceil(canvas.height / imageHeight);
        // }, false);
    }

}