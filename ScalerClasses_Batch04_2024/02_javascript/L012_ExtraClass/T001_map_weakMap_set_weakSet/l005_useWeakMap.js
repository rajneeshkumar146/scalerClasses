let cache = new WeakMap();

function process(obj){
    if(!cache.has(obj)){
        // Processing.
        let futureDate = Date.now() + 2000;
        while(Date.now() < futureDate){
            // Do nothing.
        }


        let result = Math.random();
        cache.set(obj, result);        
    }

    return cache.get(obj);
}

// Module.exports
module.exports = {
    process, cache
}