# Get Meta Data Schema

Schema for the object received from the Cloudflow "Get Meta Data" node.

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
    }
  }
}
