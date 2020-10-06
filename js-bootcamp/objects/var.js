
//avoid var bc you can define it more than once without issue
//var has a function based scope - whereas others are block scoped
// can also access var before it's declared whereas others error
// vars declaration will always push to top of scope - though it won't keep value, so in below, the declaration is rendering at the top

age = 10
console.log(age)
var age