# Website assets

Static files in this directory are served under `/assets/`.

- `icons/`: favicon and social SVG icons.
- `documents/`: downloadable résumé.
- `images/backgrounds/`: decorative backgrounds.
- `images/experience/`: TSMC, CloudMile, and Garmin images.
- `images/education/`: UIUC and National Tsing Hua University images.

## Adding company and school images

Suggested filenames (choose the extension matching the actual file):

```text
images/experience/tsmc.png
images/experience/cloudmile.png
images/experience/garmin.png
images/education/uiuc.png
images/education/nthu.png
```

SVG, PNG, JPG, and WebP are supported. Prefer lowercase, hyphenated filenames without spaces. Transparent PNG or SVG works well for logos. Do not change a file extension without converting the image.

The images are not displayed automatically: after adding them, connect their paths to the relevant React components. Keep `.gitkeep` until images have been added so Git tracks the empty folders.
