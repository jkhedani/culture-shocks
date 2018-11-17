# Understanding Our Component Heirarchy

+-------------------------------------------+
| +--------++-----------------------------+ |
| |        || +-------------------------+ | |
| |        || | +---------------------+ | | |
| |        || | |                     | | | |
| |        || | +---------------------+ | | |
| |        || | Widgets                 | | |
| |        || | +---------------------+ | | |
| |        || | |                     | | | |
| |        || | |                     | | | |
| |        || | |                     | | | |
| |        || | +---------------------+ | | |
| |        || | Components              | | |
| |        || +-------------------------+ | |
| |        || Views                       | |
| +--------++-----------------------------+ |
| Layouts                                   |
+-------------------------------------------+
  Routes  

## Routes
Make up the out most layer and usually directly
relates to a client's request for web data. This
top level makes for a convenient wrapper to fetch
data for components to access or for ease of 
composing various layouts.

## Layouts
Static components that allow developers to uniformly
layout other compoents in a order that is aligned
with the designer's intentions.

## Views
Content components that usually fill the entirety of a
layout. Views provide nested control over composition of
widgets and components.

## Widgets
While very similar to components, widgets usually provide
a higher order of functionality which usually involve
multiple components.

## Components
Does one thing and one thing well.
