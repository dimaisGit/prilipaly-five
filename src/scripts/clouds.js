import cloud from '../images/clouds-1_old.png'
import cloud2 from '../images/clouds-2.png'

import $ from 'jquery'

export function cloudsRunning() {

    var canvas = $('#clouds-canvas')[0];
    var ctx = canvas.getContext('2d'); 
    
    // Parent to the clouds canvas.
    let cloudsContainer = $('#clouds-container')
    
    // Canvas width and height based on parent.
    canvas.width = $(cloudsContainer).width(); 
    canvas.height = $(cloudsContainer).outerHeight();
    
    // Create an image element 
    var img = new Image(); 
    img.src = cloud;
    
    // Global variables
    var imageWidth;
    var imageHeight;
    var stackedVertical;
    
    window.onload = function() {
    
        // Update width.
        imageWidth = img.naturalWidth;
        imageHeight = img.naturalHeight;
    
        // Counter
        var imgCounter = imageWidth; 
        var scrollSpeed = 2; 
    
        // How many stacks of the image do we need.
        stackedVertical = Math.ceil(canvas.height / imageHeight);
    
        // Loop is called 60FPS.
        function loop() {
            // Clear it on loop.
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
    
            // We may need this logic more than once.
            for (let i = 0; i < stackedVertical; i++) {
                    // Draw the image center.
                    ctx.drawImage(img, imgCounter, (i*imageHeight), imageWidth, imageHeight);
    
                    // Draw image forward.
                    ctx.drawImage(img, imgCounter + imageWidth, (i*imageHeight), imageWidth, imageHeight);
    
                    // Draw image behind
                    ctx.drawImage(img, imgCounter - imageWidth, (i*imageHeight), imageWidth, imageHeight);
            }
    
            // Update image height.
            imgCounter += scrollSpeed;
    
            // Reset
            if (imgCounter >= imageWidth) {
                    imgCounter = 0; 
            }
    
            // Reloop.
            window.requestAnimationFrame(loop); 
        } 
    
        // Call it once.
        loop(); 
    
        // On window resize, also resize the canvas.
        window.addEventListener('resize', function() {
            canvas.width = $(cloudsContainer).width(); 
            canvas.height = $(cloudsContainer).outerHeight();
    
            // Reset stacked.
            stackedVertical = Math.ceil(canvas.height / imageHeight);
        }, false);
    
    };
}