const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialChar = ['!', '@', '#', '$', '^', '&', '*', '(', ')', '_', '-', '=']
let password = ''


for (let charCycleCounter = 0; charCycleCounter < 9; charCycleCounter++) {
    
    const arrayselector = Math.floor(Math.random() * 4);

    if (arrayselector === 0) {
        password += numbers[Math.floor(Math.random() * 10)];
        return;
    } else if (arrayselector === 1) {
        password += lowerChar[Math.floor(Math.random() * 26)];
        return;
    } else if (arrayselector === 2) {
        password += upperChar[Math.floor(Math.random() * 26)];
        return;
    } else if (arrayselector === 3) {
        password += specialChar[Math.floor(Math.random() * 12)];
        return;
    }
}

console.log("Your new password is: " + password);