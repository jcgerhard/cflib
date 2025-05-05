# Export Metadata Schema

This object schema defines the separation object received from a PDF PACKZ export.

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
    "description": "The L* component of the color (Lab). Also used to mark the darkest color with -100"
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
