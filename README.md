# rasterize-heatmap

Lightweight and flexible tool for rasterizing heatmaps. A deployment can be found at [ryanfu.me/rasterize-heatmap/](http://ryanfu.me/rasterize-heatmap/).

## Features

- Upload a file (PDF Required)
- Traverse pages
- Set endpoints of a [heatmap] graph axis
  - Options for continuous or discrete axis
  - Options for linear or logarithmic scale
- Crop a certain [heatmap] graph of a PDF

Returns data as a csv file, where image data is formatted as follows:

```
row 1 pixel 1 value, row 1 pixel 2 value, row 1 pixel 3 value, ...
row 2 pixel 1 value, row 2 pixel 2 value, row 2 pixel 3 value, ...
row 3 pixel 1 value, row 3 pixel 2 value, row 3 pixel 3 value, ...
```

[A demo can be found here.](http://ryanfu.me/rasterize-heatmap/demo-video.mp4)

## Contributing

