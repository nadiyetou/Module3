var now  = new Date();        // current date/time
    var hrs  = now.getHours();    // 0 to 23
    var mins = now.getMinutes();
    var secs = now.getSeconds();
    document.writeln("<p>It is " + now + "</p>");
    document.writeln("<p>Hour is " + hrs + "</p>");
    document.writeln("<p>Minute is " + mins + "</p>");
    document.writeln("<p>Second is " + secs + "</p>");
    if (hrs < 12) {
      document.writeln("<h2>Good Morning!</h2>");
    } else {
      document.writeln("<h2>Good Afternoon!</h2>");
    }