const os = require('os');

console.log(os.userInfo());
//Note: On POSIX platform, this is generally a subset of password file contains username, uid, gid, shell, and homedir. Windows shell is set to null and uid, gid are -1.


// Method to return system uptime in second.
console.log(`The system Uptime is ${os.uptime()} second`)

// some info about current operating system.

const curr = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem(),
}

console.log(curr);