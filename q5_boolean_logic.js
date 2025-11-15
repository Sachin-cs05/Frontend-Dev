let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkAccess() {
    if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

console.log("Test 1 - All conditions met:");
checkAccess();

isDoorLocked = false;
console.log("Test 2 - Door unlocked:");
checkAccess();

isDoorLocked = true;
isWindowClosed = false;
console.log("Test 3 - Window open:");
checkAccess();

isWindowClosed = true;
isAlarmOn = false;
console.log("Test 4 - Alarm off:");
checkAccess();

isAlarmOn = true;