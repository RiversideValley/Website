# 🏛️ Rules

### What is the purpose of this file?

To ensure all Fluxduct repositories are created properly.

On Codrex, this file also makes sure the documentation is created properly.

####  - *Not in order of importance* - 

## 1:

All README's and markdown files must be created with this template and key:
###### Template:
```
# 📎 Rules Example

### What is this?

Lorem ipsum dolor sit amet nonummy justo consequat kasd tempor dolores.

### Some more questions?

Lorem ipsum dolor sit amet nulla lorem sed facer sea erat.
```
###### Key:

# Headings/Names
## Rules/Important
### Questions
#### *- Notes/Disclaimer (Italicised) -*
##### Steps
###### Guidance
`Code/Templates`

All Headings must have an emoji.

## 2:

All repositories with Flux code in them must have an appropriate `.gitattributes` file with the Flux code identifier in it.

###### Identifier:

`*.flx linguist-language=Flux`

## 3:

Bundle identifiers must follow the correct format.

| TLD*            |.| Company*        |.| Application*    | Sub-application | Service        |
|-----------------|-|-----------------|-|-----------------|-----------------|----------------|
| dev             |.| fluxduct        |.| syntax          | -               | @pipeline      |
| dev             |.| fluxduct        |.| capacitor       | creator         | @repo          |

*-* *Those marked with*  * *are required* *-*
