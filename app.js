function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (height > 0 && weight > 0) {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    document.getElementById("result").textContent = `BMI: ${bmi} (${category})`;
  } else {
    document.getElementById("result").textContent = "Please enter valid values.";
  }
}
