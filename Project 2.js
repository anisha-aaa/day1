let choice;

do {
  // Show the menu
  choice = prompt(
    " Calculator Menu:\n" +
    "1. Add\n" +
    "2. Subtract\n" +
    "3. Multiply\n" +
    "4. Divide\n" +
    "5. Exit\n" +
    "Enter your choice (1-5):"
  );
  if (choice === null) break;

  switch (choice) {
    case "1":
    case "2":
    case "3":
    case "4":
      let num1 = prompt("Enter first number:");
      let num2 = prompt("Enter second number:");
      if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
        alert(" Invalid input. Please enter valid numbers.");
        continue;
      }

      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      let result;

      switch (choice) {
        case "1":
          result = num1 + num2;
          alert(`Result: ${num1} + ${num2} = ${result}`);
          break;
        case "2":
          result = num1 - num2;
          alert(`Result: ${num1} - ${num2} = ${result}`);
          break;
        case "3":
          result = num1 * num2;
          alert(`Result: ${num1} × ${num2} = ${result}`);
          break;
        case "4":
          if (num2 === 0) {
            alert("Cannot divide by zero.");
            continue;
          }
          result = num1 / num2;
          alert(` Result: ${num1} ÷ ${num2} = ${result}`);
          break;
      }
      break;

    case "5":
      alert("👋 Exiting calculator. Goodbye!");
      break;

    default:
      alert("⚠️ Invalid choice. Please select from 1 to 5.");
      continue;
  }

} while (choice !== "5");
