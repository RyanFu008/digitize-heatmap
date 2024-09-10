# rasterize-heatmap

Lightweight and flexible tool for rasterizing heatmaps. A deployment can be found at [ryanfu.me/rasterize-heatmap/](http://ryanfu.me/rasterize-heatmap/).

![Demonstration Image](assets/demo.png)

Paper used for example: Liu, W., Zhang, M., Liu, Y., Cui, L., Sano, Y., & Xu, S. (2024). Chemical and isotopic constraints on fluid origin and genesis of geothermal systems in the Tingri-Tangra Yumco rift, southern Tibetan Plateau. Geothermal Energy, 12(1). https://doi.org/10.1186/s40517-024-00311-8

## Features

- Upload PDF
  - Only displays first page on upload
- Traverse Page
  - Jump to any [1-indexed] page of the PDF
- Previous/Next Page
  - Jump to the previous or next page of the PDF
- Crop
  - Select two diagonally opposite corners of a rectangle to select a graph to get data for. Crops the view to only that rectangle. 
- Zoom In/Out
  - Magnifies the current view by increasing the size (in pixel dimensions) of the view. Warning - this may result in bugs when used in between cropping two corners.
- Set Discrete Axis
  - Used for graphs with a discrete colormap. Enter the number of colors you wish to map, then click on an instance of that color and then enter a value to correspond to that color. After the previously entered number of points is chosen, the colormap is saved.
- Choose Continuous Axis Endpoints
  - Used for graphs with a continuous colormap. Requires a linear colormap, and will not work with a 2 (or higher) dimensional colormap. Pick the two endpoints of the linear colormap, as well as the values corresponding to the two, and points will be filled in intermediately. 
  - First toggle Linear/Logarithmic before choosing this option
- Set Tolerance Value
  - When converting the colors on the image to datapoints, set the maximum Manhattan distance a color on the image can be from a color chosen in a previously chosen colormap to qualify as not undefined.
- Toggle Undefined Value Representation
  - By default, undefined values are set to -1. Alternatively, values can be interpolated (this is done by simply finding mapping to the closest occurence of a non-undefined number). 
- Toggle Linear/Logarithmic Scale
  - Changes continuous colorbar scale from linear to logarithmic.
- Get Data
  - Returns a CSV file with the numerical values mapped to a previously saved colormap, in the following format:
  ```
  Row 1 Column 1 Value, Row 1 Column 2 Value, Row 1 Column 3 Value, ...
  Row 2 Column 1 Value, Row 2 Column 2 Value, Row 2 Column 3 Value, ...
  Row 3 Column 1 Value, Row 3 Column 2 Value, Row 3 Column 3 Value, ...
  ```

[A demo of some of the features can be found here.](http://ryanfu.me/rasterize-heatmap/assets/demo-video.mp4)

## Contributing

Contributions are very welcome. This project attempts to follow the [JavaScript Standard Style](https://github.com/standard/standard) to ensure consistent code format. 

To install locally, simply git clone this repository. Everything is in HTML, Javascript, and a little bit of CSS, so you can instantly see modifications that you've made by opening `index.html` in a web browser. 

Improving functionality, documentation, or adding tests would be greatly appreciated!

## Author

I'm Ryan Fu, currently a high school student (junior) at Amador Valley High School. I don't have much experience with geothermal science, computer vision or open source in general, and would therefore greatly appreciate feedback or contributions of any kind. You can reach out to me via email at <ryanfu2008@gmail.com>.