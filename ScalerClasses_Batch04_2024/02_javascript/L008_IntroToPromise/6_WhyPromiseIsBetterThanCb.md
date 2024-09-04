# Why Promise are better than callbacks:
    1. Promsises can be either resolved or rejected once in the lifetime. (So we can trust the third party promise code)
    2. Callbacks of promise go to a seperate queue known as microtask queue it has higher priority than the normal callback queue.
    3. We can avoid pyramid of dom structure easily.
    4. Code is cleaner and easy to read/maintain. 

## Promise is a logic so it is a part of js(language)