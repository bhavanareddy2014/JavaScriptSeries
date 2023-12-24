// Immediately Invoked Function Expression (IIFE)

(function once(){  // named IIFE
    console.log("DB connected");
})();



( (name) => { 
    console.log("DB connected",name);
}) ("hello")

