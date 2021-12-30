let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let stat = document.getElementById('status');
stat.innerText = "Verification Required";

generate = () => {
    let first = alphabets[Math.floor(Math.random() * alphabets.length)];
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);
    captcha = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString() + sixth.toString();
    document.getElementById('generated-captcha').value = captcha;
    document.getElementById("entered-captcha").value = '';
    stat.innerText = "Verification Required";
}

check = () => {
    let userValue = document.getElementById("entered-captcha").value;
    console.log("CAPTCHA:", captcha);
    console.log("USER INPUT:", userValue);
    if (userValue == captcha) {
        stat.innerText = "Correct. Verified!"
    } else {
        stat.innerText = "Incorrect. Try again."
        document.getElementById("entered-captcha").value = '';
    }
}
