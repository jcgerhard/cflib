# Separation Types and Naming Conventions

## Naming Conventions

- Multiple colors or inks are named "separations" (plural)
  - use the long version "separations" when appropriate
  - use the short version "seps" when appropriate to shorten longer designations
- A single color or ink is named "separation" (singular)
  - use the long version "separation" when appropriate
  - use the short version "sep" when appropriate to shorten longer designations

## Process Colors

Process colors are:

- Cyan
- Magenta
- Yellow
- Black

## Spot Colors

Spot colors are all separations that are not process, varnish or technical colors.

## Technical Separation Types

There are 3 distinct separation types provided by the "type" property:

- standard
- varnish
- technical

## General Separation Types

There are 8 different separation types in general speaking which are determined as follows:

### Cyan

- name: 'Cyan'
- type: 'standard'
- is_process: true

### Magenta

- name: 'Magenta'
- type: 'standard'
- is_process: true

### Yellow

- name: 'Yellow'
- type: 'standard'
- is_process: true

### Black

- name: 'Black'
- type: 'standard'
- is_process: true

### Spot

- type: 'standard'
- is_process: false
- opacity: 0

### Opaque

- type: 'standard'
- is_process: false
- opacity: 1

### Varnish

- type: 'varnish'
- is_process: false

### Technical

- type: 'technical'
- is_process: false
