
function cachedFetch(expirey){
    const cache={};

    return async function cacheFetch(url){
        if(cache[url]){
            const cachedData = cache[url];
            cacheTime = cachedData.timestamp;
            cachedData.timestamp = new Date.getTime();
            if(currentTime - cacheTime < expirey * 1000 * 60){
                return cachedData.data;
            }
        }

        try{
            const response = await fetch(url);
            const responseResult = await response.json();

            cache[url] = {
                data: responseResult,
                timestamp: new Date.getTime()
            };

            return responseResult;
        }catch(err){
            console.log("Fetch Error: ", err);
            throw err;
        }
    }
}

// cacheing optimal solution.

function cacheing(){
    let queue = [];   // You can also use doubly linkedlist here.
    let map = {};   // key - location in queue of that key.

    // public method.
    function add(req, res, time){

        // make request get response.

        // update its expiry which is date.now().

        // add in last of queue.

        // remove all expired req from the begining of quueue. (cleanup take lot's of time)
    }

    function get(req){
        if(map[req]){
            // please update its new expiry.
            return map[req];
        }

        // if not there call add.
    }

    // Private method.
    function remove(req){
        // remove reques from queue and map.
    }
}