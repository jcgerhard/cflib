# Project coding standards

## Script Naming Conventions

- Use snake_case for variables, functions, and methods
- Use snake_case with ALL_CAPS for constants

## Color Naming Conventions

- Multiple colors or inks are named "separations" (plural)
  - use the long version "separations" when appropriate
  - use the short version "seps" when appropriate to shorten longer designations
- A single color or ink is named "separation" (singular)
  - use the long version "separation" when appropriate
  - use the short version "sep" when appropriate to shorten longer designations
- Process colors are:
  - Cyan
  - Magenta
  - Yellow
  - Black
- Spot colors are all separations that are not process, varnish or technical colors
- There are 3 distinct separation types provided by the "type" property:
  - standard
  - varnish
  - technical
- There 8 different separation types used in general:
  - cyan
  - magenta
  - yellow
  - black
  - spot
  - opaque
  - varnish
  - technical

## Restrictions

- Do not use promises or async/await
- Do not use any third-party frameworks
- Use modern JavaScript (ES6+) features only
- Do not use TypeScript
- Do not use any deprecated or obsolete features
- Do not use any experimental features

## Object Schema Definition - "Export Metadata" Colors

- This object schema defines the separation object received from a PDF PACKZ export.
  
  ```json
  {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the separation."
    },
    "book": {
      "type": "string",
      "description": "The color book associated with the separation, if any."
    },
    "id": {
      "type": "string",
      "description": "The unique identifier for the separation."
    },
    "type": {
      "type": "string",
      "enum": ["standard", "varnish", "technical"],
      "description": "The type of the separation."
    },
    "is_process": {
      "type": "boolean",
      "description": "Indicates if the separation is a process color (CMYK)."
    },
    "opacity": {
      "type": "number",
      "description": "The opacity level of the separation."
    },
    "press": {
      "type": "string",
      "description": "The target press type for the separation."
    },
    "custominfo": {
      "type": "string",
      "description": "Custom information associated with the separation."
    },
    "red": {
      "type": "number",
      "description": "The red component of the color (RGB)."
    },
    "green": {
      "type": "number",
      "description": "The green component of the color (RGB)."
    },
    "blue": {
      "type": "number",
      "description": "The blue component of the color (RGB)."
    },
    "cyan": {
      "type": "number",
      "description": "The cyan component of the color (CMYK)."
    },
    "magenta": {
      "type": "number",
      "description": "The magenta component of the color (CMYK)."
    },
    "yellow": {
      "type": "number",
      "description": "The yellow component of the color (CMYK)."
    },
    "black": {
      "type": "number",
      "description": "The black component of the color (CMYK)."
    },
    "L": {
      "type": "number",
      "description": "The L* component of the color (Lab). Is also used to mark the darkest color with a value of -100"
    },
    "a": {
      "type": "number",
      "description": "The a* component of the color (Lab)."
    },
    "b": {
      "type": "number",
      "description": "The b* component of the color (Lab)."
    },
    "Loriginal": {
      "type": "number",
      "description": "The original L* component of the color (Lab)."
    },
    "index": {
      "type": "integer",
      "description": "The primary index of the separation."
    },
    "subindex": {
      "type": "integer",
      "description": "The sub-index of the separation."
    },
    "enabled": {
      "type": "boolean",
      "description": "Indicates if the separation is enabled."
    },
    "usage": {
      "type": "string",
      "description": "Indicates the usage status of the separation (e.g., 'Used', 'Unused')."
    }
  },
  "required": [
    "name",
    "book",
    "id",
    "type",
    "is_process",
    "opacity",
    "press",
    "custominfo",
    "red",
    "green",
    "blue",
    "cyan",
    "magenta",
    "yellow",
    "black",
    "L",
    "a",
    "b",
    "Loriginal",
    "index",
    "subindex",
    "enabled",
    "usage"
  ],
  "additionalProperties": false
  }
  ```

## Object Schema Definition - "Get Meta Data"

- This object schema defines the object received from a CLoudflow "Get Meta Data".

  ```json
  {
    "type": "object",
    "properties": {
      "number_of_pages": {
        "type": "integer",
        "description": "Total number of pages in the document."
      },
      "number_of_logical_pages": {
        "type": "integer",
        "description": "Number of logical pages."
      },
      "file_version": {
        "type": "string",
        "description": "PDF file version."
      },
      "file_producer": {
        "type": "string",
        "description": "Software that produced the PDF file."
      },
      "output_color_space": {
        "$ref": "#/$defs/outputColorSpace"
      },
      "page_boxes": {
        "$ref": "#/$defs/pageBoxes"
      },
      "layers": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/layer"
        }
      },
      "fonts": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/font"
        }
      },
      "xmp": {
        "$ref": "#/$defs/xmp"
      },
      "pages": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/page"
        }
      }
    },
    "required": [
      "number_of_pages",
      "number_of_logical_pages",
      "file_version",
      "file_producer",
      "output_color_space",
      "page_boxes",
      "layers",
      "fonts",
      "xmp",
      "pages"
    ],
    "$defs": {
      "outputColorSpace": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": ["subtractive"],
            "description": "Type of the color space."
          },
          "colorants": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/colorant"
            }
          },
          "colorants_are_ordered": {
            "type": "boolean",
            "description": "Indicates if the colorants array is ordered."
          },
          "is_separated": {
            "type": "boolean",
            "description": "Indicates if the file is separated."
          },
          "contains_color_managed_data": {
            "type": "boolean",
            "description": "Indicates if the file contains color managed data."
          }
        },
        "required": [
          "type",
          "colorants",
          "colorants_are_ordered",
          "is_separated",
          "contains_color_managed_data"
        ]
      },
      "colorant": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of the colorant/separation."
          },
          "type": {
            "type": "string",
            "enum": ["standard", "varnish", "opaque", "technical"],
            "description": "Type of the colorant."
          },
          "has_objects_without_halftones": {
            "type": "boolean",
            "description": "Indicates if there are objects without halftones for this colorant."
          },
          "previews": {
            "type": "object",
            "properties": {
              "cmyk": {
                "type": "array",
                "items": { "type": "number" },
                "minItems": 4,
                "maxItems": 4,
                "description": "CMYK preview values (0-1)."
              },
              "rgb": {
                "type": "array",
                "items": { "type": "number" },
                "minItems": 3,
                "maxItems": 3,
                "description": "RGB preview values (0-1)."
              }
            },
            "required": ["cmyk", "rgb"]
          },
          "process": {
            "type": "string",
            "description": "Associated printing process."
          },
          "area_coverage_mm": {
            "type": "object",
            "properties": {
              "trim": {
                "type": "number",
                "description": "Area coverage within the trim box in square millimeters."
              }
            },
            "required": ["trim"]
          },
          "color_book": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "description": "Name of the color book."
              }
            },
            "required": ["name"]
          },
          "opacity": {
            "type": "number",
            "description": "Opacity level (relevant for 'opaque' type)."
          }
        },
        "required": [
          "name",
          "type",
          "has_objects_without_halftones",
          "previews",
          "process",
          "area_coverage_mm"
        ]
      },
      "pageBox": {
        "type": "object",
        "properties": {
          "size": {
            "type": "object",
            "properties": {
              "width": { "type": "number" },
              "height": { "type": "number" }
            },
            "required": ["width", "height"]
          },
          "origin": {
            "type": "object",
            "properties": {
              "x": { "type": "number" },
              "y": { "type": "number" }
            },
            "required": ["x", "y"]
          },
          "unit": {
            "type": "string",
            "enum": ["pt"],
            "description": "Unit of measurement for size and origin."
          },
          "defined_in_document": {
            "type": "boolean",
            "description": "Indicates if the box is explicitly defined in the document."
          },
          "size_mm": {
            "type": "object",
            "properties": {
              "width": { "type": "number" },
              "height": { "type": "number" }
            },
            "required": ["width", "height"],
            "description": "Size in millimeters."
          },
          "size_uncompensated_mm": {
            "type": "object",
            "properties": {
              "width": { "type": "number" },
              "height": { "type": "number" }
            },
            "required": ["width", "height"],
            "description": "Uncompensated size in millimeters."
          },
          "origin_mm": {
            "type": "object",
            "properties": {
              "x": { "type": "number" },
              "y": { "type": "number" }
            },
            "required": ["x", "y"],
            "description": "Origin in millimeters."
          }
        },
        "required": [
          "size",
          "origin",
          "unit",
          "defined_in_document",
          "size_mm",
          "size_uncompensated_mm",
          "origin_mm"
        ]
      },
      "pageBoxes": {
        "type": "object",
        "properties": {
          "media": { "$ref": "#/$defs/pageBox" },
          "crop": { "$ref": "#/$defs/pageBox" },
          "bleed": { "$ref": "#/$defs/pageBox" },
          "trim": { "$ref": "#/$defs/pageBox" },
          "art": { "$ref": "#/$defs/pageBox" }
        },
        "required": ["media", "crop", "bleed", "trim", "art"]
      },
      "layer": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of the layer."
          },
          "type": {
            "type": "string",
            "description": "Type of the layer."
          },
          "is_visible": {
            "type": "boolean",
            "description": "Indicates if the layer is visible."
          },
          "is_printing": {
            "type": "boolean",
            "description": "Indicates if the layer is set to print."
          }
        },
        "required": ["name", "type", "is_visible", "is_printing"]
      },
      "font": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of the font."
          },
          "postscript_name": {
            "type": "string",
            "description": "PostScript name of the font."
          },
          "types": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Types associated with the font (e.g., 'Type 0')."
          }
        },
        "required": ["name", "postscript_name", "types"]
      },
      "xmp": {
        "type": "object",
        "properties": {
          "schema": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri"
            },
            "description": "List of XMP schema URIs used."
          },
          "properties": {
            "type": "object",
            "properties": {
              "egGr:inks": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/xmpInk"
                }
              },
              "pdf:Producer": { "type": "string" },
              "pzInfo:info": {
                "type": "object",
                "properties": {
                  "pzInfo:docpath": { "type": "string" }
                },
                "required": ["pzInfo:docpath"]
              },
              "xmp:CreateDate": { "type": "string", "format": "date-time" },
              "xmp:CreatorTool": { "type": "string" },
              "xmp:MetadataDate": { "type": "string", "format": "date-time" },
              "xmp:ModifyDate": { "type": "string", "format": "date-time" },
              "xmpMM:DocumentID": { "type": "string" },
              "xmpMM:InstanceID": { "type": "string" },
              "xmpMM:RenditionClass": { "type": "string" },
              "xmpMM:VersionID": { "type": "string" }
            },
            "required": [
              "egGr:inks",
              "pdf:Producer",
              "pzInfo:info",
              "xmp:CreateDate",
              "xmp:CreatorTool",
              "xmp:MetadataDate",
              "xmp:ModifyDate",
              "xmpMM:DocumentID",
              "xmpMM:InstanceID",
              "xmpMM:RenditionClass",
              "xmpMM:VersionID"
            ],
            "description": "Key-value pairs of XMP properties."
          }
        },
        "required": ["schema", "properties"]
      },
      "xmpInk": {
        "type": "object",
        "properties": {
          "egInk:attribute": { "type": "string" },
          "egInk:b": { "type": "string" },
          "egInk:book": { "type": "string" },
          "egInk:egname": { "type": "string" },
          "egInk:g": { "type": "string" },
          "egInk:name": { "type": "string" },
          "egInk:printingmethod": { "type": "string" },
          "egInk:r": { "type": "string" },
          "egInk:type": { "type": "string" }
        },
        "required": [
          "egInk:attribute",
          "egInk:b",
          "egInk:book",
          "egInk:egname",
          "egInk:g",
          "egInk:name",
          "egInk:printingmethod",
          "egInk:r",
          "egInk:type"
        ]
      },
      "page": {
        "type": "object",
        "properties": {
          "output_color_space": {
            "$ref": "#/$defs/outputColorSpace"
          },
          "page_boxes": {
            "$ref": "#/$defs/pageBoxes"
          },
          "rotate": {
            "type": "integer",
            "description": "Page rotation in degrees."
          },
          "pixel_data": {
            "type": "object",
            "description": "Pixel data associated with the page (structure may vary)."
          },
          "layers": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/layer"
            }
          },
          "fonts": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/font"
            }
          }
        },
        "required": [
          "output_color_space",
          "page_boxes",
          "rotate",
          "pixel_data",
          "layers",
          "fonts"
        ]
      }
    }
  }
  ```
