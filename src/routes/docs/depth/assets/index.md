# 📦 Asset Storage

### How are assets stored?

Assets are to be accessed and stored as `meta.cdl` files mentioned below.
These contain metadata about the asset, such as name, gender, favourite colour, and so on.

### Symbolic Links

There are two ways of accesing the asset's cdl file.

##### a) Using the asset's hash or tag

Each asset has a 'hash'. This is a SHA1 encryption of their last name, spaced by their first name, **at the start of the game**. These are accesed in `%cdls%\Assets\%hash%\cdlpackage\meta.cdl`

##### b) Using the asset's index link

Each asset can be accesed at `%cdls%\Assets\index\%CDLlastName%\%CDLfirstName%\.cdlpackage\meta.cdl`.
`%CDLfirstName%` is a symbolic link to their hash.