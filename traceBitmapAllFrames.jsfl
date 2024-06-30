// Function to apply Trace Bitmap on all frames
function traceBitmapOnAllFrames() {
    // Get the current document object model (DOM)
    var dom = fl.getDocumentDOM();
    // Get the timeline object from the current DOM
    var timeline = dom.getTimeline();
    // Get the total number of frames in the timeline
    var totalFrames = timeline.frameCount;

    // Loop through each frame in the timeline
    for (var i = 0; i < totalFrames; i++) {
        // Set the current frame to the frame at index i
        timeline.currentFrame = i;

        // Get all elements in the current frame of the first layer
        var elements = dom.selection = dom.getTimeline().layers[0].frames[i].elements;

        // Loop through each element in the current frame
        for (var j = 0; j < elements.length; j++) {
            // Check if the element is a bitmap instance
            if (elements[j].elementType === "instance" && elements[j].instanceType === "bitmap") {
                // Deselect any currently selected elements
                dom.selectNone();
                // Select the current bitmap element
                dom.selection = [elements[j]];

                // Apply Trace Bitmap to the selected bitmap element
                // Parameters: threshold, minimum area, curve fit, corner threshold
                dom.traceBitmap(100, 8, 8, 10);
            }
        }
    }
}

// Execute the function to apply Trace Bitmap on all frames
traceBitmapOnAllFrames();
