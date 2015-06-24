##$repeat and $if
 
`$if` control flow statement doesn't seem to receive a proper `$index` value. 

I was trying to `$repeat` elements based on an array with a changing length. Works fine when adding nodes, but nodes are not removed when an array (stored in states) shrinks. Tried to use in tandem with an `$if` statement and I wasn't able to access the right index. When passed the `$index`, `$if` is only called 2x and logs undefined and 0 for `$index`
 
