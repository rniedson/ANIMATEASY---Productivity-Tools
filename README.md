# Trace Bitmap JSFL Script

This repository contains a JSFL script to apply "Trace Bitmap" to all frames in an Adobe Animate document.

## Instructions

### Requirements

- Adobe Animate

### How to Use

1. **Download the `traceBitmapAllFrames.jsfl` file** from this repository.
2. **Open Adobe Animate** and load your project.
3. **Run the Script**:
   - Go to the **Commands > Run Command** menu.
   - Navigate to where you saved the `traceBitmapAllFrames.jsfl` file and select it to run.

### Script Details

The script performs the following steps:

1. Gets the current document and timeline.
2. Retrieves the total number of frames in the timeline.
3. Iterates through each frame in the timeline.
4. Selects the current frame.
5. Gets all elements on the current frame.
6. Iterates through each element and applies "Trace Bitmap" if the element is a bitmap.

### Trace Bitmap Parameters

The `traceBitmap` parameters (100, 8, 8, 10) are as follows:
- **Threshold**: 100
- **Minimum Area**: 8
- **Curve Fit**: 8
- **Corner Threshold**: 10

### Contributions

Feel free to contribute with improvements or new features. Just fork this repository and submit a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
